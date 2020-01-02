<template>
  <div class="app-main__outer">
    <div class="app-main__inner">
      <div class="app-page-title">
        <div class="page-title-wrapper">
          <div class="page-title-heading">
            <div class="page-title-icon">
              <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"> </i>
            </div>
            <div>
              Regular Tables
              <div class="page-title-subheading">
                Tables are the backbone of almost all web applications.
              </div>
            </div>
          </div>
          <div class="page-title-actions">
            <button type="button" class="btn-shadow mr-3 btn btn-dark">
              <i class="fa fa-star"></i>
            </button>
            <div class="d-inline-block">
              <button
                v-on:click="insertActive"
                type="button"
                class="btn-shadow dropdown-toggle btn btn-info"
              >
                <span class="btn-icon-wrapper pr-2 opacity-7">
                  <i class="fa fa-business-time fa-w-20"></i></span
                >Buttons
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-content">
        <div
          class="tab-pane tabs-animation fade show active"
          id="tab-content-0"
          role="tabpanel"
        ></div>
      </div>
      <div class="main-card mb-3 card" v-if="this.iActive">
        <div class="card-body">
          <h5 class="card-title">Grid Rows</h5>
          <form class="" @submit.prevent="sign_Up">
            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label for="exampleEmail11" class="">Email</label
                  ><input
                    name="email"
                    id="exampleEmail11"
                    placeholder="with a placeholder"
                    type="email"
                    class="form-control"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label for="examplePassword11" class="">Password</label
                  ><input
                    name="password"
                    id="examplePassword11"
                    placeholder="password placeholder"
                    type="password"
                    class="form-control"
                    v-model="password"
                  />
                </div>
              </div>
            </div>
            <button class="mt-2 btn btn-primary">Create</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="main-card mb-3 card">
            <div class="card-body">
              <h5 class="card-title">User table</h5>
              <table class="mb-0 table">
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">ID</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Phone Contact</th>
                    <th class="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" v-bind:key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td class="text-center">{{ user._id.slice(0, 10) }} ...</td>
                    <td class="text-center">{{ user.name }}</td>
                    <td class="text-center">{{ user.email }}</td>
                    <td class="text-center">{{ user.phone }}</td>
                    <td>
                      <!-- <select
                        type="select"
                        id="exampleCustomSelect"
                        name="customSelect"
                        class="custom-select"
                        v-model="user.active"
                        @change="onChange(user, $event)"
                      >
                        <option
                          v-for="(option, index) in options"
                          :key="index"
                          :value="option.value"
                          :class="option.class"
                        >
                          {{ option.text }}
                        </option>
                      </select> -->
                      <input
                        type="checkbox"
                        v-model="user.active"
                        :value="true"
                        @change="onChange(user)"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
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
  name: "User",
  data() {
    return {
      users: [],
      iActive: false,
      email: "",
      name: "",
      phone: "",
      options: [
        { text: "Active", value: true, class: "redColor" },
        { text: "Lock", value: false, class: "greenColor" }
      ]
    };
  },
  mounted() {
    this.GetUser();
  },
  methods: {
    async GetUser() {
      try {
        this.users = await Service.getUsers();
        console.log(this.users);
      } catch (err) {
        this.error = err.message;
      }
    },

    insertActive() {
      this.iActive = !this.iActive;
    },

    async sign_Up() {
      await Service.SignUp(this.email, this.password).then(() => {
        this.GetUser();
        this.iActive = !this.iActive;
      });
      this.email = "";
      this.password = "";
    },

    async onChange(user) {
      try {
        await Service.UpdateUser(user._id, user.active);
        console.log(user.active);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.greenColor {
  color: #33cc33;
}
.redColor {
  color: #e60000;
}

input[type="checkbox"] {
  position: relative;
  width: 60px;
  height: 25px;
  -webkit-appearance: none;
  background: #f03434;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(255, 0, 0, 0.2);
  transition: 0.7s;
}

input:checked[type="checkbox"] {
  background: rgb(78, 216, 78);
}

input[type="checkbox"]:before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  top: -2px;
  left: 0;
  background: #ffffff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

input:checked[type="checkbox"]:before {
  left: 30px;
}
</style>
