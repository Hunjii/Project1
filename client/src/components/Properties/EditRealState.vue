<template>
  <div>
    <!--Start of Banner Area-->
    <div class="banner-area bg-2 bg-overlay-2 ptb-165">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner-title text-center">
              <h1 class="text-uppercase text-white">Add Property</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End of Banner Area-->
    <!--Start of Single Post Area-->
    <div class="single-post-area pt-115 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form
              @submit.prevent="updateApartment"
              method="post"
              enctype="multipart/form-data"
            >
              <div class="col-10">
                <h4 class="sub-title mb-40">Step # 1</h4>
                <h4 class="details-title mb-34">Basic Information</h4>
              </div>
              <div class="col-7">
                <h4 class="details-title text-small mb-18">Property Title</h4>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter your title here"
                  class="mb-28"
                  v-model="room.Room.name"
                />
              </div>
              <div class="col-3 pl-25">
                <h4 class="details-title text-small mb-18">Price</h4>
                <input
                  type="text"
                  name="price"
                  placeholder="Price $"
                  class="mb-32"
                  v-model="room.Room.price"
                />
              </div>
              <div class="col-10">
                <h4 class="details-title text-small mb-18">
                  Property Description
                </h4>
                <textarea
                  name="post-comment"
                  cols="30"
                  rows="10"
                  placeholder="Write here"
                  class="mb-95 bg-light"
                  v-model="room.Room.discription"
                ></textarea>
              </div>
              <div class="col-10">
                <h4 class="sub-title mb-40">Step # 2</h4>
                <h4 class="details-title mb-35">Details Information</h4>
              </div>
              <div class="row">
                <div class="col-md-6 pr-25 fix">
                  <h4 class="details-title text-small mb-16">Location</h4>
                  <div class="select pb-33">
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter your title here"
                      v-model="room.Room.address"
                    />
                  </div>
                  <h4 class="details-title text-small mb-16">Property Type</h4>
                  <div class="select pb-33">
                    <select name="type" v-model="room.Room.category">
                      <option>Property Type</option>
                      <option>Appartment</option>
                      <option>Duplex</option>
                      <option>Building</option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-md-6 fix">
                      <h4 class="details-title text-small mb-16">
                        No. of Bedroom
                      </h4>
                      <div class="select">
                        <select name="bedrooms" v-model="room.Room.bedroom">
                          <option>No. of Bedroom</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6 fix">
                      <h4 class="details-title text-small mb-16">
                        No. of Bathroom
                      </h4>
                      <div class="select">
                        <select name="bathrooms" v-model="room.Room.bathroom">
                          <option>No. of Bathroom</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pr-25 fix">
                  <h4 class="details-title text-small mb-16">Area</h4>
                  <div class="select pb-33">
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter your area here"
                      v-model="room.Room.area"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6 fix">
                      <h4 class="details-title text-small mb-16">
                        No. of Garage
                      </h4>
                      <div class="select">
                        <select name="garage" v-model="room.Room.garage">
                          <option>No. of Garage</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6 fix">
                      <h4 class="details-title text-small mb-16">
                        No. of Kitchen
                      </h4>
                      <div class="select">
                        <select name="garage" v-model="room.Room.kitchen">
                          <option>No. of Kitchen</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-10 mt-95">
                <h4 class="sub-title mb-40">Step # 3</h4>
              </div>
              <div class="col-10">
                <h4 class="details-title mb-34">Image Gallery</h4>
                <div class="upload text-center">
                  <input type="file" name="fileupload" ref="file" />
                  <span class="action text-white">
                    <i class="fa fa-folder-open mr-10"></i>Browse Images
                  </span>
                </div>
                <!-- <div class="upload text-center">
                  <input
                    type="file"
                    name="fileupload"
                    ref="file"
                    @change="onFileSelected"
                  />
                  <span class="action text-white">
                    <i class="fa fa-folder-open mr-10"></i>Browse Images
                  </span>
                </div>
                <div class="upload text-center">
                  <input
                    type="file"
                    name="fileupload"
                    ref="file"
                    @change="onFileSelected"
                  />
                  <span class="action text-white">
                    <i class="fa fa-folder-open mr-10"></i>Browse Images
                  </span>
                </div> -->
              </div>
              <div class="col-10">
                <button
                  class="button text-white text-uppercase lemon pull_right mt-65"
                >
                  Edit Property
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--End of Single Post Area-->
  </div>
</template>

<script>
import Service from "../../Service.js";

export default {
  name: "EditRealState",
  data() {
    return {
      room: {
        Room: {
          name: "",
          category: "",
          price: "",
          address: "",
          discription: "",
          area: "",
          bathroom: "",
          bedroom: "",
          kitchen: "",
          garage: "",
          active: ""
        }
      }
    };
  },
  methods: {
    updateApartment() {
      try {
        Service.UpdateApartment(this.$route.params.realstate_id, this.room);
        this.$router.push("/profile");
      } catch (error) {
        this.error = error.message;
      }
    }
  },
  async created() {
    try {
      this.room = await Service.getDetailRoom(this.$route.params.realstate_id);
      console.log(this.room);
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style></style>
