import { cloneDeep } from 'lodash';
import initialState from '@/config/cart.state.js';
import OrderResource from '@/api/shop/OrderResource';
import ShopPayment from '@/components/Shop/ShopPayment';

const resource = new OrderResource();

const state = {
  ...initialState,
};

const getters = {
  value: ({ value }) => value,
  'value/loading': ({ value: { loading } }) => loading,
  'value/items': ({ value: { items } }) => items,
  'value/items/total': ({ value: { items } }) => items.length,
  'value/subtotal': ({ value: { items } }) => items.reduce((total, item) => {
    total += parseFloat(item.price || 0) * parseFloat(item.quantity);
    return total;
  }, 0),
  'value/total/discount': ({ value: { items } }) => items.reduce((total, item) => {
    total += (
      (parseFloat(item.discount_percentage || 0) / 100) * parseFloat(item.price || 0)
    ) * parseFloat(item.quantity);
    return total;
  }, 0),
  'value/total': (state, getters) => getters['value/subtotal'] - getters['value/total/discount'],
  'value/discount/percentage': ({ value: { discountPercentage } }) => discountPercentage,
  'value/payment/amount': ({ value: { paymentAmount } }) => paymentAmount,
  'value/change': (state, getters) => {
    const change = parseFloat(getters['value/payment/amount'] - getters['value/total']);
    return (change > 0) ? change : 0;
  },
  'value/disabled': (state, getters) => getters['value/total'] > (parseFloat(getters['value/payment/amount']) || 0),
  'value/dialog': ({ value: { dialog } }) => dialog,
};

const mutations = {
  'CART/VALUE/SET': (state, value) => { state.value = { ...state.value, ...value }; },
};

const actions = {
  'value/items/item/quantity': ({ commit, getters }, { value, selected }) => {
    const items = cloneDeep(getters['value/items']);
    const index = items.findIndex(item => item.id === selected.id);
    items[index].quantity = value;
    commit('CART/VALUE/SET', { items });
  },
  'value/items/item/quantity/add': ({ commit, getters }, selected) => {
    const items = cloneDeep(getters['value/items']);
    const index = items.findIndex(item => item.id === selected.id);
    items[index].quantity++;
    commit('CART/VALUE/SET', { items });
  },
  'value/items/item/quantity/deduct': ({ commit, getters }, selected) => {
    const items = cloneDeep(getters['value/items']);
    const index = items.findIndex(item => item.id === selected.id);
    if (items[index].quantity > 1) {
      items[index].quantity--;
    } else {
      items.splice(index, 1);
    }
    commit('CART/VALUE/SET', { items });
  },
  'value/discount/percentage': ({ commit }, discountPercentage) => commit('CART/VALUE/SET', { discountPercentage }),
  'value/payment/amount/input/value': ({ commit, getters }, value) => {
    const currentPaymentValue = getters['value/payment/amount'];
    let paymentAmount = currentPaymentValue.toString();
    if (value === 'delete') {
      paymentAmount = paymentAmount.slice(0, -1);
    } else if (value === '.') {
      const hasDecimal = paymentAmount.split('').includes('.');
      if (!hasDecimal) {
        paymentAmount = paymentAmount.concat(value);
      }
    } else {
      paymentAmount = paymentAmount.concat(value);
    }
    commit('CART/VALUE/SET', { paymentAmount });
  },
  'value/items/remove': ({ commit, getters }, selected) => {
    const items = cloneDeep(getters['value/items']);
    const index = items.findIndex(item => item.id === selected.id);
    items.splice(index, 1);
    commit('CART/VALUE/SET', { items });
  },
  'value/items/add': ({ commit, getters, dispatch }, selected) => {
    const items = cloneDeep(getters['value/items']);
    const exist = items.find(item => item.id === selected.id);
    if (exist) {
      dispatch('value/items/item/quantity/add', selected);
      return;
    }
    const item = {
      ...selected,
      quantity: 1,
    };
    items.push(item);
    commit('CART/VALUE/SET', { items });
  },
  'value/items/add/barcode': ({ dispatch, rootGetters }, barcode) => {
    const items = cloneDeep(rootGetters['products/list/value/items']);
    const item = (items || []).find(item => item.barcode === barcode);
    if (item) {
      dispatch('value/items/add', item);
    }
    return true;
  },
  'value/reset': ({ commit }) => {
    commit('CART/VALUE/SET', {
      items: [],
      discountPercentage: 0,
      paymentAmount: '',
      loading: false,
      dialog: false,
    });
  },
  'value/void/prompt': ({ commit }) => commit('CART/VALUE/SET', { dialog: true }),
  'value/void/prompt/confirm': async ({ dispatch }) => {
    dispatch('value/reset');
    dispatch('appdialog/close', {}, { root: true });
  },
  'value/void/prompt/cancel': ({ commit }) => {
    commit('CART/VALUE/SET', { dialog: false });
  },
  'payment/set': ({ dispatch }) => {
    dispatch('appdialog/set', {
      show: true,
      component: ShopPayment,
    }, { root: true });
  },
  'payment/complete': async ({ commit, getters, dispatch }) => {
    commit('CART/VALUE/SET', { loading: true });
    const { items, discountPercentage, paymentAmount } = getters.value;
    const cartItems = items.map(item => {
      const discountDecimal = parseFloat(item.discount_percentage || 0) / 100;
      const subtotal = parseFloat(item.quantity) * parseFloat(item.price || 0);
      const discountTotal = discountDecimal * subtotal;
      return {
        product_id: item.id,
        price: parseFloat(item.price || 0),
        quantity: item.quantity,
        discount_percentage: item.discount_percentage || 0,
        discount_total: discountTotal,
        total: subtotal - discountTotal,
        remarks: '',
      };
    });
    const cart = {
      branch_id: 1,
      items: cartItems,
      payment_amount: paymentAmount,
      discount_percentage: discountPercentage,
      total: getters['value/total'],
      subtotal: getters['value/subtotal'],
      discount_total: getters['value/total/discount'],
    };
    const { status } = await resource.create(cart);
    if (status === 201) {
      await dispatch('appsnackbar/set', { show: true, text: 'Order has been successfully placed.' }, { root: true });
      await dispatch('appdialog/reset', {}, { root: true });
      await dispatch('value/reset');
    }
    commit('CART/VALUE/SET', { loading: false });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
