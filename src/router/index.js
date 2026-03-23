import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FormView from '../views/FormView.vue';
import SuccessView from '../views/SuccessView.vue';
import KimchaView from '../views/KimchaView.vue';
import DonationSuccessView from '../views/DonationSuccessView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView
  },
  {
    path: '/kimcha',
    name: 'kimcha',
    component: KimchaView
  },
  {
    path: '/donation-success',
    name: 'donation-success',
    component: DonationSuccessView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // תמיד גלול לראש העמוד בעת ניווט
    return { top: 0 }
  },
});

export default router; 