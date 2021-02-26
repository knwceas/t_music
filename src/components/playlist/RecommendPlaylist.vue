<template>
  <div class="recommendplaylist">
    <h3>推荐歌单</h3>
    <div class="lf recommend" v-for="(item, index) in recommend" :key="index">
      <a href=""><img :src="item.picUrl" alt="" /></a>
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    // 提前在aside的created请求，加速渲染
    recommend() {
      return this.$store.getters.recommend;
    },
  },
};
</script>

<style scoped>
h3 {
  color: #c7c7c7;
  font-size: 22px;
}
h3:hover {
  color: #ffffff;
}
img {
  width: 136px;
  height: 136px;
  margin: 15px 14px 15px 0;
}
.name {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 3px;
  width: 136px;
  font-size: 14px;
  line-height: 18px;
  margin-top: -8px;
}
</style>
