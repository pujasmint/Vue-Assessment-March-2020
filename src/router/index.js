import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/PageHome';
import NotFound from '@/pages/PageNotFound';
import ThreadShow from '@/pages/PageThreadShow';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
});
