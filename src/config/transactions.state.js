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
        text: 'Date',
        align: 'center',
        sortable: true,
        value: 'date',
      },
      {
        text: 'Order No.',
        align: 'start',
        sortable: true,
        value: 'order_no',
      },
      {
        text: 'Payment',
        align: 'start',
        sortable: true,
        value: 'payment_amount',
      },
      {
        text: 'Total',
        align: 'right',
        sortable: true,
        value: 'total',
      },
      {
        text: 'Subtotal',
        align: 'right',
        sortable: true,
        value: 'subtotal',
      },
      {
        text: 'Discount',
        align: 'right',
        sortable: true,
        value: 'discount_total',
      },
      {
        text: 'Discount %',
        align: 'right',
        sortable: true,
        value: 'discount_percentage',
      },
    ],
    value: null,
    options: {
      itemsPerPage: 10,
      page: 1,
      sortBy: [ 'created_at' ],
    },
    footerOptions: {
      'items-per-page-options': [ 10, 20, 30, 40, 50 ],
    },
  },
  selected: {
    ready: false,
    value: {},
    headers: [
      {
        text: 'Code',
        align: 'start',
        sortable: true,
        value: 'product.code',
      },
      {
        text: 'Name',
        align: 'start',
        sortable: true,
        value: 'product.name',
      },
      {
        text: 'Quantity',
        align: 'center',
        sortable: true,
        value: 'quantity',
      },
      {
        text: 'Price',
        align: 'end',
        sortable: true,
        value: 'price',
      },
      {
        text: 'Discount %',
        align: 'end',
        sortable: true,
        value: 'discount_percentage',
      },
      {
        text: 'Discount $',
        align: 'end',
        sortable: true,
        value: 'discount_total',
      },
      {
        text: 'Total',
        align: 'end',
        sortable: true,
        value: 'total',
      },
    ],
  },
};
