export default {
  list: {
    ready: false,
    headers: [
      {
        text: 'Code',
        align: 'start',
        sortable: true,
        value: 'code',
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
        value: 'category',
      },
    ],
    value: {
      loading: false,
      items: [
        {
          code: 'PRODUCT001',
          name: 'Product One',
          category: 'Beverage',
        },
        {
          code: 'PRODUCT002',
          name: 'Product Two',
          category: 'Beverage',
        },
        {
          code: 'PRODUCT003',
          name: 'Product Three',
          category: 'Noodles',
        },
      ],
    },
    options: {
      itemsPerPage: 10,
      page: 1,
      sortBy: [ 'code' ],
    },
    footerOptions: {
      'items-per-page-options': [ 10, 20, 30, 40, 50 ],
    },
  },
};
