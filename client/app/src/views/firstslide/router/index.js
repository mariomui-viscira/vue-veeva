import Vue from 'vue';
import Router from 'vue-router';

// import { SiteName, TitleSeparator, RouterMode } from '@Config';

import Home from '../subviews/Home/Home.vue';
import About from '../subviews/About/About.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Hometitle',
      },
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta: {
        title: 'Abouttitle',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title + 'eh' + 'Mario';
  next();
});

export default router;
