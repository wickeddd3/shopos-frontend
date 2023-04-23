import initialState from '@/config/shop.state.js';
import ProductResource from '@/api/product/ProductResource';

const productResource = new ProductResource();

const state = {
  ...initialState,
};

const getters = {
  show: ({ show }) => show,
  mini: ({ mini }) => mini,
  'products/layout': ({ products: { layout } }) => layout,
  'products/layout/icon': ({ products: { layout } }) => ((layout === 'grid') ? 'mdi-format-list-bulleted' : 'mdi-view-grid-outline'),
  'products/layout/grid': ({ products: { layout } }) => layout === 'grid',
  'products/list/ready': ({ products: { list: { ready } } }) => ready,
  'products/list/value': ({ products: { list: { value } } }) => value || [],
};

const mutations = {
  'SHOW/TOGGLE': state => { state.show = !state.show; },
  'MINI/TOGGLE': state => { state.mini = !state.mini; },
  'PRODUCTS/LAYOUT/SET': (state, layout) => {
    state.products.layout = layout;
    localStorage.setItem('shop.products.layout', layout);
  },
  'PRODUCTS/LIST/SET': (state, list) => { state.products.list = { ...state.products.list, ...list }; },
};

const actions = {
  'show/toggle': ({ commit }) => commit('SHOW/TOGGLE'),
  'mini/toggle': ({ commit }) => commit('MINI/TOGGLE'),
  'products/layout/toggle': ({ commit, getters }) => {
    const layout = (getters['products/layout'] === 'grid') ? 'list' : 'grid';
    commit('PRODUCTS/LAYOUT/SET', layout);
  },
  'products/list/get': async ({ commit }, route) => {
    const { query: { filter } } = route;
    const { data } = await productResource.filter(filter || 'all');
    commit('PRODUCTS/LIST/SET', { value: data, ready: true });
  },
  'products/list/reset': ({ commit }) => commit('PRODUCTS/LIST/SET', { value: null, ready: false }),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
