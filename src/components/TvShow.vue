<template>
  <div class="tv-show">
    <img v-if="tvShowData.image"
      :src="tvShowData.image.medium"
      class="tv-show__image" />
    <div class="tv-show__body">
      <h3>{{tvShowData.name}}</h3>
      <div v-html="tvShowData.summary"></div>
    </div>
    <i class="fa fa-star"></i>
  </div>
</template>

<script>
export default {
  props: {
    tvShowData: Object,
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
</style>
