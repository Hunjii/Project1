<template>
  <div class="wrapper bg-white fix">
    <div class="bg-white">
      <Navigation />
      <transition name="moveInUp">
        <router-view />
      </transition>
      <Quickview />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
import Quickview from './Quickview.vue';
import Footer from './Footer.vue';
export default {
  name: 'Layout',
  components: {
    Navigation,
    Quickview,
    Footer
  }
};
</script>

<style scoped>
/* @import "../.././public/assets/css/bootstrap.min.css"; */
@import '../.././public/assets/css/core.css';
@import '../.././public/assets/css/shortcode/shortcodes.css';
@import '../.././public/assets/style.css';
@import '../.././public/assets/css/responsive.css';
@import '../.././public/assets/css/style-customizer.css';
@import '../.././public/assets/css/color/color-5.css';
/* .moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
} */
</style>
