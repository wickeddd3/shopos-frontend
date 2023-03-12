import initialState from '@/config/products.state.js';
import ProductResource from '@/api/product/ProductResource';
import ProductForm from '@/components/Product/ProductForm';
import ProductDetails from '@/components/Product/ProductDetails';

const resource = new ProductResource();

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
  'form/title': (state, getters) => (getters['form/value/id'] ? 'Edit Product' : 'Add Product'),
  'form/value': ({ form: { value } }) => value,
  'form/value/id': ({ form: { value } }) => value?.id,
  'form/value/branch': ({ form: { value } }) => value?.branch_id,
  'form/value/category': ({ form: { value } }) => value?.category_id,
  'form/value/brand': ({ form: { value } }) => value?.brand_id,
  'form/value/code': ({ form: { value: { code } } }) => code,
  'form/value/sku': ({ form: { value: { sku } } }) => sku,
  'form/value/barcode': ({ form: { value: { barcode } } }) => barcode,
  'form/value/name': ({ form: { value: { name } } }) => name,
  'form/value/description': ({ form: { value: { description } } }) => description,
  'form/value/tags': ({ form: { value: { tags } } }) => tags,
  'form/value/price': ({ form: { value: { price } } }) => price,
  'form/value/discount/percentage': ({ form: { value } }) => value?.discount_percentage,
  'selected/ready': ({ selected: { ready } }) => ready,
  'selected/value': ({ selected: { value } }) => value,
  'selected/value/branch/name': ({ selected: { value } }) => value?.branch?.name,
  'selected/value/category/name': ({ selected: { value } }) => value?.category?.name,
  'selected/value/brand/name': ({ selected: { value } }) => value?.brand?.name,
  'selected/value/code': ({ selected: { value } }) => value?.code,
  'selected/value/sku': ({ selected: { value } }) => value?.sku,
  'selected/value/barcode': ({ selected: { value } }) => value?.barcode,
  'selected/value/name': ({ selected: { value } }) => value?.name,
  'selected/value/description': ({ selected: { value } }) => value?.description,
  'selected/value/price': ({ selected: { value } }) => value?.price,
  'selected/value/discount/percentage': ({ selected: { value } }) => value?.discount_percentage,
};

const mutations = {
  'LIST/SET': (state, list) => { state.list = { ...state.list, ...list }; },
  'LIST/OPTIONS/SET': (state, options) => { state.list.options = { ...state.list.options, ...options }; },
  'FORM/SET': (state, form) => { state.form = { ...state.form, ...form }; },
  'FORM/VALUE/SET': (state, value) => { state.form.value = { ...state.form.value, ...value }; },
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
  'form/value/branch': ({ commit }, branchId) => commit('FORM/VALUE/SET', { branch_id: branchId }),
  'form/value/category': ({ commit }, categoryId) => commit('FORM/VALUE/SET', { category_id: categoryId }),
  'form/value/brand': ({ commit }, brandId) => commit('FORM/VALUE/SET', { brand_id: brandId }),
  'form/value/code': ({ commit }, code) => commit('FORM/VALUE/SET', { code }),
  'form/value/sku': ({ commit }, sku) => commit('FORM/VALUE/SET', { sku }),
  'form/value/barcode': ({ commit }, barcode) => commit('FORM/VALUE/SET', { barcode }),
  'form/value/name': ({ commit }, name) => commit('FORM/VALUE/SET', { name }),
  'form/value/description': ({ commit }, description) => commit('FORM/VALUE/SET', { description }),
  'form/value/tags': ({ commit }, tags) => commit('FORM/VALUE/SET', { tags }),
  'form/value/price': ({ commit }, price) => commit('FORM/VALUE/SET', { price }),
  'form/value/discount/percentage': ({ commit }, discountPercentage) => commit('FORM/VALUE/SET', { discount_percentage: discountPercentage }),
  'form/reset': ({ commit }) => {
    commit('FORM/SET', {
      value: {
        branch_id: null,
        category_id: null,
        brand_id: null,
        code: null,
        sku: null,
        barcode: null,
        name: null,
        description: null,
        tags: [],
        price: null,
        discount_percentage: null,
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
  'selected/show': ({ commit, dispatch }, value) => {
    commit('SELECTED/SET', { value, ready: true });
    dispatch('appdialog/set', {
      show: true,
      component: ProductDetails,
      maxwidth: '800px',
    }, { root: true });
  },
  'selected/reset': ({ commit }) => {
    commit('SELECTED/SET', {
      ready: false,
      value: {},
    });
  },
  add: ({ dispatch }) => {
    dispatch('appdialog/set', {
      show: true,
      component: ProductForm,
    }, { root: true });
  },
  edit: ({ commit, dispatch }, item) => {
    commit('FORM/VALUE/SET', item);
    dispatch('appdialog/set', {
      show: true,
      component: ProductForm,
    }, { root: true });
  },
  create: async ({ commit, getters, dispatch }) => {
    commit('FORM/SET', { loading: true });
    const form = getters['form/value'];
    const { status, data } = await resource.create(form);
    commit('FORM/SET', { status, errors: (data.errors || {}), loading: false });
    if (status === 201) {
      await dispatch('appsnackbar/set', { show: true, text: 'Product has been successfully added.' }, { root: true });
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
      await dispatch('appsnackbar/set', { show: true, text: 'Product has been successfully updated.' }, { root: true });
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
