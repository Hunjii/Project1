<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
</style>
