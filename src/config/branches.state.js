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
          code: 'BRANCH001',
          name: 'Branch One',
        },
        {
          code: 'BRANCH002',
          name: 'Branch Two',
        },
        {
          code: 'BRANCH003',
          name: 'Branch Three',
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
