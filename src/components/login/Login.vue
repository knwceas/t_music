<template>
  <div class="login lf">
    <a href=""><img :src="InfoImg" alt="" /></a>
    <el-button type="text" @click="dialogVisible = true">
      {{ InfoName }}</el-button
    >
    <el-button size="mini" v-if="currentUserInfo !== null" @click="Logout"
      >退出</el-button
    >
    <!-- dialogVisible = true 不显示登录框 -->
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="form"
        status-icon
        :rules="loginInfoRules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="
            dialogVisible = false;
            confirmLogin();
          "
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
 
<script>
import { Login, Logout } from "network/home";
export default {
  components: {},
  data() {
    return {
      form: {
        phone: "13479636407",
        password: "kzj2372966718",
      },
      InfoImg: require("assets/img/头像.png"),
      InfoName: "未登录",
      dialogVisible: false,
      loginInfoRules: {
        phone: [{ required: true, message: " ", trigger: "blur" }],
        password: [{ required: true, message: " ", trigger: "blur" }],
      }, // 登录格式的校验
      currentUserInfo:
        window.localStorage.getItem("currentUserInfo") === "null"
          ? null
          : JSON.parse(window.localStorage.getItem("currentUserInfo")),
      // uid:''
    };
  },
  computed: {
    getInfoImg() {
      return this.currentUserInfo.avatarUrl;
    },
    getInfoName() {
      return this.currentUserInfo.nickname;
    },
    getUid() {
      return this.currentUserInfo.userId;
    },
  },
  created() {
    // 每次刷新不退出登录
    if (this.currentUserInfo) {
      this.InfoImg = this.getInfoImg;
      this.InfoName = this.getInfoName;
      this.$store.commit("setUid", this.getUid);
    }
  },
  methods: {
    Logout() {
      Logout().then((res) => {
        this.currentUserInfo = null;
        // 没有的话 需要刷新才能跳转
        this.InfoImg = require("assets/img/头像.png");
        this.InfoName = "未登录";
        window.localStorage.setItem("currentUserInfo", null);
        this.$store.commit("setUid", null);
      });
    },
    // 确定登录
    confirmLogin() {
      this.Login(this.form.phone, this.form.password);
      // 这里 this.uid拿不到值  因为Login会在commit后执行
    },
    Login(phone, password) {
      Login(phone, password).then((res) => {
        // 保存用户信息
        window.localStorage.setItem(
          "currentUserInfo",
          JSON.stringify(res.profile)
        );
        this.currentUserInfo = res.profile;
        this.InfoImg = this.getInfoImg;
        this.InfoName = this.getInfoName;
        this.$store.commit("setUid", this.getUid);
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style scoped>
.login {
  color: aliceblue;
}
img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 10px -10px 0;
}
.el-button--text {
  color: #c7c7c7;
}
.el-button {
  padding: 5px;
}
</style>
