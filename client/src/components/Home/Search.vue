<template>
  <div>
    <div class="find-area pt-72 pb-72 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form @submit.prevent="searching" class="col-10">
              <div class="form-box mb-40 pl-15 pr-15">
                <div class="select">
                  <select
                    name="location"
                    v-model="search.city"
                    @change="onChange($event)"
                  >
                    <option disabled value="">Please select city</option>
                    <option v-for="data in cityJsons" v-bind:key="data.code">{{
                      data.name_with_type
                    }}</option>
                  </select>
                </div>
              </div>
              <div class="form-box mb-40 pl-15 pr-15">
                <div class="select">
                  <select
                    name="sub-location"
                    v-model="search.district"
                    @change="onChangeDistrict($event)"
                  >
                    <option disabled value="">Please select district</option>
                    <option v-for="data in district" v-bind:key="data.code">{{
                      data.name_with_type
                    }}</option>
                  </select>
                </div>
              </div>
              <div class="form-box mb-40 pl-15 pr-15">
                <div class="select">
                  <select name="min-sqft" v-model="search.areamin">
                    <option disabled value="">Please select min area</option>
                    <option>0</option>
                    <option>100</option>
                    <option>200</option>
                    <option>300</option>
                    <option>400</option>
                  </select>
                </div>
              </div>
              <div class="form-box mb-40 pl-15 pr-15">
                <div class="select">
                  <select name="max-sqft" v-model="search.areamax">
                    <option disabled value="">Please select max area</option>
                    <option>500</option>
                    <option>600</option>
                    <option>700</option>
                    <option>800</option>
                    <option>900</option>
                  </select>
                </div>
              </div>
              <div class="form-box pl-15 pr-15">
                <div class="select">
                  <select name="bedrooms">
                    <option>No. of Beadrooms</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
              </div>
              <div class="form-box pl-15 pr-15">
                <div class="select">
                  <select name="bedrooms">
                    <option>No. of Bathrooms</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div class="form-box pl-15 pr-15 large">
                <div class="price_filter">
                  <div class="price_slider_amount">
                    <div class="slider-values">
                      <span>Price Range</span>
                      <input
                        type="text"
                        class="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                  </div>
                  <div class="slider-range"></div>
                </div>
                <button
                  name="search_price"
                  class="button search_price lemon pull_right ml-30 mr-6"
                >
                  <span>
                    <span>SEARCH PROPERTY</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityJson from "../../../Data/City.json";
import Json01 from "../../../Data/District/01.json";
import Json02 from "../../../Data/District/48.json";
import Json03 from "../../../Data/District/79.json";

export default {
  name: "Search",
  data() {
    return {
      search: {
        city: "",
        district: "",
        areamin: "",
        areamax: ""
      },
      cityJsons: cityJson,
      district: ""
    };
  },
  methods: {
    async searching() {
      const route = {
        name: "Properties"
      };
      if (this.search !== "") {
        route.query = {
          city: this.search.city.slice(10),
          district: this.search.district.slice(5),
          areamin: this.search.areamin,
          areamax: this.search.areamax
        };
      }
      await this.$router.push(route);
      await this.$root.$emit("searching", this.search);
    },

    onChange(event) {
      console.log(event.target.value);
      if (event.target.value == "Thành phố Hà Nội") this.district = Json01;
      if (event.target.value == "Thành phố Đà Nẵng") this.district = Json02;
      if (event.target.value == "Thành phố Hồ Chí Minh") this.district = Json03;
    },

    onChangeDistrict(event) {
      this.searching.district = event.target.value;
    }
  }
};
</script>

<style></style>
