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
    ],
  },
];
