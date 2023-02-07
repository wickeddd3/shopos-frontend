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
    ],
    value: {
      loading: false,
      items: [
        {
          code: 'STORE001',
          name: 'Store One',
        },
        {
          code: 'STORE002',
          name: 'Store Two',
        },
        {
          code: 'STORE003',
          name: 'Store Three',
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
