export default [
  {
    type: 'list-item',
    title: 'Dashboard',
    icon: 'mdi-chart-timeline-variant',
    route: '/',
  },
  {
    type: 'list-item',
    title: 'Reports',
    icon: 'mdi-file-chart-outline',
    route: '/reports',
  },
  {
    type: 'list-item',
    title: 'Transactions',
    icon: 'mdi-format-list-checkbox',
    route: '/transactions',
  },
  {
    type: 'list-item',
    title: 'Shop',
    icon: 'mdi-storefront-outline',
    route: '/shop',
  },
  {
    type: 'list-item',
    title: 'Branches',
    icon: 'mdi-store-settings-outline',
    route: '/branches',
  },
  {
    type: 'list-item',
    title: 'Stores',
    icon: 'mdi-store-outline',
    route: '/stores',
  },
  {
    type: 'divider',
    inset: false,
  },
  {
    type: 'subheader',
    inset: false,
    title: 'Management',
  },
  {
    type: 'list-item-group',
    title: 'Product',
    icon: 'mdi-package-variant-closed',
    children: [
      {
        title: 'Products',
        icon: 'mdi-package-variant',
        route: '/products',
      },
      {
        title: 'Categories',
        icon: 'mdi-archive-outline',
        route: '/categories',
      },
      {
        title: 'Brands',
        icon: 'mdi-seal-variant',
        route: '/brands',
      },
      {
        title: 'Tags',
        icon: 'mdi-tag-multiple-outline',
        route: '/tags',
      },
    ],
  },
  {
    type: 'list-item-group',
    title: 'User',
    icon: 'mdi-account-cog-outline',
    children: [
      {
        title: 'Users',
        icon: 'mdi-account-group-outline',
        route: '/users',
      },
      {
        title: 'Roles',
        icon: 'mdi-account-tie',
        route: '/roles',
      },
      {
        title: 'Permissions',
        icon: 'mdi-shield-account-outline',
        route: '/permissions',
      },
    ],
  },
  {
    type: 'divider',
    inset: false,
  },
  {
    type: 'subheader',
    inset: false,
    title: 'Settings',
  },
  {
    type: 'list-item',
    title: 'Profile',
    icon: 'mdi-account-outline',
    route: '/profile',
  },
];
