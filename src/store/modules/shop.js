import initialState from '@/config/shop.state.js';

const state = {
  ...initialState,
};

const getters = {
  show: ({ show }) => show,
  mini: ({ mini }) => mini,
  'products/layout': ({ products: { layout } }) => layout,
  'products/layout/icon': ({ products: { layout } }) => ((layout === 'grid') ? 'mdi-format-list-bulleted' : 'mdi-view-grid-outline'),
  'products/layout/grid': ({ products: { layout } }) => layout === 'grid',
};

const mutations = {
  'SHOW/TOGGLE': state => { state.show = !state.show; },
  'MINI/TOGGLE': state => { state.mini = !state.mini; },
  'PRODUCTS/LAYOUT/SET': (state, layout) => {
    state.products.layout = layout;
    localStorage.setItem('shop.products.layout', layout);
  },
};

const actions = {
  'show/toggle': ({ commit }) => commit('SHOW/TOGGLE'),
  'mini/toggle': ({ commit }) => commit('MINI/TOGGLE'),
  'products/layout/toggle': ({ commit, getters }) => {
    const layout = (getters['products/layout'] === 'grid') ? 'list' : 'grid';
    commit('PRODUCTS/LAYOUT/SET', layout);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
