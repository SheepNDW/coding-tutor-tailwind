const Layout = () => import('@/views/Layout.vue');
const Home = () => import('@/views/home/Index.vue');
const Class = () => import('@/views/class/Index.vue');
const ClassDetail = () => import('@/views/class/detail/ClassDetail.vue');

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
      {
        path: '/classDetail',
        component: ClassDetail,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
