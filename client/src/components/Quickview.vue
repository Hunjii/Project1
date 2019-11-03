<template>
  <div id="quickview-login">
    <!-- Modal -->
    <div class="modal fade" id="propertyModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="sub-title">Add property</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i class="zmdi zmdi-close"></i>
              </span>
            </button>
          </div>
          <div class="single-post-area">
            <form action="#" method="post">
              <div class="row">
                <div class="col-md-6">
                  <h4 class="details-title text-small mb-12">Property Title</h4>
                  <input
                    type="text"
                    name="m-title"
                    placeholder="Enter your title here"
                    class="mb-28"
                  />
                </div>
                <div class="col-md-6">
                  <h4 class="details-title text-small mb-12">Price</h4>
                  <input type="text" name="m-price" placeholder="Price $" class="mb-32" />
                </div>
                <div class="col-md-12">
                  <h4 class="details-title text-small mb-12">Property Description</h4>
                  <textarea
                    name="m-post-comment"
                    cols="30"
                    rows="10"
                    placeholder="Write here"
                    class="mb-12 bg-light"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h4 class="details-title text-small mb-12">Location</h4>
                  <div class="select pb-12">
                    <select name="m-location">
                      <option>Location here</option>
                      <option>Dhaka</option>
                      <option>Shylet</option>
                      <option>Khulna</option>
                      <option>Barishal</option>
                      <option>Chittagong</option>
                    </select>
                  </div>
                  <h4 class="details-title text-small mb-12">No. of Bedroom</h4>
                  <div class="select">
                    <select name="m-bedrooms">
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
                <div class="col-md-6">
                  <h4 class="details-title text-small mb-12">No. of Bathroom</h4>
                  <div class="select pb-12">
                    <select name="m-bathrooms">
                      <option>No. of Bathroom</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                    </select>
                  </div>
                  <h4 class="details-title text-small mb-12">No. of Garage</h4>
                  <div class="select">
                    <select name="m-garage">
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
              </div>
              <div class="text-center">
                <button class="button text-white text-uppercase lemon mt-25">ADD Property</button>
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
  name: "Quickview"
};
</script>

<style>
</style>
