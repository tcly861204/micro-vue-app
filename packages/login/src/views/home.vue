<template>
<section>login</section>
<button @click="handleClick">登录</button>
</template>
<script>
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
