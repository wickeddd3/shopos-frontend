export default {
  list: {
    ready: false,
    loading: false,
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
      code: null,
      name: null,
      description: null,
    },
    loading: false,
    errors: {},
    status: null,
  },
};
