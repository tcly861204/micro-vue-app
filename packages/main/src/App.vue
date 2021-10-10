<template>
<router-view />
<div id="child"></div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const $router = useRouter()
    const token = localStorage.getItem('token')
    if (!token) {
      $router.push('/login')
    }
  }
}
</script>
