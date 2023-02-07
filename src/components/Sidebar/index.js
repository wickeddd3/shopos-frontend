export default [
  {
    title: 'Dashboard',
    icon: 'mdi-chart-timeline-variant',
    route: '/',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'Reports',
    icon: 'mdi-file-chart-outline',
    route: '/reports',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'Shop',
    icon: 'mdi-store-outline',
    route: '/shop',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'Products',
    icon: 'mdi-package-variant',
    route: '/products',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'Branches',
    icon: 'mdi-store-settings-outline',
    route: '/branches',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'Stores',
    icon: 'mdi-storefront-outline',
    route: '/stores',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'All Users',
    icon: 'mdi-account-group-outline',
    route: '/users',
    hasSubmenu: false,
    children: [],
  },
  {
    title: 'My Account',
    icon: 'mdi-account-cog-outline',
    hasSubmenu: true,
    children: [
      {
        title: 'Profile',
        icon: 'mdi-account-outline',
        route: '/profile',
      },
      {
        title: 'Log Out',
        icon: 'mdi-logout',
        route: '/logout',
      },
    ],
  },
];
