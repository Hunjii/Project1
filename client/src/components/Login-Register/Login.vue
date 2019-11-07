<template>
  <div>
    <div class="header-login-register">
      <span>
        <a href="create-agency.html">Create Agency</a>
      </span>
      <ul class="login" v-if="!status">
        <li>
          <a href="#">Login</a>
          <div class="login-form">
            <h4>Login</h4>
            <form @submit.prevent="Login" method="post">
              <div class="input-box mb-19">
                <i class="fa fa-user"></i>
                <input type="text" name="user-name" placeholder="Username" v-model="login.email" />
              </div>
              <div class="input-box">
                <i class="fa fa-lock"></i>
                <input
                  type="password"
                  name="user-password"
                  placeholder="Password"
                  v-model="login.password"
                />
              </div>
              <div class="button-box">
                <div class="fix">
                  <input type="checkbox" value="remember" name="remember" />
                  <span>Remember me</span>
                </div>
                <button v-on:click="Login" class="register-btn button lemon pull_right">Login</button>
              </div>
            </form>
          </div>
        </li>
      </ul>
      <ul class="login" v-if="!status">
        <li>
          <a href="#">Register</a>
          <div class="login-form">
            <h4>Sign Up</h4>
            <form @submit.prevent="sign_Up" method="post">
              <div class="input-box mb-19">
                <i class="fa fa-envelope"></i>
                <input type="email" name="user-email" placeholder="Email" v-model="signup.email" />
              </div>
              <div class="input-box mb-19">
                <i class="fa fa-lock"></i>
                <input
                  type="password"
                  name="user-password"
                  placeholder="Password"
                  v-model="signup.password"
                />
              </div>
              <div class="input-box mb-19">
                <i class="fa fa-unlock"></i>
                <input
                  type="text"
                  placeholder="Comfirm"
                  v-model="signup.passComfirm"
                  :class="repeatPassword"
                />
              </div>
              <div class="button-box mt-20">
                <button v-on:click="sign_Up" class="register-btn button lemon pull_right">Sign Up</button>
              </div>
            </form>
          </div>
        </li>
      </ul>
      <ul class="login" v-if="status">
        <li>
          <a>
            Welcome
            <span class="name">{{ login.email }}</span>
          </a>
        </li>
      </ul>
      <div class="search-btn">
        <ul data-toggle="dropdown" class="header-search search-toggle">
          <li class="search-menu">
            <img src="assets/images/icons/search.png" alt class="p-img" />
            <img src="assets/images/icons/search-hover.png" alt class="s-img" />
          </li>
        </ul>
        <div class="search">
          <div class="search-form">
            <form id="search-form" action="#">
              <input type="search" placeholder="Search here..." name="search" />
              <button type="submit">
                <span>
                  <i class="fa fa-search"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Service from "../../Service.js";

export default {
  name: "Login",
  data() {
    return {
      signup: {
        email: "",
        password: "",
        passComfirm: ""
      },
      login: {
        email: "",
        password: ""
      },
      status: false
    };
  },
  computed: {
    repeatPassword() {
      return this.signup.passComfirm === this.signup.password
        ? "color2"
        : "color";
    }
  },
  created() {
    if (localStorage.getItem("token") !== null) {
      this.login.email = localStorage.getItem("email");
      return (this.status = true);
    }
  },
  methods: {
    async sign_Up() {
      await Service.SignUp(this.signup.email, this.signup.password);
      this.signup.email = "";
      this.signup.password = "";
    },

    async Login() {
      const login = await Service.Login(this.login.email, this.login.password);
      const token = await login.data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("email", this.login.email);
      this.status = true;
    }
  }
};
</script>

<style  scoped>
.color {
  color: red;
}

.color2 {
  color: green;
}
.name {
  font-size: 15px;
}
</style>