<template>
  <div class="navbar">
    <ul class="navbar__nav-links">
      <a href="#" class="navbar__link-item">Home</a> |
      <a href="#" class="navbar__link-item">Favorites</a>
    </ul>
    <div class="navbar__search">
      <input type="text" placeholder="search...">
      <button>Search</button>
    </div>
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

.navbar__search {
  padding-top: 10px;
}

.navbar__search input {
  /* margin-left: 10px; */
  padding: 10px;
  background: none;
  background-color: white;
  border-radius: 3px;
  border: solid 1px black;
}

.navbar__search button {
  margin: 0 10px;
  padding: 10px;
  background: none;
  border-radius: 3px;
  font-size: 12px;
  color: white;
}
</style>
