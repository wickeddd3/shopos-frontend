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
        text: 'Permissions',
        align: 'start',
        sortable: true,
        value: 'permissions',
      },
    ],
    value: {
      loading: false,
      items: [
        {
          code: 'ROLE01',
          name: 'Administrator',
          permissions: 'All access',
        },
        {
          code: 'ROLE02',
          name: 'Manager',
          permissions: 'All access except user permissions',
        },
        {
          code: 'ROLE03',
          name: 'Supervisor',
          permissions: 'Shop and Products Management',
        },
        {
          code: 'ROLE04',
          name: 'Cashier',
          permissions: 'Shop only',
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
