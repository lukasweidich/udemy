<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/Blog">Blog</router-link>
      <router-link to="/Account">Account</router-link>
    </div>
    <router-view></router-view>
    <!-- <app-user /> -->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
</style>
