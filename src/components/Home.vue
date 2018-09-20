<template>
  <div>
    <div class="home-header">
      <h1>{{title}}</h1>
      <div class="search">
        <input type="text" placeholder="search...">
        <button>Search</button>
      </div>
    </div>
    <tv-show
      v-for="tvShow in tvShows"
      :tvShowData="tvShow"
      :key="tvShow.id"
      @favorites-selected = "updateFavorites($event, tvShow)"/>
  </div>
</template>

<script>
import TvShow from './TvShow.vue';
import TvShowService from '../services/tvshow.service';
import favoritesService from '../services/favorites.services';

export default {
  components: {
    TvShow,
  },
  data() {
    return {
      title: 'Home',
      tvShows: [],
      favoriteTvShows: [],
    };
  },
  created() {
    TvShowService.getTvShow('bad').then((TvShows) => {
      this.tvShows = TvShows;
    });
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
