import initialState from '@/config/transactions.state.js';
import OrderResource from '@/api/shop/OrderResource';
import OrderDetails from '@/components/Transaction/OrderDetails';

const resource = new OrderResource();

const state = {
  ...initialState,
};

const getters = {
  'list/ready': ({ list: { ready } }) => ready,
  'list/loading': ({ list: { loading } }) => loading,
  'list/headers': ({ list: { headers } }) => headers,
  'list/options': ({ list: { options } }) => options,
  'list/options/footer': ({ list: { footerOptions } }) => footerOptions,
  'list/value/items': ({ list: { value } }) => value?.data,
  'list/value/items/total': ({ list: { value } }) => value?.total,
  'selected/ready': ({ selected: { ready } }) => ready,
  'selected/headers': ({ selected: { headers } }) => headers,
  'selected/value': ({ selected: { value } }) => value,
  'selected/value/branch/name': ({ selected: { value } }) => value?.branch?.name,
  'selected/value/branch/code': ({ selected: { value } }) => value?.branch?.code,
  'selected/value/items': ({ selected: { value } }) => value?.items,
  'selected/value/items/length': ({ selected: { value } }) => (value?.items || []).length,
  'selected/value/items/discounted/length': ({ selected: { value } }) => (value?.items || [])
    .filter(item => parseFloat(item.discount_total) > 0)
    .length,
  'selected/value/date': ({ selected: { value } }) => value?.date,
  'selected/value/orderno': ({ selected: { value } }) => value?.order_no,
  'selected/value/payment/amount': ({ selected: { value } }) => value?.payment_amount,
  'selected/value/total': ({ selected: { value } }) => value?.total,
  'selected/value/subtotal': ({ selected: { value } }) => value?.subtotal,
  'selected/value/discount/total': ({ selected: { value } }) => value?.discount_total,
  'selected/value/discount/percentage': ({ selected: { value } }) => value?.discount_percentage,
  'selected/value/remarks': ({ selected: { value } }) => value?.remarks,
};

const mutations = {
  'LIST/SET': (state, list) => { state.list = { ...state.list, ...list }; },
  'LIST/OPTIONS/SET': (state, options) => { state.list.options = { ...state.list.options, ...options }; },
  'SELECTED/SET': (state, selected) => { state.selected = { ...state.selected, ...selected }; },
};

const actions = {
  'list/get': async ({ commit }, params) => {
    const { data } = await resource.list(params);
    commit('LIST/SET', { value: data, ready: true });
  },
  'list/options': async ({ commit, dispatch }, options) => {
    commit('LIST/SET', { loading: true });
    commit('LIST/OPTIONS/SET', options);

    const {
      itemsPerPage, page, sortBy, sortDesc,
    } = options;
    const [ sort ] = sortBy;
    const [ desc ] = sortDesc;
    let direction;

    if (desc === true) {
      direction = 'desc';
    } else if (desc === false) {
      direction = 'asc';
    }

    await dispatch('list/get', {
      page, sort, direction, per_page: itemsPerPage,
    });
    commit('LIST/SET', { loading: false });
  },
  'list/reset': ({ commit }) => commit('LIST/SET', { value: null, ready: false }),
  'selected/show': ({ commit, dispatch }, value) => {
    commit('SELECTED/SET', { value, ready: true });
    dispatch('appdialog/set', {
      show: true,
      component: OrderDetails,
      maxwidth: '1000px',
    }, { root: true });
  },
  'selected/reset': ({ commit }) => {
    commit('SELECTED/SET', {
      ready: false,
      value: {},
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
