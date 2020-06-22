<template>
  <div id="user">
    <h3>The user</h3>
    <p>My username is {{username}}</p>
    <app-info />
  </div>
</template>
<script>
import Info from "./Info";
export default {
  data() {
    return {
      username: "Lukas"
    };
  },
  components: {
    "app-info": Info
  }
};
</script>

<style>
</style>