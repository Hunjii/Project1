<template>
  <div>
    <!--Start of Google Map-->
    <div class="google-map-area pt-120">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!--Start of Map Section-->
            <div id="contacts" class="map-area">
              <div
                id="googleMap"
                style="width:100%;height:485px;filter: grayscale(100%);-webkit-filter: grayscale(100%);"
              ></div>
              <!--End of Map Section-->
            </div>
            <div class="contact-information">
              <div class="single-contact-info">
                <div class="pull_left contents ml-8">
                  <img src="images/icons/c-map.png" alt />
                  <div class="info-text pl-40">
                    <span class="block mb-7">256, 1st AVE, Manchester</span>
                    <span class="block mb-7">125 , Noth England</span>
                  </div>
                </div>
              </div>
              <div class="single-contact-info">
                <div class="contents">
                  <img src="images/icons/c-phone.png" alt />
                  <div class="info-text pl-40">
                    <span class="block mb-7">Telephone : +012 345 678 102</span>
                    <span class="block mb-7">Telephone : +013 445 678 155</span>
                  </div>
                </div>
              </div>
              <div class="single-contact-info">
                <div class="pull_right contents mr-8">
                  <img src="images/icons/c-globe.png" alt />
                  <div class="info-text pl-40">
                    <span class="block mb-7">Email : info@example.com</span>
                    <span class="block mb-7">Web : www.example.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End of Google Map-->
    <!--Start Contact Form Area-->
    <div class="contact-form-area fix ptb-120">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <h4 class="details-title text-center mb-43">Leave a Message</h4>
            <form id="contact-form" action="mail.php" method="post">
              <input type="text" name="name" class="mb-22" placeholder="Your name" />
              <input type="text" name="email" class="mb-22" placeholder="Email here" />
              <textarea name="message" cols="30" rows="10" placeholder="Write here"></textarea>
              <div class="col-10 fix text-center">
                <button type="submit" class="button submit-btn lemon mt-35">SUBMIT</button>
              </div>
              <p class="form-messege"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--End of Contact Form Area-->
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style>
</style>
