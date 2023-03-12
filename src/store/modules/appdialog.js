const state = {
  value: {
    show: false,
    maxwidth: '600px',
    component: null,
    fullscreen: false,
  },
};

const getters = {
  show: ({ value: { show } }) => show,
  maxwidth: ({ value: { maxwidth } }) => maxwidth,
  component: ({ value: { component } }) => component,
  fullscreen: ({ value: { fullscreen } }) => fullscreen,
};

const mutations = {
  'DIALOG/SET': (state, dialog) => { state.value = { ...state.value, ...dialog }; },
};

const actions = {
  close: ({ commit }) => commit('DIALOG/SET', { show: false, component: null, fullscreen: false }),
  set: ({ commit }, dialog) => commit('DIALOG/SET', dialog),
  reset: ({ commit }) => commit('DIALOG/SET', {
    show: false,
    maxwidth: '600px',
    component: null,
    fullscreen: false,
  }),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
