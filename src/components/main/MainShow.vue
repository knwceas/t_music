<template>
  <div class="mainshow">
    <el-container style="height: 540px">
      <el-header> <MainTabs> </MainTabs></el-header>
      <el-main><Swiper /> <RecommendPlaylist /> </el-main>
    </el-container>
  </div>
</template>

<script>
import MainTabs from "./MainTabs.vue";
import Swiper from "../swiper/Swiper.vue";
import RecommendPlaylist from "../playlist/RecommendPlaylist.vue";

export default {
  components: {
    MainTabs,
    Swiper,
    RecommendPlaylist,
  },
};
</script>

<style scoped>
.el-container {
  padding-bottom: 5px;
}
.el-main {
  padding: 12px 26px 10px 26px;
}
/* 去除页面滚动条 */
.el-main::-webkit-scrollbar {
  display: none;
}
</style>
