export default [
  {
    path: '/',
    meta: {
      authOnly: true,
      breadcrumb: 'Home',
    },
    component: {
      render (c) { return c('router-view'); },
    },
    children: [
      {
        path: '',
        meta: {
          authOnly: true,
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard/index.vue'),
      },
      {
        path: 'users',
        meta: {
          authOnly: true,
          breadcrumb: 'Users',
        },
        component: {
          render (c) { return c('router-view'); },
        },
        children: [
          {
            path: '',
            meta: {
              authOnly: true,
            },
            component: () => import(/* webpackChunkName: "users" */ '../pages/Users/index.vue'),
          },
          {
            path: 'create',
            name: 'Create',
            meta: {
              authOnly: true,
              breadcrumb: 'Create',
            },
            component: () => import(/* webpackChunkName: "createUser" */ '../pages/Users/Create.vue'),
          },
        ],
      },
      {
        path: '/profile',
        name: 'Profile',
        meta: {
          authOnly: true,
          breadcrumb: 'Profile',
        },
        component: () => import(/* webpackChunkName: "profile" */ '../pages/Profile/index.vue'),
      },
      {
        path: '/shop',
        name: 'Shop',
        meta: {
          authOnly: true,
          breadcrumb: 'Shop',
        },
        component: () => import(/* webpackChunkName: "shop" */ '../pages/Shop/index.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        meta: {
          authOnly: true,
          breadcrumb: 'Products',
        },
        component: () => import(/* webpackChunkName: "products" */ '../pages/Products/index.vue'),
      },
      {
        path: '/branches',
        name: 'Branches',
        meta: {
          authOnly: true,
          breadcrumb: 'Branches',
        },
        component: () => import(/* webpackChunkName: "branches" */ '../pages/Branches/index.vue'),
      },
      {
        path: '/stores',
        name: 'Stores',
        meta: {
          authOnly: true,
          breadcrumb: 'Stores',
        },
        component: () => import(/* webpackChunkName: "stores" */ '../pages/Stores/index.vue'),
      },
      {
        path: '/reports',
        name: 'Reports',
        meta: {
          authOnly: true,
          breadcrumb: 'Reports',
        },
        component: () => import(/* webpackChunkName: "reports" */ '../pages/Reports/index.vue'),
      },
      {
        path: '/transactions',
        name: 'Transactions',
        meta: {
          authOnly: true,
          breadcrumb: 'Transactions',
        },
        component: () => import(/* webpackChunkName: "transactions" */ '../pages/Transactions/index.vue'),
      },
    ],
  },
];
