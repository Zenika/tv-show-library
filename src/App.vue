<template>
  <div id="app">
    <navbar />
    <home />
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Home,
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
body {
  margin: 0;
}
</style>
