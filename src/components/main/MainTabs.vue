<template>
  <div class="maintabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        class="tabs__item"
        label="个性推荐"
        name="first"
      ></el-tab-pane>
      <el-tab-pane label="歌单" name="second"></el-tab-pane>
      <el-tab-pane label="排行榜" name="third"></el-tab-pane>
      <el-tab-pane label="歌手" name="fourth"></el-tab-pane>
      <el-tab-pane label="最新音乐" name="fifth"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style >
.maintabs {
  margin: 15px 20px;
  height: 54px;
  /* width: 820px; */
}

.el-tabs__item {
  color: #c7c7c7;
  font-size: 16px;
}
.el-tabs__item:hover {
  color: #ffffff;
}
.el-tabs__item.is-active {
  color: #c7c7c7;
  font-size: 22px;
}
.el-tabs__active-bar {
  background: #ec4141;
}
</style>
