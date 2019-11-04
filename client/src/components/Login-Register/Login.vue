<template>
  <div>
    <div class="header-login-register">
      <span>
        <a href="create-agency.html">Create Agency</a>
      </span>
      <ul class="login">
        <li>
          <a href="#">Login</a>
          <div class="login-form">
            <h4>Login</h4>
            <form action="#" method="post">
              <div class="input-box mb-19">
                <i class="fa fa-user"></i>
                <input type="text" name="user-name" placeholder="Username" />
              </div>
              <div class="input-box">
                <i class="fa fa-lock"></i>
                <input type="password" name="user-password" placeholder="Password" />
              </div>
              <div class="button-box">
                <div class="fix">
                  <input type="checkbox" value="remember" name="remember" />
                  <span>Remember me</span>
                </div>
                <button type="submit" class="register-btn button lemon pull_right">Login</button>
              </div>
            </form>
          </div>
        </li>
      </ul>
      <ul class="login">
        <li>
          <a href="#">Register</a>
          <div class="login-form">
            <h4>Sign Up</h4>
            <form action="#" method="post">
              <div class="input-box mb-19">
                <i class="fa fa-user"></i>
                <input type="text" name="first-name" placeholder="Firstname" />
              </div>
              <div class="input-box mb-19">
                <i class="fa fa-user"></i>
                <input type="text" name="last-name" placeholder="Lastname" />
              </div>
              <div class="input-box mb-19">
                <i class="fa fa-envelope"></i>
                <input type="email" name="user-email" placeholder="Email" />
              </div>
              <div class="input-box">
                <i class="fa fa-lock"></i>
                <input type="password" name="user-password" placeholder="Password" />
              </div>
              <div class="button-box mt-20">
                <button type="submit" class="register-btn button lemon pull_right">Sign Up</button>
              </div>
            </form>
          </div>
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
export default {
  name: "Login"
};
</script>

<style>
</style>
