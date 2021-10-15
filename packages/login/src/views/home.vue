<template>
<img class="wave" src="@/assets/wave.png">
<section class="container">
  <div class="img">
    <img src="@/assets/bg.svg">
  </div>
  <div class="login-content">
    <form>
      <img src="@/assets/avatar.svg">
      <h2 class="title">Welcome</h2>
      <div class="input-div one">
        <div class="i">
          <i class="fas fa-user"></i>
        </div>
        <div class="div">
          <h5>Username</h5>
          <input type="text" class="input">
        </div>
      </div>
      <div class="input-div pass">
        <div class="i">
          <i class="fas fa-lock"></i>
        </div>
        <div class="div">
          <h5>Password</h5>
          <input type="password" class="input">
        </div>
      </div>
      <button class="btn" @click="handleClick">登录</button>
    </form>
  </div>
</section>
</template>
<script>
import '@/style/style.css'
import { getCurrentInstance, nextTick } from 'vue'
export default {
  name: 'home',
  setup () {
    const { proxy } = getCurrentInstance()
    const handleClick = function () {
      proxy.$setGlobalState({
        token: true
      })
      nextTick(() => {
        window.history.replaceState({}, '', '/')
      })
    }
    return {
      handleClick
    }
  }
}
</script>
