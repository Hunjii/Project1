<template>
  <div id="app">
    <div class="wrapper bg-white fix">
      <div class="bg-white">
        <!--Start of Bg White-->
        <Navigation />
        <transition name="moveInUp">
          <router-view />
        </transition>
        <!--End of Bg White-->
        <!--Start of Add Property Modal-->
        <Quickview />
        <!--End of Add Property Modal-->
      </div>
      <!--End of Main Wrapper Area-->
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Quickview from "./components/Quickview.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Quickview,
    Footer
  }
};
</script>

<style>
/* .moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
} */
.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}
@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
