<template>
  <div class="tv-show">
    <img :src="image.url" class="tv-show__image" />
    <div class="tv-show__body">
      <h3>{{name}}</h3>
      <p>{{summary}}</p>
    </div>
    <i class="fa fa-star"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Lord of the rings',
      summary: 'The best bromance movie ever',
      image: {
        url: 'https://goo.gl/x9mk6w',
      },
    };
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
