<template>
  <header class="header-area">
    <div class="header-top bg-violet">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-6 col-sm-6 hidden-xs">
            <div class="header-top-info">
              <img src="assets/images/icons/h-phone.png" alt />
              <span class="ml-8">+012 345 678 102</span>
            </div>
            <div class="header-top-info">
              <img src="assets/images/icons/h-envelope.png" alt />
              <span class="ml-8">info@example.com</span>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12 header-right">
            <div class="pull_right">
              <div class="header-login-register">
                <span>
                  <a href="create-agency.html">Create Agency</a>
                </span>
                <Login />
                <Register />
              </div>
              <div class="search-btn">
                <ul data-toggle="dropdown" class="header-search search-toggle">
                  <li class="search-menu">
                    <img src="assets/images/icons/search.png" alt class="p-img" />
                    <img src="assets/images/icons/search-hover.png" alt class="s-img" />
                  </li>
                </ul>
                <div class="search">
                  <div class="search-form">
                    <form id="search-form" action="#">
                      <input type="search" placeholder="Search here..." name="search" />
                      <button type="submit">
                        <span>
                          <i class="fa fa-search"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#"
              class="add-property-btn button text-uppercase mr-15 modal-view button"
              data-toggle="modal"
              data-target="#propertyModal"
            >ADD Property</a>
          </div>
        </div>
      </div>
    </div>
    <div id="sticky-header">
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-xs-12">
            <div class="logo">
              <a href="index.html">
                <img src="assets/images/logo/logo.png" alt="DomInno" />
              </a>
            </div>
          </div>
          <div class="col-md-10 hidden-sm hidden-xs">
            <div class="pull_right">
              <nav id="primary-menu">
                <ul class="main-menu text-right">
                  <li class="mega-parent active" v-for="(linkObj,index) in navList" :key="index">
                    <router-link :to="linkObj.path">{{ linkObj.name }}</router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu Area start -->
    <div class="mobile-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="mobile-menu">
              <nav id="dropdown">
                <ul>
                  <li>
                    <a href="index.html">HOME</a>
                  </li>
                  <li>
                    <a href="about.html">ABOUT</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="about-2.html">About Two Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="feature.html">FEATURE</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="#">Slider Style</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="slider-style-1.html">Slider Style 1</a>
                          </li>
                          <li>
                            <a href="map-banner.html">Map Banner</a>
                          </li>
                          <li>
                            <a href="background-image.html">Image Background</a>
                          </li>
                          <li>
                            <a href="text-animation-1.html">Text Animation 1</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Menu Style</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="menu-style-1.html">Default Menu</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Page Title</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="breadcrumb-center.html">Title Center</a>
                          </li>
                          <li>
                            <a href="breadcrumb-dark.html">Title Dark</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Footer Style</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="footer-style-1.html">Footer Style 1</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="properties.html">PROPERTIES</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="properties.html">Properties Left sidebar</a>
                      </li>
                      <li>
                        <a href="properties-details.html">Properties Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Page</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="properties.html">Propeties Page</a>
                      </li>
                      <li>
                        <a href="properties-details.html">Propeties Details</a>
                      </li>
                      <li>
                        <a href="single-post.html">Single Post</a>
                      </li>
                      <li>
                        <a href="agent.html">Agent</a>
                      </li>
                      <li>
                        <a href="agent-details.html">Agent Details</a>
                      </li>
                      <li>
                        <a href="create-agency.html">Create Agency</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog Page</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="services.html">Service</a>
                      </li>
                      <li>
                        <a href="feature.html">Feature</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="error.html">404 Error</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                    <ul class="sub-menu">
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu Area end -->
  </header>
  <!-- End of Header Area -->
</template>

<script>
import Login from "./Login-Register/Login.vue";
import Register from "./Login-Register/Register.vue";

export default {
  name: "Navigation",
  components: {
    Login,
    Register
  },
  data: () => ({
    navList: [
      {
        name: "Home",
        path: "/"
      },
      {
        name: "Properties",
        path: "/properties"
      },
      {
        name: "About",
        path: "/about"
      },
      {
        name: "Team",
        path: "/team"
      },
      {
        name: "Contact",
        path: "/contact"
      },
      {
        name: "Blog",
        path: "/blog"
      }
    ]
  })
};
</script>

<style>
</style>
