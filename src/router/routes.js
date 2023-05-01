export default [
  {
    path: '*',
    name: 'NotFound',
    meta: {
      authOnly: true,
    },
    component: () => import(/* webpackChunkName: "notFound" */ '../pages/NotFound.vue'),
  },
  {
    path: '/login',
    meta: {
      guestOnly: true,
    },
    component: () => import(/* webpackChunkName: "login" */ '../pages/Login/index.vue'),
  },
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
          {
            path: ':id/edit',
            name: 'Edit',
            meta: {
              authOnly: true,
              breadcrumb: 'Edit',
            },
            component: () => import(/* webpackChunkName: "editUser" */ '../pages/Users/Edit.vue'),
          },
        ],
      },
      {
        path: 'profile',
        meta: {
          authOnly: true,
          breadcrumb: 'Profile',
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
            component: () => import(/* webpackChunkName: "profile" */ '../pages/Profile/index.vue'),
          },
          {
            path: 'password',
            name: 'Password',
            meta: {
              authOnly: true,
              breadcrumb: 'Password',
            },
            component: () => import(/* webpackChunkName: "password" */ '../pages/Profile/Password.vue'),
          },
        ],
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
        path: '/transactions',
        name: 'Transactions',
        meta: {
          authOnly: true,
          breadcrumb: 'Transactions',
        },
        component: () => import(/* webpackChunkName: "transactions" */ '../pages/Transactions/index.vue'),
      },
      {
        path: '/categories',
        name: 'Categories',
        meta: {
          authOnly: true,
          breadcrumb: 'Categories',
        },
        component: () => import(/* webpackChunkName: "categories" */ '../pages/Categories/index.vue'),
      },
      {
        path: '/brands',
        name: 'Brands',
        meta: {
          authOnly: true,
          breadcrumb: 'Brands',
        },
        component: () => import(/* webpackChunkName: "brands" */ '../pages/Brands/index.vue'),
      },
      {
        path: '/tags',
        name: 'Tags',
        meta: {
          authOnly: true,
          breadcrumb: 'Tags',
        },
        component: () => import(/* webpackChunkName: "tags" */ '../pages/Tags/index.vue'),
      },
      {
        path: '/roles',
        name: 'Roles',
        meta: {
          authOnly: true,
          breadcrumb: 'Roles',
        },
        component: () => import(/* webpackChunkName: "roles" */ '../pages/Roles/index.vue'),
      },
    ],
  },
];
