const Layout = () => import('@/views/Layout.vue');
const Home = () => import('@/views/home/Index.vue');
const Class = () => import('@/views/class/Index.vue');

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/classes',
        component: Class,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
