import { cloneDeep } from 'lodash';
import initialState from '@/config/cart.state.js';
import OrderResource from '@/api/shop/OrderResource';
import Payment from '@/components/Shop/Payment';

const resource = new OrderResource();

const state = {
  ...initialState,
};

const getters = {
  value: ({ value }) => value,
  'value/loading': ({ value: { loading } }) => loading,
  'value/items': ({ value: { items } }) => items,
  'value/subtotal': ({ value: { items } }) => items.reduce((total, item) => {
    total += parseFloat(item.price) * parseFloat(item.quantity);
    return total;
  }, 0),
  'value/totalDiscount': ({ value: { items } }) => items.reduce((total, item) => {
    total += (parseFloat(item.discountPercentage) / 100) * parseFloat(item.price);
    return total;
  }, 0),
  'value/total': (state, getters) => getters['value/subtotal'] - getters['value/totalDiscount'],
  'value/discountPercentage': ({ value: { discountPercentage } }) => discountPercentage,
  'value/paymentAmount': ({ value: { paymentAmount } }) => paymentAmount,
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
  'value/discountPercentage': ({ commit }, discountPercentage) => commit('CART/VALUE/SET', { discountPercentage }),
  'value/paymentAmount': ({ commit }, paymentAmount) => commit('CART/VALUE/SET', { paymentAmount }),
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
      discountPercentage: 0,
    };
    items.push(item);
    commit('CART/VALUE/SET', { items });
  },
  'value/reset': ({ commit }) => {
    commit('CART/VALUE/SET', {
      items: [],
      discountPercentage: 0,
      paymentAmount: 500,
    });
  },
  'payment/set': ({ dispatch }) => {
    dispatch('appdialog/set', {
      show: true,
      component: Payment,
    }, { root: true });
  },
  'payment/complete': async ({ commit, getters, dispatch }) => {
    commit('CART/VALUE/SET', { loading: true });
    const { items, discountPercentage, paymentAmount } = getters.value;
    const cartItems = items.map(item => {
      const discountDecimal = parseFloat(item.discountPercentage) / 100;
      const subtotal = parseFloat(item.quantity) * parseFloat(item.price);
      const discountTotal = discountDecimal * subtotal;
      return {
        product_id: item.id,
        price: parseFloat(item.price),
        quantity: item.quantity,
        discount_percentage: item.discountPercentage,
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
      discount_total: getters['value/totalDiscount'],
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
