const state = {
  value: {
    show: false,
    maxwidth: '600px',
    component: null,
  },
};

const getters = {
  show: ({ value: { show } }) => show,
  maxwidth: ({ value: { maxwidth } }) => maxwidth,
  component: ({ value: { component } }) => component,
};

const mutations = {
  'DIALOG/SET': (state, dialog) => { state.value = { ...state.value, ...dialog }; },
};

const actions = {
  close: ({ commit }) => commit('DIALOG/SET', { show: false }),
  set: ({ commit }, dialog) => commit('DIALOG/SET', dialog),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
