<template>

<div>
  <h1>{{title}}</h1>
  <tv-show
      v-for="tvShow in favorites"
      :tvShowData="tvShow"
      :key="tvShow.id"
      @favorites-selected = "updateFavorites($event, tvShow)"/>
</div>
</template>

<script>
import favoritesService from '../services/favorites.services';
import TvShow from './TvShow.vue';

export default {
  components: {
    TvShow,
  },
  data() {
    return {
      title: 'FAVORITES',
      favorites: favoritesService.favorites,
    };
  },
  methods: {
    updateFavorites(event, tvShow) {
      if (favoritesService.isFavorite(tvShow)) {
        favoritesService.removeFavorite(tvShow);
      } else {
        favoritesService.addFavorite(tvShow);
      }
    },
  },
};
</script>

<style>
</style>
