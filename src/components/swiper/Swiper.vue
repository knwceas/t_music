<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" height="182px">
      <el-carousel-item
        v-for="(item, index) in banners"
        :key="index"
        style="width: 498px; left: -6%"
      >
        <el-image :src="item.imageUrl" fit="contain"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getSwiper } from "network/home";
export default {
  components: {},
  data() {
    return {
      banners: [],
    };
  },
  created() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      getSwiper().then((res) => {
        this.banners = res.banners;
      });
    },
  },
};
</script>

<style scoped>
</style>
