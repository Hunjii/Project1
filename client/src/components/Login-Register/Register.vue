<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "Register"
};
</script>

<style>
</style>
