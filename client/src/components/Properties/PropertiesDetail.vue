<template>
  <div>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-if="room">
      <!--Start of Banner Area-->
      <div class="banner-area bg-2 bg-overlay-2 ptb-165">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-title text-center">
                <h1 class="text-uppercase text-white">{{ room.Room.name }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End of Banner Area-->
      <!--Start of Featured Property Area-->
      <div class="property-area ptb-120">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div
                class="property-image mb-57"
                v-for="(img, index) in room.Room.roomImage"
                v-bind:item="img"
                v-bind:index="index"
                v-bind:key="img._id"
              >
                <img :src="`/${img.pathImg}`" alt />
              </div>
              <div class="property-desc mb-56">
                <h4 class="details-title mb-22">Description</h4>
                <p class="mb-24">
                  <span>Dom-Inno is</span> ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  etlor magna iqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut quipx ea codo loremed
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolo
                </p>
                <p class="mb-28">
                  Dom-Inno is the Best should be the consectetur adipiscing
                  elit, sed do eiusmod tempor incidint ut labore lore gna iqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex eacm emod tempor nt ut labore lore
                  magna iqua. Ut enim ad minim veniamco laboris nisi ut aliqu
                </p>
                <p>
                  Dom-Inno is the Best should be the consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore lore gna
                  iqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex eacm
                </p>
              </div>
              <div class="property-details">
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="details-title mb-38">Condition</h4>
                    <div
                      class="bg-gray fix pl-35 pt-42 pr-35 pb-39 left-column mb-56"
                    >
                      <div class="desc-info mb-37">
                        <img
                          src="/assets/images/icons/g-floor.png"
                          alt
                          class="pr-8"
                        />
                        <span>{{ room.Room.area }} sqft</span>
                      </div>
                      <div class="desc-info mb-37">
                        <img
                          src="/assets/images/icons/g-bed.png"
                          alt
                          class="pr-8"
                        />
                        <span>Bedroom {{ room.Room.bedroom }}</span>
                      </div>
                      <div class="desc-info mb-37">
                        <img
                          src="/assets/images/icons/g-shower.png"
                          alt
                          class="pr-8"
                        />
                        <span>Bathroom {{ room.Room.bathroom }}</span>
                      </div>
                      <div class="desc-info mb-37">
                        <img
                          src="/assets/images/icons/g-garage.png"
                          alt
                          class="pr-8"
                        />
                        <span>Garage {{ room.Room.garage }}</span>
                      </div>
                      <div class="desc-info mb-35">
                        <img
                          src="/assets/images/icons/kitchen.png"
                          alt
                          class="pr-8"
                        />
                        <span>Kitchen {{ room.Room.kitchen }}</span>
                      </div>
                      <div class="desc-info mb-35">
                        <span class="price">${{ room.Room.price }}</span>
                      </div>
                      <div class="desc-info">
                        <img
                          src="/assets/images/icons/g-map.png"
                          alt
                          class="pr-8"
                        />
                        <span class="location">{{ room.Room.address }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h4 class="details-title mb-38">Amenities</h4>
                    <div
                      class="bg-gray fix pl-50 pr-50 pt-44 pb-38 right-column mb-56"
                    >
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Air Conditioning</span>
                      </div>
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Bedding</span>
                      </div>
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Balcony</span>
                      </div>
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Cable TV</span>
                      </div>
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Internet</span>
                      </div>
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Parking</span>
                      </div>
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Lift</span>
                      </div>
                      <div class="desc-info mb-26">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Pool</span>
                      </div>
                      <div class="desc-info">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Dishwasher</span>
                      </div>
                      <div class="desc-info">
                        <i class="fa fa-check-square-o mr-9"></i>
                        <span>Toaster</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 pl-15">
                    <h4 class="details-title mb-37">Floor Plan</h4>
                    <div class="desc-images">
                      <img src="/assets/images/banner/plan.jpg" alt />
                    </div>
                  </div>
                  <div class="col-6 pr-15">
                    <h4 class="details-title mb-37">Video Presentation</h4>
                    <div class="desc-video">
                      <iframe
                        src="https://player.vimeo.com/video/63953556?title=0&byline=0&portrait=0"
                        width="475"
                        height="267"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div class="new-comment-post mt-35">
                  <h4 class="details-title pb-8 mb-27">Leave a Review</h4>
                  <form action="#" method="post">
                    <div class="comment-form">
                      <div class="col-5 pr-8">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          class="mb-28 bg-light"
                        />
                      </div>
                      <div class="col-5 pl-8">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          class="mb-28 bg-light"
                        />
                      </div>
                      <input
                        type="email"
                        name="subject"
                        placeholder="Subject"
                        class="mb-28 bg-light"
                      />
                      <textarea
                        name="post-comment"
                        cols="30"
                        rows="10"
                        placeholder="Write here"
                        class="mb-34 bg-light"
                      ></textarea>
                      <button
                        class="button text-uppercase lemon pl-30 pr-30"
                        type="submit"
                        value
                      >
                        Submit review
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-4 pl-35">
              <div class="single-sidebar-widget fix mb-60 hidden-sm hidden-xs">
                <div class="sidebar-widget-title mb-32">
                  <h5>Popular Property</h5>
                </div>
                <div class="row">
                  <div class="col-md-6 pr-9 mb-18 col-sm-3">
                    <div class="single-property hover-effect-two">
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-0 bg-violet"
                      >
                        <div class="title-left">
                          <h4 class="text-white mb-12">
                            <a href="properties-details.html"
                              >Sizling de Villa</a
                            >
                          </h4>
                        </div>
                      </div>
                      <div class="property-image">
                        <a
                          href="properties-details.html"
                          class="block dark-hover"
                        >
                          <img src="/assets/images/properties/s-1.jpg" alt />
                          <span class="img-button text-uppercase"
                            >More Details</span
                          >
                        </a>
                      </div>
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-9 bg-violet"
                      >
                        <h3>$52,354</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-9 mb-18 col-sm-3">
                    <div class="single-property hover-effect-two">
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-0 bg-violet"
                      >
                        <div class="title-left">
                          <h4 class="text-white mb-12">
                            <a href="properties-details.html">Zackson Heits</a>
                          </h4>
                        </div>
                      </div>
                      <div class="property-image">
                        <a
                          href="properties-details.html"
                          class="block dark-hover"
                        >
                          <img src="/assets/images/properties/s-2.jpg" alt />
                          <span class="img-button text-uppercase"
                            >More Details</span
                          >
                        </a>
                      </div>
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-9 bg-violet"
                      >
                        <h3>$65,435</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pr-9 col-sm-3">
                    <div class="single-property hover-effect-two">
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-0 bg-violet"
                      >
                        <div class="title-left">
                          <h4 class="text-white mb-12">
                            <a href="properties-details.html">Dom Plaza</a>
                          </h4>
                        </div>
                      </div>
                      <div class="property-image">
                        <a
                          href="properties-details.html"
                          class="block dark-hover"
                        >
                          <img src="/assets/images/properties/s-3.jpg" alt />
                          <span class="img-button text-uppercase"
                            >More Details</span
                          >
                        </a>
                      </div>
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-9 bg-violet"
                      >
                        <h3>$67,879</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-9 col-sm-3">
                    <div class="single-property hover-effect-two">
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-0 bg-violet"
                      >
                        <div class="title-left">
                          <h4 class="text-white mb-12">
                            <a href="properties-details.html">Rose de Villa</a>
                          </h4>
                        </div>
                      </div>
                      <div class="property-image">
                        <a
                          href="properties-details.html"
                          class="block dark-hover"
                        >
                          <img src="/assets/images/properties/s-4.jpg" alt />
                          <span class="img-button text-uppercase"
                            >More Details</span
                          >
                        </a>
                      </div>
                      <div
                        class="property-title fix pl-18 pr-18 pt-9 pb-9 bg-violet"
                      >
                        <h3>$87,345</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-sidebar-widget fix mb-60">
                <div class="sidebar-widget-title mb-32">
                  <h5>Our Agent</h5>
                </div>
                <div class="sidebar-agent">
                  <div class="row">
                    <div class="col-md-4 mb-22 col-sm-2 col-xs-4">
                      <div class="agent-hover">
                        <a href="agent-details.html" class="block border mb-11">
                          <img src="/assets/images/team/s-1.jpg" alt />
                        </a>
                        <h5>
                          <a href="agent-details.html" class="block"
                            >Ross Taylor</a
                          >
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-sidebar-widget fix">
                <div class="sidebar-widget-title mb-32">
                  <h5>Tags</h5>
                </div>
                <ul class="tags">
                  <li>
                    <a href="properties-details.html" class="mb-15 mr-7"
                      >Real Estate</a
                    >
                  </li>
                  <li>
                    <a href="index.html" class="mb-15 ml-7 mr-7">Home</a>
                  </li>
                  <li>
                    <a href="properties-details.html" class="mb-15 ml-7"
                      >Appartment</a
                    >
                  </li>
                  <li>
                    <a href="properties-details.html" class="mb-15 mr-7"
                      >Duplex Villa</a
                    >
                  </li>
                  <li>
                    <a href="properties-details.html" class="mb-15 ml-7"
                      >Buy Property</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End of Featured Property Area-->
      <!--Start of Footer Widget-area-->
    </div>
  </div>
</template>

<script>
import Service from "../../Service.js";

export default {
  name: "PropertiesDetail",
  data() {
    return {
      room: "",
      loading: false
    };
  },
  beforeCreate() {},
  //   method: {
  //     fetchRoom(_id) {
  //       this.room = Service.getDetailRoom(_id);
  //       console.log(this.room);
  //     }
  //   },
  async created() {
    this.loading = true;
    try {
      //console.log(await this.fetchRoom(this.$route.params.id));
      this.room = await Service.getDetailRoom(this.$route.params.id);
      this.loading = false;
      console.log(this.room);
    } catch (err) {
      this.loading = false;
      this.error = err.message;
    }
  }
};
</script>

<style></style>
