export default {
  list: {
    ready: false,
    headers: [
      {
        text: 'SKU',
        align: 'start',
        sortable: true,
        value: 'sku',
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
      {
        text: 'Brand',
        align: 'start',
        sortable: true,
        value: 'brand',
      },
      {
        text: 'Tags',
        align: 'start',
        sortable: true,
        value: 'tags',
      },
    ],
    value: {
      loading: false,
      items: [
        {
          sku: 'PRODUCT001',
          name: 'Product One',
          category: 'Beverage',
          brand: 'Brand1',
          tags: 'Tag1',
        },
        {
          sku: 'PRODUCT002',
          name: 'Product Two',
          category: 'Beverage',
          brand: 'Brand1',
          tags: 'Tag1',
        },
        {
          sku: 'PRODUCT003',
          name: 'Product Three',
          category: 'Noodles',
          brand: 'Brand2',
          tags: 'Tag2',
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
