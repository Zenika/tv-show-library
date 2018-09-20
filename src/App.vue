<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="navbar">
      <ul class="navbar__nav-links">
        <li>Home</li>
        <li>Favorites</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style>
:root {
  --nav-background: #576574;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

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

.navbar__nav-links li {
  padding: 0 10px;
}

body {
  margin: 0;
}
</style>
