import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./components/Layout.vue";
import Home from "./components/Home/Home.vue";
import Properties from "./components/Properties/Properties.vue";
import Profile from "./components/Properties/ProfileHost.vue";
import ProfileInfo from "./components/Properties/SettingProfile.vue";
import PropertiesDetail from "./components/Properties/PropertiesDetail.vue";
import EditRealState from "./components/Properties/EditRealState.vue";
import About from "./components/OtherPage/About.vue";
import Contact from "./components/OtherPage/Contact.vue";
import AddProperties from "./components/Properties/AddProperties.vue";
//import Login from "./components/Admin/SignIn_SignUp";
import Darshboard from "./components/Admin/Darshboard";
import User from "./components/Admin/User";
import AvaiRealestate from "./components/Admin/AvaiRealestate";
import Unconfirmed from "./components/Admin/Unconfirmed";
import Oder from "./components/Admin/Oder";

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
        },
        {
          path: "/profile/:id",
          name: "ProfileInfo",
          component: ProfileInfo
        },
        {
          path: "/profile/host/:realstate_id",
          name: "EditRealState",
          component: EditRealState
        },
        {
          path: "/profile",
          name: "Profile",
          component: Profile
        }
      ]
    },
    {
      path: "/admin",
      component: Darshboard,
      children: [
        {
          path: "user",
          name: "User",
          component: User
        },
        {
          path: "realestate",
          name: "RealEstate",
          component: AvaiRealestate
        },
        {
          path: "unconfirmed",
          name: "Unconfirmed",
          component: Unconfirmed
        },
        {
          path: "oder",
          name: "Oder",
          component: Oder
        }
      ]
    }
  ]
});

export default router;
