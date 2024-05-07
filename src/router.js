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
import ProfileSettingsPage from './pages/dashboardPages/Settings/ProfileSettingsPage.vue';
import SmSettingsPage from './pages/dashboardPages/Settings/SmSettingsPage.vue';
import PasswordSettingsPage from './pages/dashboardPages/Settings/PasswordSettingsPage.vue';
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
          props: true,
        },
        {
          path: 'technology',
          component: TechnologyListPage,
        },
        {
          path: 'settings',
          component: SettingsBase,
          children: [
            {
              path: 'profile',
              component: ProfileSettingsPage,
              name: 'profile',
            },
            {
              path: 'social-media',
              component: SmSettingsPage,
              name: 'social-media',
            },
            {
              path: 'change-password',
              component: PasswordSettingsPage,
              name: 'change-password',
            },
          ],
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
