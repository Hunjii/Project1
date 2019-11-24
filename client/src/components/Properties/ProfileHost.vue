<template>
  <div>
    <div class="property-package">
      <div class="row">
        <div class="col-md-12 pl-12 pr-12 text-center">
          <div class="single-package">
            <div class="package-title bg-violet pt-23 pb-23">
              <h4 class="text-white text-uppercase">Profile</h4>
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
      </div>
    </div>
    <div class="blog-area pt-70 pb-115 bg-light blog-page">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-55 col-sm-6 fix">
            <div class="single-blog hover-effect-one fix">
              <div class="blog-image box-hover block">
                <a href="blog-details.html" class="block white-hover">
                  <img src="assets/images/blog/1.jpg" alt="" />
                  <span class="blog-text block bg-lemon pt-4"
                    >10 <span class="block pt-2 ">OCT</span></span
                  >
                </a>
              </div>
              <div class="single-blog-text">
                <div class="blog-post-info bg-violet pl-20 pr-20 pt-17 pb-17">
                  <span><i class="fa fa-user mr-12"></i>Smith</span>
                  <span class="pl-35"><i class="fa fa-heart mr-12"></i>15</span>
                  <span class="pl-40"
                    ><i class="fa fa-comments mr-12"></i>10</span
                  >
                </div>
                <h5 class="pt-22 mb-17">
                  <a href="blog-details.html">Latest Architectural Design</a>
                </h5>
                <p class="mb-20">
                  Lorem must explain to you how all this mistaolt dete
                  denouncing pleasure and praising pain wasnad I will give you a
                  complete pain was praising
                </p>
                <a href="blog-details.html" class="button">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-55 col-sm-6 fix">
            <div class="single-blog hover-effect-one fix">
              <div class="blog-image box-hover block">
                <a href="blog-details.html" class="block white-hover">
                  <img src="assets/images/blog/2.jpg" alt="" />
                  <span class="blog-text block bg-lemon pt-4"
                    >05 <span class="block pt-2 ">NOV</span></span
                  >
                </a>
              </div>
              <div class="single-blog-text">
                <div class="blog-post-info bg-violet pl-20 pr-20 pt-17 pb-17">
                  <span><i class="fa fa-user mr-12"></i>Alfred</span>
                  <span class="pl-35"><i class="fa fa-heart mr-12"></i>18</span>
                  <span class="pl-40"
                    ><i class="fa fa-comments mr-12"></i>15</span
                  >
                </div>
                <h5 class="pt-22 mb-17">
                  <a href="blog-details.html">Modern Architectural Design</a>
                </h5>
                <p class="mb-20">
                  Lorem must explain to you how all this mistaolt dete
                  denouncing pleasure and praising pain wasnad I will give you a
                  complete pain was praising
                </p>
                <a href="blog-details.html" class="button">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-55 col-sm-6 fix">
            <div class="single-blog hover-effect-one fix">
              <div class="blog-image box-hover block">
                <a href="blog-details.html" class="block white-hover">
                  <img src="assets/images/blog/3.jpg" alt="" />
                  <span class="blog-text block bg-lemon pt-4"
                    >28 <span class="block pt-2 ">AUG</span></span
                  >
                </a>
              </div>
              <div class="single-blog-text">
                <div class="blog-post-info bg-violet pl-20 pr-20 pt-17 pb-17">
                  <span><i class="fa fa-user mr-12"></i>Zenefer</span>
                  <span class="pl-35"><i class="fa fa-heart mr-12"></i>10</span>
                  <span class="pl-40"
                    ><i class="fa fa-comments mr-12"></i>08</span
                  >
                </div>
                <h5 class="pt-22 mb-17">
                  <a href="blog-details.html">Construction Develpment</a>
                </h5>
                <p class="mb-20">
                  Lorem must explain to you how all this mistaolt dete
                  denouncing pleasure and praising pain wasnad I will give you a
                  complete pain was praising
                </p>
                <a href="blog-details.html" class="button">Read More</a>
              </div>
            </div>
          </div>
          <div class="col-md-12 fix">
            <div class="pagination-content text-center block">
              <ul class="pagination fix mt-55 mb-0">
                <li>
                  <a href="#"><i class="zmdi zmdi-long-arrow-left"></i></a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="current">
                  <a href="#"><i class="zmdi zmdi-long-arrow-right"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHost"
};
</script>

<style></style>
