<template>
  <div>
    <!--Start of Banner Area-->
    <!-- <div class="banner-area bg-2 bg-overlay-2 ptb-165">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner-title text-center">
              <h1 class="text-uppercase text-white">Properties</h1>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!--End of Banner Area-->
    <Search />
    <!--Start of Featured Property Area-->
    <div class="property-area ptb-120 property-page">
      <div class="container">
        <div class="row">
          <p v-if="this.rooms.length == 0">Nothing hear</p>
          <div
            class="col-lg-4 col-md-6 mb-40 col-sm-6"
            v-for="(room, index) in rooms"
            v-bind:item="room"
            v-bind:index="index"
            v-bind:key="room._id"
          >
            <div>
              <div class="single-property hover-effect-two">
                <div
                  class="property-title fix pl-18 pr-18 pt-22 pb-18 bg-violet"
                >
                  <div class="title-left pull_left">
                    <h4 class="text-white mb-12">
                      <a href="properties-details.html">{{ room.name }}</a>
                    </h4>
                    <span>
                      <span class="mr-10">
                        <img src="assets/images/icons/map.png" alt />
                      </span>
                      {{ room.address }}
                    </span>
                  </div>
                  <div class="fix pull_right">
                    <h3>${{ room.price }}</h3>
                  </div>
                </div>
                <div class="property-image">
                  <router-link
                    :to="{ name: 'PropertiesDetail', params: { id: room._id } }"
                    class="block dark-hover"
                  >
                    <img :src="room.roomImage[0].pathImg" alt />
                    <span class="img-button text-uppercase">More Details</span>
                    <span class="p-tag bg-lemon">{{ room.category }}</span>
                  </router-link>
                  <div class="hover-container pl-15 pr-15 pt-16 pb-15">
                    <div class="hover-item">
                      <img
                        class="mr-10"
                        src="assets/images/icons/floor.png"
                        alt
                      />
                      <span>{{ room.area }} sqft</span>
                    </div>
                    <div class="hover-item">
                      <img
                        class="mr-10"
                        src="assets/images/icons/bed.png"
                        alt
                      />
                      <span>{{ room.bedroom }}</span>
                    </div>
                    <div class="hover-item">
                      <img
                        class="mr-10"
                        src="assets/images/icons/shower.png"
                        alt
                      />
                      <span>{{ room.bathroom }}</span>
                    </div>
                    <div class="hover-item">
                      <img
                        class="mr-10"
                        src="assets/images/icons/garage.png"
                        alt
                      />
                      <span>{{ room.garage }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="pagination-content text-center block">
              <ul class="pagination fix mt-40 mb-0">
                <li>
                  <a href="#">
                    <i class="zmdi zmdi-long-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li class="current">
                  <a href="#">
                    <i class="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End of Featured Property Area-->
    <router-view />
  </div>
</template>

<script>
import Search from "../Home/Search.vue";
import Service from "../../Service.js";

export default {
  name: "Properties",
  components: {
    Search
  },
  data() {
    return {
      rooms: [],
      error: "",
      text: "",
      search: {
        city: "",
        district: ""
      }
    };
  },
  methods: {
    filterActive(list) {
      return list.filter(room => {
        return room.active;
      });
    }
  },
  async mounted() {
    await this.$root.$on("searching", search => {
      if (search.areamin == "") search.areamin = "0";
      if (search.areamax == "") search.areamax = "900";

      Service.getSerchRooms(
        search.city.slice(10),
        search.district.slice(5),
        search.areamin,
        search.areamax
      ).then(res => {
        this.rooms = res;
      });
      console.log(this.rooms);
    });
  },
  async created() {
    try {
      this.rooms = await Service.getRooms();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style></style>
