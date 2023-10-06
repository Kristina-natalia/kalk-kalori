import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  // Tambahkan rute untuk menu eksternal
  {
    path: '/menu-eksternal',
    name: 'MenuEksternal',
    beforeEnter() {
      // Redirect ke halaman eksternal
      window.location.href = 'https://kristina-natalia.github.io/bio2/';
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
