<template>
  <div id="tabbar">
    <div class="left stroke">网易云音乐</div>
    <div class="center">
      <div class="arrow lf">
        <i
          class="iconfont icon-jiantou s-icon l-arrow"
          @click="handleChangeView"
        ></i>
        <i class="iconfont icon-jiantou-copy s-icon"></i>
      </div>
      <div class="lf">
        <el-input
          class="input1"
          placeholder="搜索"
          prefix-icon="el-icon-search"
          v-model="input1"
          size="small"
        ></el-input>
      </div>
    </div>
    <div class="right">
      <!-- <i class="iconfont icon-touxiang l-icon"></i> -->
      <Login />
      <i class="iconfont icon-jiantou1 l-icon"></i>
      <i class="iconfont icon-shezhi l-icon"></i>
      <i class="iconfont icon-pifu1 l-icon"></i>
      <i class="iconfont icon-sixin l-icon"></i>
      <i class="iconfont icon-suoxiao l-icon"></i>
      <i class="iconfont icon-fangda l-icon"></i>
      <i class="iconfont icon-guanbi l-icon"></i>
    </div>
  </div>
</template>

<script>
import Login from "../login/Login";

export default {
  components: {
    Login,
  },
  data() {
    return {
      input1: "",
    };
  },
  created() {},
  methods: {
    handleChangeView() {
      this.$store.commit("setCurrentView", "MainShow");
    },
  },
};
</script>

<style scoped>
#tabbar {
  display: flex;
  height: 58px;
  line-height: 58px;
  background: rgb(43, 43, 43);
  border-bottom: 2px solid #a61e1e;
}
span {
  font-size: 14px;
}
.left {
  flex: 1;
  text-align: center;
}
.stroke {
  letter-spacing: 0.1em;
  font-size: 18px;
  text-shadow: 0 0 2px black;
  color: white;
}
.center {
  flex: 2;
}
.arrow {
  margin: 0 18px 0 25px;
}
.l-arrow {
  margin-right: 10px;
}

.input1 >>> .el-input__inner {
  border-radius: 25px;
}
.right {
  flex: 2;
  display: flex;
}
.right i {
  flex: 1;
  justify-content: flex-start;
}
i:hover {
  color: rgb(255, 255, 255);
}
</style>
