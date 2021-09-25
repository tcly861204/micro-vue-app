<template>
  <div class="home">
    home a
    <button @click="handleClick">click me</button>
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
    return {
      handleClick
    }
  }
}
</script>
