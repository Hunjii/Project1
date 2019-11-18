import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./components/Layout.vue";
import Home from "./components/Home/Home.vue";
import Properties from "./components/Properties/Properties.vue";
import PropertiesDetail from "./components/Properties/PropertiesDetail.vue";
import About from "./components/OtherPage/About.vue";
import Contact from "./components/OtherPage/Contact.vue";
import AddProperties from "./components/Properties/AddProperties.vue";
//import Login from "./components/Admin/SignIn_SignUp";
import Darshboard from "./components/Admin/Darshboard";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: "properties",
          name: "Properties",
          component: Properties
        },
        {
          path: "properties/:id",
          name: "PropertiesDetail",
          component: PropertiesDetail
        },
        {
          path: "about",
          name: "About",
          component: About
        },
        {
          path: "/contact",
          name: "Contact",
          component: Contact
        },
        {
          path: "/addproperties",
          name: "AddProperties",
          component: AddProperties
        }
      ]
    },
    {
      path: "/admin",
      name: "Darshboard",
      component: Darshboard
    }
  ]
});

export default router;
