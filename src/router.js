import { createRouter, createWebHistory } from 'vue-router';
//auth pages
import LoginPage from './pages/authPages/LoginPage.vue';
import ForgetPassword from './pages/authPages/ForgetPassword';
// dashboard pages
import DashboardBase from './pages/dashboardPages/DashboardBase.vue';
import ProjectsListPage from './pages/dashboardPages/Projects/ProjectsListPage.vue';
import ProjectsForm from './pages/dashboardPages/Projects/ProjectsForm.vue';
import TechnologyListPage from './pages/dashboardPages/Technology/TechnologyListPage.vue';
import SettingsBase from './pages/dashboardPages/Settings/SettingsBase.vue';
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
      name: 'Login',
      beforeEnter: (_, _2, next) => {
        (async () => {
          if (await isAuthenticatd()) {
            next({ name: 'projects' });
          } else {
            next();
          }
        })();
      },
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
          path: 'projects',
          component: ProjectsListPage,
          name: 'projects',
        },
        {
          path: 'add-new-project',
          component: ProjectsForm,
          name: 'AddNewProject',
        },
        {
          path: 'edit-project/:id',
          component: ProjectsForm,
          name: 'editProject',
        },
        {
          path: 'technology',
          component: TechnologyListPage,
        },
        {
          path: 'settings',
          component: SettingsBase,
        },
      ],
      beforeEnter: (_, _2, next) => {
        (async () => {
          if (await isAuthenticatd()) {
            next();
          } else {
            next({ name: 'Login' });
          }
        })();
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
