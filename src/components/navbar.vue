<template>
  <div class="navbar">
    <ul class="navbar__nav-links">
      <router-link class="navbar__link-item" to="/">Home</router-link> |
      <router-link class="navbar__link-item" to="/favorites">Favorites</router-link>
    </ul>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: var(--nav-background);
  color: white;
}

.navbar__nav-links {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.navbar__link-item {
  padding: 0 10px;
  color: white;
  text-decoration: none;
}

</style>
