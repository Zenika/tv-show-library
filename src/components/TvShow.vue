<template>
  <div class="tv-show">
    <img v-if="tvShowData.image"
      :src="tvShowData.image.medium"
      class="tv-show__image" />
    <div class="tv-show__body">
      <h3>{{tvShowData.name}}</h3>
      <div v-html="tvShowData.summary"></div>
    </div>
    <button type-="button" @click="onFavoriteClick">
      <i class="fa fa-star" :class="[isSelected ? 'fa-star--selected' : '']"></i>
    </button>
  </div>
</template>

<script>
import favoriteService from '../services/favorites.services';

export default {
  methods: {
    onFavoriteClick(event) {
      this.$emit('favorites-selected', event, this.tvShowData);
    },
  },
  props: {
    tvShowData: Object,
  },
  data() {
    return {
      favoriteList: favoriteService.favorites,
    };
  },
  computed: {
    isSelected() {
      return this.favoriteList.find(item => this.tvShowData.id === item.id);
    },
  },
};
</script>

<style>
.tv-show {
  display: flex;
  margin: 0 200px;
  margin-bottom: 15px;
  padding: 10px 15px;
  border: 1px solid gray;
  justify-content: space-between;
}

.tv-show__body {
  display: flex;
  width: 70%;
  flex-direction: column;
  text-align: left;
}

.fa-star--selected {
  color: gold;
}

.tv-show button {
  background: none;
  height: 20px;
  border-color: teal;
  cursor: pointer;
}

</style>
