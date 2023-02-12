export default {
  list: {
    ready: false,
    headers: [
      {
        text: 'Code',
        align: 'start',
        sortable: true,
        value: 'transactionCode',
      },
      {
        text: 'Store',
        align: 'start',
        sortable: true,
        value: 'storeCode',
      },
      {
        text: 'Branch',
        align: 'start',
        sortable: true,
        value: 'branchCode',
      },
      {
        text: 'Date',
        align: 'center',
        sortable: true,
        value: 'date',
      },
      {
        text: 'Discount',
        align: 'right',
        sortable: true,
        value: 'totalDiscount',
      },
      {
        text: 'Subtotal',
        align: 'right',
        sortable: true,
        value: 'subtotal',
      },
      {
        text: 'Total',
        align: 'right',
        sortable: true,
        value: 'total',
      },
    ],
    value: {
      loading: false,
      items: [
        {
          transactionCode: 'ORDER001',
          storeCode: 'STORE001',
          branchCode: 'BRANCH001',
          date: '2023-02-12',
          totalDiscount: '0',
          subtotal: '480',
          total: '480',
        },
        {
          transactionCode: 'ORDER002',
          storeCode: 'STORE001',
          branchCode: 'BRANCH001',
          date: '2023-02-12',
          totalDiscount: '0',
          subtotal: '480',
          total: '480',
        },
        {
          transactionCode: 'ORDER003',
          storeCode: 'STORE001',
          branchCode: 'BRANCH001',
          date: '2023-02-12',
          totalDiscount: '0',
          subtotal: '480',
          total: '480',
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
