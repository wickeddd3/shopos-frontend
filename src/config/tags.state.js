export default {
  list: {
    ready: false,
    loading: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'name',
      },
      {
        text: 'Description',
        align: 'start',
        sortable: true,
        value: 'description',
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
      sortBy: [ 'name' ],
    },
    footerOptions: {
      'items-per-page-options': [ 10, 20, 30, 40, 50 ],
    },
  },
  form: {
    value: {
      name: null,
      description: null,
    },
    loading: false,
    errors: {},
    status: null,
  },
};
