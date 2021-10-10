<template>
  <div class="home">
    home a
    <button @click="handleClick">click me</button>
    <button @click="handleJump">跳转首页</button>
  </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'home',
  setup () {
    const { proxy } = getCurrentInstance()
    const handleClick = function () {
      proxy.$setGlobalState({
        closeTab: 'admin-home'
      })
    }
    const handleJump = function () {
      window.history.replaceState({}, '', '/')
    }
    return {
      handleJump,
      handleClick
    }
  }
}
</script>
