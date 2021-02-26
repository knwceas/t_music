<template>
  <div class="main">
    <el-container>
      <Aside></Aside>
      <!-- <slot></slot> -->
      <!-- keep-alive缓存组件 返回时不再请求 -->
      <keep-alive include="MainShow">
        <!-- 动态渲染组件 -->
        <component :is="currentView"></component
      ></keep-alive>
    </el-container>
  </div>
</template>

<script>
import Aside from "components/aside/Aside";
import MainShow from "components/main/MainShow.vue";
import LovePlaylist from "components/playlist/LovePlaylist.vue";

export default {
  components: { Aside, MainShow, LovePlaylist },
  computed: {
    currentView() {
      return this.$store.getters.currentView;
    },
  },
};
</script>

<style scoped>
.main {
  border-bottom: 1px solid #444444;
}
</style>
