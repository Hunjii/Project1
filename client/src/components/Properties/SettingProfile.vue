<template>
  <div>
    <!-- <div class="banner-area bg-2 bg-overlay-2 ptb-165">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner-title text-center">
              <h1 class="text-uppercase text-white">Thông tin cá nhân</h1>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="create-agency-area pt-115 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="agency-container">
              <h4 class="details-title text-center mb-43">
                Thông tin các nhân
              </h4>
              <form @submit.prevent="updateHost">
                <div class="comment-form">
                  <h4 class="details-title text-medium mb-23 pt-24">
                    Email
                  </h4>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    class="mb-28"
                    v-model="host.Host.email"
                  />
                  <h4 class="details-title text-medium mb-23 pt-24">
                    Họ và tên
                  </h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Họ và tên"
                    class="mb-28"
                    v-model="host.Host.name"
                  />
                  <h4 class="details-title text-medium mb-23 pt-24">
                    Nơi ở
                  </h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nơi ở"
                    class="mb-28"
                    v-model="host.Host.address"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="details-title text-medium mb-23 pt-24">
                      Giới tính
                    </h4>
                    <input
                      type="text"
                      name="add_1"
                      placeholder="Giới tính"
                      class="mb-28"
                      v-model="host.Host.sex"
                    />
                    <h4 class="details-title text-medium mb-23 pt-24">
                      Ngày sinh
                    </h4>
                    <input
                      type="text"
                      name="add_2"
                      placeholder="Ngày sinh"
                      class="mb-28"
                      v-model="host.Host.birthday"
                    />
                  </div>
                  <div class="col-md-6">
                    <h4 class="details-title text-medium mb-23 pt-24">
                      Số điện thoại
                    </h4>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Số điện thoại"
                      class="mb-28"
                      v-model="host.Host.phone"
                    />
                  </div>
                </div>
                <div class="col-10">
                  <button
                    class="button text-white text-uppercase lemon pull_right mt-65"
                  >
                    Update
                  </button>
                </div>
              </form>
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
  name: "SettingProfile",
  data() {
    return {
      host: {
        Host: {
          email: "",
          name: "",
          birthday: "",
          sex: "",
          phone: "",
          address: "",
          password: ""
        }
      }
    };
  },
  methods: {
    updateHost() {
      try {
        const id = sessionStorage.getItem("id");
        Service.UpdateHost(id, this.host);
        this.$router.push("/profile");
        sessionStorage.setItem("email", this.host.Host.email);
      } catch (error) {
        this.error = error.message;
      }
    }
  },
  async created() {
    try {
      const id = sessionStorage.getItem("id");
      await Service.getDetailHost(id).then(host => {
        this.host = host;
        var moment = require("moment");
        this.host.Host.birthday = moment(host.Host.birthday).format(
          "DD-MM-YYYY"
        );
      });
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style></style>
