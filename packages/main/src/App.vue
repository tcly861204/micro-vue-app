<template>
<div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/home-about">About</router-link> |
  <router-link to="/login">login</router-link> |
  <router-link to="/admin">admin</router-link>
</div>
<router-view />
<div id="child"></div>
</template>
