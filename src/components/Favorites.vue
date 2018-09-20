<template>

<div>
  <h1>{{title}}</h1>
  <tv-show
      v-for="tvShow in favorites"
      :tvShowData="tvShow"
      :key="tvShow.id"
  />
</div>
</template>

<script>
import favoriteService from '../services/favorites.services';
import TvShow from './TvShow.vue';

export default {
  components: {
    TvShow,
  },
  data() {
    return {
      title: 'FAVORITES',
      favorites: favoriteService.favorites,
    };
  },

};
</script>

<style>

</style>
