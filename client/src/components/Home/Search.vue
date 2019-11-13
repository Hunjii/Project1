<template>
  <div>
    <div class="find-area pt-72 pb-72 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <form @submit.prevent="searching" class="col-10">
              <div class="form-box mb-40 pl-15 pr-15">
                <div class="select">
                  <select name="location" v-model="search.city">
                    <option>HCM</option>
                    <option>Dhaka</option>
                    <option>Shylet</option>
                    <option>Khulna</option>
                    <option>Barishal</option>
                    <option>Chittagong</option>
                  </select>
                </div>
              </div>
              <div class="form-box mb-40 pl-15 pr-15">
                <div class="select">
                  <select name="sub-location" v-model="search.district">
                    <option>Sub - Location</option>
                    <option>m</option>
                    <option>Shylet</option>
                    <option>Khulna</option>
                    <option>Barishal</option>
                    <option>Chittagong</option>
                  </select>
                </div>
              </div>
              <div class="form-box mb-40 pl-15 pr-15">
                <div class="select">
                  <select name="min-sqft" v-model="search.areamin">
                    <option>Min area (sqft)</option>
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
                    <option>Max area (sqft)</option>
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
//import Service from "../../Service.js";

export default {
  name: "Search",
  data() {
    return {
      rooms: [],
      search: {
        city: "",
        district: "",
        areamin: "",
        areamax: ""
      }
    };
  },
  methods: {
    async searching() {
      const route = {
        name: "Properties"
      };
      if (this.search !== "") {
        route.query = {
          city: this.search.city,
          district: this.search.district,
          areamin: this.search.areamin,
          areamax: this.search.areamax
        };
      }
      this.$router.push(route);

      // this.$router.push({ query: { searchs: this.search.city } });
      // console.log(this.$router.query.searchs);
    }
  }
};
</script>

<style></style>
