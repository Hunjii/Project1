import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home/Home.vue';
import Properties from './components/Properties/Properties.vue';
import PropertiesDetail from './components/Properties/PropertiesDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/properties',
      name: 'Properties',
      component: Properties
    },
    {
      path: '/properties/:id',
      name: 'PropertiesDetail',
      component: PropertiesDetail
    }
  ]
});

export default router;
