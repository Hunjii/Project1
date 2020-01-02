<template>
  <div>
    <!--Start of Banner Area-->
    <!-- <div class="banner-area bg-2 bg-overlay-2 ptb-165">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner-title text-center">
              <h1 class="text-uppercase text-white">Add Property</h1>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!--End of Banner Area-->
    <!--Start of Single Post Area-->
    <div class="single-post-area pt-115 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form
              @submit.prevent="CreateRoom"
              method="post"
              enctype="multipart/form-data"
            >
              <div class="col-10">
                <h4 class="sub-title mb-40">Step # 1</h4>
                <h4 class="details-title mb-34">Thêm thông tin</h4>
              </div>
              <div class="col-7">
                <h4 class="details-title text-small mb-18">Name Apartment</h4>
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
                <h4 class="details-title text-small mb-18">
                  Property Description
                </h4>
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
              <div class="col-md-10 pr-25 fix">
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
                    <h4 class="details-title text-small mb-16">
                      City
                    </h4>
                    <div class="select pb-33">
                      <select v-model="room.city" @change="onChange($event)">
                        <option disabled value="">Choose City</option>
                        <option
                          v-for="data in cityJson"
                          v-bind:key="data.code"
                          >{{ data.name_with_type }}</option
                        >
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6 fix">
                    <h4 class="details-title text-small mb-16">
                      District
                    </h4>
                    <div class="select pb-33">
                      <select
                        v-model="room.district"
                        @change="onChangeDistrict($event)"
                      >
                        <option disabled value="">Choose District</option>
                        <option
                          v-for="data in district"
                          :key="data.code"
                          :value="data.path"
                          >{{ data.name_with_type }}</option
                        >
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-10 pr-25 fix">
                <h4 class="details-title text-small mb-16">Area</h4>
                <div class="select pb-33">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter your area here"
                    v-model="room.area"
                  />
                </div>
                <h4 class="details-title text-small mb-16">
                  Location Deatail
                </h4>
                <div class="select pb-33">
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter your title here"
                    v-model="room.address"
                  />
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <h4 class="details-title text-small mb-16">
                      No. of Garage
                    </h4>
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
                  <div class="col-md-3">
                    <h4 class="details-title text-small mb-16">
                      No. of Kitchen
                    </h4>
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
                  <div class="col-md-3 fix">
                    <h4 class="details-title text-small mb-16">
                      No. of Bedroom
                    </h4>
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
                  <div class="col-md-3 fix">
                    <h4 class="details-title text-small mb-16">
                      No. of Bathroom
                    </h4>
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

              <div class="col-10 mt-95">
                <h4 class="sub-title mb-40">Step # 3</h4>
              </div>
              <div class="col-10">
                <h4 class="details-title mb-34">Image Gallery</h4>
                <div class="upload text-center">
                  <input
                    type="file"
                    name="fileupload"
                    ref="file_1"
                    multiple
                    @change="onFileSelected_1"
                  />
                  <span class="action text-white">
                    <i class="fa fa-folder-open mr-10"></i>Browse Images
                  </span>
                </div>
                <div class="upload text-center">
                  <input
                    type="file"
                    name="fileupload"
                    ref="file_2"
                    multiple
                    @change="onFileSelected_2"
                  />
                  <span class="action text-white">
                    <i class="fa fa-folder-open mr-10"></i>Browse Images
                  </span>
                </div>
                <div class="upload text-center">
                  <input
                    type="file"
                    name="fileupload"
                    ref="file_3"
                    multiple
                    @change="onFileSelected_3"
                  />
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
                  :v-on:click="CreateRoom"
                  class="button text-white text-uppercase lemon pull_right mt-65"
                >
                  ADD Property
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
import Service from '../../Service.js';
import cityJson from '../../../Data/City.json';
import Json01 from '../../../Data/District/01.json';
import Json02 from '../../../Data/District/48.json';
import Json03 from '../../../Data/District/79.json';

export default {
  name: 'AddProperties',
  data() {
    return {
      room: {
        name: '',
        category: '',
        price: '',
        address: '',
        district: '',
        city: '',
        discription: '',
        area: '',
        bathroom: '',
        bedroom: '',
        kitchen: '',
        garage: '',
        active: ''
      },
      roomImage_1: {},
      roomImage_2: {},
      roomImage_3: {},
      cityJson: cityJson,
      district: ''
    };
  },
  methods: {
    onFileSelected_1() {
      this.roomImage_1 = this.$refs.file_1.files[0];
      console.log(this.roomImage_1);
    },
    onFileSelected_2() {
      this.roomImage_2 = this.$refs.file_2.files[0];
      console.log(this.roomImage_2);
    },
    onFileSelected_3() {
      this.roomImage_3 = this.$refs.file_3.files[0];
      console.log(this.roomImage_3);
    },

    async CreateRoom() {
      const formData = new FormData();
      formData.append('roomImage', this.roomImage_1);
      formData.append('roomImage', this.roomImage_2);
      formData.append('roomImage', this.roomImage_3);

      formData.append('name', this.room.name);
      formData.append('price', this.room.price);
      formData.append('address', `${this.room.address}, ${this.room.district}`);
      formData.append('category', this.room.category);
      formData.append('discription', this.room.discription);
      formData.append('area', this.room.area);
      formData.append('bathroom', this.room.bathroom);
      formData.append('bedroom', this.room.bedroom);
      formData.append('active', this.room.active);

      formData.append('hostId', sessionStorage.getItem('id'));

      try {
        const auth = {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('token')
          }
        };

        await Service.createRoom(formData, auth);
        await this.$router.push('/forhost');
      } catch (error) {
        console.log(error);
      }
    },

    onChange(event) {
      this.room.district = '';
      if (event.target.value == 'Thành phố Hà Nội') this.district = Json01;
      if (event.target.value == 'Thành phố Đà Nẵng') this.district = Json02;
      if (event.target.value == 'Thành phố Hồ Chí Minh') this.district = Json03;

      console.log(event.target.value);
    },

    onChangeDistrict(event) {
      this.room.district = event.target.value;
    }
  }
};
</script>

<style></style>
