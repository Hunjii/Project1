import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home/Home.vue';
import Properties from './components/Properties/Properties.vue';
import PropertiesDetail from './components/Properties/PropertiesDetail.vue';
import About from './components/About/About.vue';
import Contact from './components/Contact/Contact.vue';
import AddProperties from './components/Properties/AddProperties.vue';

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
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/addproperties',
      name: 'AddProperties',
      component: AddProperties
    }
  ]
});

export default router;
