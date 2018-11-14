<template>
  <div>
    <div class="home-header">
      <h1>Home</h1>
      <div class="search">
        <input type="text" placeholder="search...">
        <button>Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-header {
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}

.search input {
  padding: 10px;
  background: none;
  background-color: white;
  border-radius: 3px;
  border: solid 1px black;
}

.search button {
  margin: 0 10px;
  padding: 10px;
  background: none;
  border-radius: 3px;
  font-size: 12px;
  color: var(--nav-background);
}
</style>
