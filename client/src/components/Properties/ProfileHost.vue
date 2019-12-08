<template>
  <div>
    <div class="property-package">
      <div class="row">
        <div class="col-md-6 pl-12 pr-12 text-center">
          <div class="single-package">
            <div class="package-title bg-violet pt-23 pb-23">
              <h4 class="text-white text-uppercase">My Room</h4>
            </div>
            <div class="package-list pt-37 pb-25">
              <button type="button" class="button text-white">
                <router-link :to="{ name: 'AddProperties' }"
                  >Add realstate</router-link
                >
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6 pl-12 pr-12 text-center">
          <div class="single-package">
            <div class="package-title bg-violet pt-23 pb-23">
              <h4 class="text-white text-uppercase">Profile</h4>
            </div>
            <div class="package-list pt-37 pb-25">
              <button type="button" class="button text-white">
                <router-link
                  :to="{ name: 'ProfileInfo', params: { id: this.hostId } }"
                  >Edit Profile</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-area pt-70 pb-115 bg-light blog-page">
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 mb-55 col-sm-6 fix"
            v-for="(myroom, index) in filterByHost(myrooms)"
            :key="index"
          >
            <div class="single-blog hover-effect-one fix">
              <div class="blog-image box-hover block">
                <a href="blog-details.html" class="block white-hover">
                  <img :src="myroom.roomImage[0].pathImg" alt="" />
                  <span
                    class="blog-text block bg-lemon pt-4"
                    v-if="myroom.active"
                    >Published</span
                  >
                  <span
                    class="blog-text block bg-lemon pt-4"
                    v-if="!myroom.active"
                    >Unpublish</span
                  >
                </a>
              </div>
              <div class="single-blog-text">
                <div class="blog-post-info bg-violet pl-20 pr-20 pt-17 pb-17">
                  <span
                    ><i class="fa fa-building mr-12"></i
                    >{{ myroom.category }}</span
                  >
                  <span class="pl-35"
                    ><i class="fa fa-500px mr-12"></i>{{ myroom.area }}</span
                  >
                  <span class="pl-40"
                    ><i class="fa fa-dollar mr-12"></i
                    >{{ myroom.price }}/m</span
                  >
                </div>
                <h5 class="pt-22 mb-17">
                  <a href="blog-details.html">{{ myroom.address }}</a>
                </h5>
                <router-link
                  :to="{
                    name: 'EditRealState',
                    params: { realstate_id: myroom._id }
                  }"
                  class="button"
                  >Setting</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service.js";

export default {
  name: "ProfileHost",
  data() {
    return {
      myrooms: [],
      hostId: localStorage.getItem("id")
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    filterByHost(list) {
      return list.filter(room => {
        const id = localStorage.getItem("id");
        if (room.host != undefined) {
          return room.host._id == id;
        }
      });
    },
    async getProfile() {
      try {
        this.myrooms = await Service.getRooms();
        console.log(this.myrooms);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style></style>
