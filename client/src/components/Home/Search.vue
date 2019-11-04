<template>
<div>
  <div class="find-area pt-72 pb-72 bg-light">
    <div class="container">
      <!-- <div class="row">
        <div class="col-md-12">
          <div class="section-title text-center mb-55">
            <h2 class="uppercase">FIND YOUR DREAM HOME</h2>
          </div>
        </div>
      </div>-->
      <div class="row">
        <div class="col-md-12">
          <form action="#" class="col-10">
            <div class="form-box mb-40 pl-15 pr-15">
              <div class="select">
                <select name="location">
                  <option>Location</option>
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
                <select name="sub-location">
                  <option>Sub - Location</option>
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
                <select name="min-sqft">
                  <option>Min area (sqft)</option>
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
                <select name="max-sqft">
                  <option>Max area (sqft)</option>
                  <option>Dhaka</option>
                  <option>Shylet</option>
                  <option>Khulna</option>
                  <option>Barishal</option>
                  <option>Chittagong</option>
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
                    <input type="text" class="amount" name="price" placeholder="Add Your Price" />
                  </div>
                </div>
                <div class="slider-range"></div>
              </div>
              <button
                name="search_price"
                type="button"
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
export default {
  name: "Search"
};
</script>

<style>
</style>
