<template>
  <div>
    <div class="banner-area bg-2 bg-overlay-2 ptb-165">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="banner-title text-center">
              <h1 class="text-uppercase text-white">Create Agency</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="create-agency-area pt-115 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div class="agency-container">
              <h4 class="details-title text-center mb-43">
                Create Agency Profile
              </h4>
              <form @submit.prevent="updateHost">
                <div class="comment-form">
                  <h4 class="details-title text-medium mb-23 pt-24">
                    Email
                  </h4>
                  <input
                    type="email"
                    name="email"
                    placeholder="Agency Title"
                    class="mb-28"
                    v-model="host.Host.email"
                  />
                  <h4 class="details-title text-medium mb-23 pt-24">
                    Name
                  </h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Agency Title"
                    class="mb-28"
                    v-model="host.Host.name"
                  />
                  <h4 class="details-title text-medium mb-23 pt-24">
                    Address
                  </h4>
                  <input
                    type="text"
                    name="name"
                    placeholder="Agency Title"
                    class="mb-28"
                    v-model="host.Host.address"
                  />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="details-title text-medium mb-23 pt-24">
                      Gender
                    </h4>
                    <input
                      type="text"
                      name="add_1"
                      placeholder="Address line 1"
                      class="mb-28"
                      v-model="host.Host.sex"
                    />
                    <h4 class="details-title text-medium mb-23 pt-24">
                      Date Of Birth
                    </h4>
                    <input
                      type="text"
                      name="add_2"
                      placeholder="Address line 2"
                      class="mb-28"
                      v-model="host.Host.birthday"
                    />
                  </div>
                  <div class="col-md-6">
                    <h4 class="details-title text-medium mb-23 pt-24">
                      Phone Contact
                    </h4>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
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
        Service.UpdateHost(this.$route.params.id, this.host);
        this.$router.push("/profile");
        localStorage.setItem("email", this.host.Host.email);
      } catch (error) {
        this.error = error.message;
      }
    }
  },
  async created() {
    try {
      await Service.getDetailHost(this.$route.params.id).then(host => {
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
