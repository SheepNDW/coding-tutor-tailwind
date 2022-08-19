const Layout = () => import('@/views/Layout.vue');
const Home = () => import('@/views/home/Index.vue');

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
