export default {
  list: {
    ready: false,
    loading: false,
    headers: [
      {
        text: 'Branch',
        align: 'start',
        sortable: true,
        value: 'branch.name',
      },
      {
        text: 'Code',
        align: 'start',
        sortable: true,
        value: 'code',
      },
      {
        text: 'SKU',
        align: 'start',
        sortable: true,
        value: 'sku',
      },
      {
        text: 'Barcode',
        align: 'start',
        sortable: true,
        value: 'barcode',
      },
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: 'Category',
        align: 'start',
        sortable: true,
        value: 'category.name',
      },
      {
        text: 'Brand',
        align: 'start',
        sortable: true,
        value: 'brand.name',
      },
      // {
      //   text: 'Tags',
      //   align: 'start',
      //   sortable: true,
      //   value: 'tags',
      // },
      {
        text: '',
        align: 'center',
        sortable: false,
        value: 'options',
      },
    ],
    value: null,
    options: {
      itemsPerPage: 10,
      page: 1,
      sortBy: [ 'code' ],
    },
    footerOptions: {
      'items-per-page-options': [ 10, 20, 30, 40, 50 ],
    },
  },
  form: {
    value: {
      branch_id: null,
      category_id: null,
      brand_id: null,
      code: null,
      sku: null,
      barcode: null,
      name: null,
      description: null,
    },
    loading: false,
    errors: {},
    status: null,
  },
};
