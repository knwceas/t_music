<template>
  <div id="aside">
    <el-aside width="200px">
      <el-menu active-text-color="#444444" style="background-color: #2b2b2b">
        <el-menu-item>发现音乐</el-menu-item>
        <el-menu-item>视频</el-menu-item>
        <el-menu-item>朋友</el-menu-item>
        <el-menu-item>直播</el-menu-item>
        <el-menu-item-group>
          <template slot="title">我的音乐</template>
          <el-menu-item index="1-1">本地音乐</el-menu-item>
          <el-menu-item index="1-2">下载管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">创建的歌单</template>
          <el-menu-item index="1-3" @click="handleChangeView">
            <!-- <router-link to="/music"> 我喜欢的音乐 </router-link> -->
            我喜欢的音乐
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import { recommendPlaylist } from "network/home";

export default {
  components: {},
  created() {
    this.recommendPlaylist();
  },
  methods: {
    handleChangeView() {
      this.$store.commit("setCurrentView", "LovePlaylist");
    },
    recommendPlaylist() {
      recommendPlaylist().then((res) => {
        this.$store.commit("setRecommend", res.result);
      });
    },
  },
};
</script>

<style scoped>
#aside {
  height: 540px;
  border-right: 1px solid #444444;
  /* border-bottom: 1px solid #444444; */
}

.el-menu {
  border: none;
}
.el-menu-item {
  color: #c7c7c7;
  height: 43px;
  line-height: 43px;
  font-size: 16px;
}
.el-menu-item:hover {
  background-color: #333333;
  color: #ffffff;
}
</style>
