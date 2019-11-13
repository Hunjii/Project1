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
            <form @submit.prevent="CreateRoom" method="post" enctype="multipart/form-data">
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
                  v-model="room.name"
                />
              </div>
              <div class="col-3 pl-25">
                <h4 class="details-title text-small mb-18">Price</h4>
                <input
                  type="text"
                  name="price"
                  placeholder="Price $"
                  class="mb-32"
                  v-model="room.price"
                />
              </div>
              <div class="col-10">
                <h4 class="details-title text-small mb-18">Property Description</h4>
                <textarea
                  name="post-comment"
                  cols="30"
                  rows="10"
                  placeholder="Write here"
                  class="mb-95 bg-light"
                  v-model="room.discription"
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
                      v-model="room.address"
                    />
                  </div>
                  <h4 class="details-title text-small mb-16">Property Type</h4>
                  <div class="select pb-33">
                    <select name="type" v-model="room.category">
                      <option>Property Type</option>
                      <option>Appartment</option>
                      <option>Duplex</option>
                      <option>Building</option>
                    </select>
                  </div>
                  <div class="row">
                    <div class="col-md-6 fix">
                      <h4 class="details-title text-small mb-16">No. of Bedroom</h4>
                      <div class="select">
                        <select name="bedrooms" v-model="room.bedroom">
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
                      <h4 class="details-title text-small mb-16">No. of Bathroom</h4>
                      <div class="select">
                        <select name="bathrooms" v-model="room.bathroom">
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
                  <h4 class="details-title text-small mb-16">Active</h4>
                  <div class="select pb-33">
                    <select name="status" v-model="room.active">
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                  <h4 class="details-title text-small mb-16">Area</h4>
                  <div class="select pb-33">
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter your area here"
                      v-model="room.area"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6 fix">
                      <h4 class="details-title text-small mb-16">No. of Garage</h4>
                      <div class="select">
                        <select name="garage" v-model="room.garage">
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
                      <h4 class="details-title text-small mb-16">No. of Kitchen</h4>
                      <div class="select">
                        <select name="garage" v-model="room.kitchen">
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
                  <input type="file" name="fileupload" ref="file" @change="onFileSelected" />
                  <span class="action text-white">
                    <i class="fa fa-folder-open mr-10"></i>Browse Images
                  </span>
                </div>
              </div>
              <div class="col-10">
                <h4 class="details-title mb-34 mt-60">Video Presentation</h4>
                <div class="upload text-center">
                  <input type="file" name="fileuploads" />
                  <span class="action text-white">Add Video</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 fix">
                  <h4 class="details-title mb-38 mt-60">Property Features</h4>
                  <div class="fix pb-38 property-feature">
                    <div class="desc-info mb-38">
                      <i class="fa fa-check-square-o mr-9"></i>
                      <span>Air Conditioning</span>
                    </div>
                    <div class="desc-info mb-38">
                      <i class="fa fa-check-square-o mr-9"></i>
                      <span>Bedding</span>
                    </div>
                    <div class="desc-info mb-38">
                      <i class="fa fa-check-square-o mr-9"></i>
                      <span>Balcony</span>
                    </div>
                    <div class="desc-info mb-38">
                      <i class="fa fa-check-square-o mr-9"></i>
                      <span>Cable TV</span>
                    </div>
                    <div class="desc-info mb-38">
                      <i class="fa fa-check-square-o mr-9"></i>
                      <span>Internet</span>
                    </div>
                    <div class="desc-info mb-38">
                      <i class="fa fa-check-square-o mr-9"></i>
                      <span>Parking</span>
                    </div>
                    <div class="desc-info mb-38">
                      <i class="fa fa-check-square-o mr-9"></i>
                      <span>Lift</span>
                    </div>
                    <div class="desc-info mb-38">
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
                <div class="col-md-6 fix">
                  <h4 class="details-title mb-38 mt-64">Place on Map</h4>
                  <!--Start of Google Map-->
                  <div class="google-map-area">
                    <!--  Map Section -->
                    <div id="contacts" class="map-area">
                      <div id="googleMap" style="width:100%;height:305px;"></div>
                    </div>
                  </div>
                  <!--End of Google Map-->
                </div>
              </div>
              <div class="col-10">
                <button
                  :v-on:click="CreateRoom"
                  class="button text-white text-uppercase lemon pull_right mt-65"
                >ADD Property</button>
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
  name: "AddProperties",
  data() {
    return {
      room: {
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
      },
      roomImage: []
    };
  },
  methods: {
    onFileSelected() {
      this.roomImage = this.$refs.file.files[0];
      console.log(this.roomImage);
    },

    async CreateRoom() {
      const formData = new FormData();
      formData.append("roomImage", this.roomImage);
      formData.append("name", this.room.name);
      formData.append("price", this.room.price);
      formData.append("address", this.room.address);
      formData.append("category", this.room.category);
      formData.append("discription", this.room.discription);
      formData.append("area", this.room.area);
      formData.append("bathroom", this.room.bathroom);
      formData.append("bedroom", this.room.bedroom);
      formData.append("active", this.room.active);

      try {
        const auth = {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        };

        await Service.createRoom(formData, auth);
        await this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
