<template>
  <div>
    <carousel
      :per-page="1"
      :navigate-to="someLocalProperty"
      :mouse-drag="false"
    >
      <slide>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/652f3b2cabfb4c2a9736aa2d009ae247_9366/NMD_R1_Shoes_White_EE5182_01_standard.jpg"
          alt=""
        />
      </slide>
      <slide>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/652f3b2cabfb4c2a9736aa2d009ae247_9366/NMD_R1_Shoes_White_EE5182_01_standard.jpg"
          alt=""
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Carosel",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>'
      ]
    };
  }
};
</script>

<style scoped>
.example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
}
</style>
