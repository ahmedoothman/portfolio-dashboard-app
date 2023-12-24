import { createRouter, createWebHistory } from 'vue-router';
//auth pages
import LoginPage from './pages/authPages/LoginPage.vue';
import ForgetPassword from './pages/authPages/ForgetPassword';
// dashboard pages
import DashboardBase from './pages/dashboardPages/DashboardBase.vue';
import DashboardHome from './pages/dashboardPages/DashboardHome.vue';
// not found page
import NotFound from './pages/NotFound.vue';
// auth guard
import { isAuthenticatd } from './utils/auth';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // landing pages
    {
      path: '/',
      alias: '/login',
      component: LoginPage,
      name: 'login-page',
    },
    {
      path: '/forget-password',
      component: ForgetPassword,
      name: 'forget-password',
    },
    // dashboard pages
    {
      path: '/dashboard',
      component: DashboardBase,
      name: 'dashboard-base',
      children: [
        {
          path: 'home',
          component: DashboardHome,
          name: 'dashboard-home',
        },
      ],
      beforeEnter: (_, _2, next) => {
        if (isAuthenticatd(true)) {
          next();
        } else {
          next({ name: 'login-page' });
        }
      },
    },

    // not found page
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
      name: 'not-found',
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
});

export default router;
