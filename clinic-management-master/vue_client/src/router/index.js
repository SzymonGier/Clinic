import Vue from "vue";
import Router from "vue-router";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import RouterPath from "../components/shared/RouterPath";
import store from '../store';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'auth.login',
      component: Login,
      beforeEnter(to, from, next) {
        !store.getters['isAuthenticated'] ? next() : next({name: 'dashboard'})
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      redirect: '/dashboard/profile',
      component: Dashboard,
      beforeEnter(to, from, next) {
        store.getters['isAuthenticated'] ? next() : next({name: 'auth.login'})
      },
      children: [
        {
          path: 'profile',
          component: RouterPath,
        },
      ]
    }
  ]
});

export default router;
