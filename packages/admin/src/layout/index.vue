<template>
<header class="g-header">
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</header>
<main class="g-main">
  <section class="g-sidebar"></section>
  <section class="g-container">
    <slot></slot>
  </section>
</main>
</template>
