import initialState from '@/config/tags.state.js';
import TagResource from '@/api/tag/TagResource';
import TagForm from '@/components/Tag/TagForm';

const resource = new TagResource();

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
  'form/loading': ({ form: { loading } }) => loading,
  'form/errors': ({ form: { errors } }) => errors,
  'form/status': ({ form: { status } }) => status,
  'form/title': (state, getters) => (getters['form/value/id'] ? 'Edit Tag' : 'Add Tag'),
  'form/value': ({ form: { value } }) => value,
  'form/value/id': ({ form: { value } }) => value?.id,
  'form/value/name': ({ form: { value: { name } } }) => name,
  'form/value/description': ({ form: { value: { description } } }) => description,
};

const mutations = {
  'LIST/SET': (state, list) => { state.list = { ...state.list, ...list }; },
  'LIST/OPTIONS/SET': (state, options) => { state.list.options = { ...state.list.options, ...options }; },
  'FORM/SET': (state, form) => { state.form = { ...state.form, ...form }; },
  'FORM/VALUE/SET': (state, value) => { state.form.value = { ...state.form.value, ...value }; },
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
  'form/value/name': ({ commit }, name) => commit('FORM/VALUE/SET', { name }),
  'form/value/description': ({ commit }, description) => commit('FORM/VALUE/SET', { description }),
  'form/reset': ({ commit }) => {
    commit('FORM/SET', {
      value: {
        name: null,
        description: null,
      },
      loading: false,
      errors: {},
      status: null,
    });
  },
  'form/submit': async ({ getters, dispatch }) => {
    const { id } = getters['form/value'];
    if (id) {
      await dispatch('update');
      return;
    }
    await dispatch('create');
  },
  add: ({ dispatch }) => {
    dispatch('appdialog/set', {
      show: true,
      component: TagForm,
    }, { root: true });
  },
  edit: ({ commit, dispatch }, item) => {
    commit('FORM/VALUE/SET', item);
    dispatch('appdialog/set', {
      show: true,
      component: TagForm,
    }, { root: true });
  },
  create: async ({ commit, getters, dispatch }) => {
    commit('FORM/SET', { loading: true });
    const form = getters['form/value'];
    const { status, data } = await resource.create(form);
    commit('FORM/SET', { status, errors: (data.errors || {}), loading: false });
    if (status === 201) {
      await dispatch('appsnackbar/set', { show: true, text: 'Tag has been successfully added.' }, { root: true });
      await dispatch('appdialog/reset', {}, { root: true });
      await dispatch('list/get');
    }
  },
  update: async ({ commit, getters, dispatch }) => {
    commit('FORM/SET', { loading: true });
    const form = getters['form/value'];
    const { status, data } = await resource.update(form.id, form);
    commit('FORM/SET', { status, errors: (data.errors || {}), loading: false });
    if (status === 200) {
      await dispatch('appsnackbar/set', { show: true, text: 'Tag has been successfully updated.' }, { root: true });
      await dispatch('appdialog/reset', {}, { root: true });
      await dispatch('list/get');
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
