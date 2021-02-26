<template>
  <div class="play">
    <!-- play -->
    <div class="left">
      <img :src="this.curMusic.al.picUrl" alt="" />
      <div class="name">{{ this.curMusic.name }}</div>
      <div class="singer">{{ this.curMusic.ar[0].name }}</div>
    </div>
    <div class="center">
      <div class="top">
        <i class="iconfont icon-shunxubofang"></i>
        <i class="iconfont icon-shangyishoushangyige"></i>

        <a @click="playMusic">
          <i class="iconfont icon-bofang icon1" v-show="!isPlay"></i>
          <i class="iconfont icon-zanting2 icon1" v-show="isPlay"></i>
        </a>
        <i class="iconfont icon-xiayigexiayishou"></i>
        <span>词</span>
      </div>
      <div class="bottom">
        <span>00:00</span>
        <el-slider v-model="value1" :format-tooltip="formatTooltip"></el-slider>
        <span>{{ this.curMusic.dt }}</span>
      </div>
    </div>
    <div class="right">
      <i class="iconfont icon-icon-test icon1"></i>
      <el-slider
        v-model="value2"
        :format-tooltip="formatTooltip"
        class="voice"
      ></el-slider>
      <i class="iconfont icon-bofangliebiao icon2"></i>
    </div>
    <!-- ref属性操作dom元素 -->
    <audio :src="this.songurl" ref="audio"></audio>
  </div>
</template>

<script>
import { userPlaylist, playlistDetail, songUrl } from "network/song";
export default {
  components: {},
  data() {
    return {
      value1: 0,
      value2: 50,
      songurl: "",
      lovePlay: [],
      isPlay: false,
    };
  },
  computed: {
    uid() {
      return this.$store.getters.uid;
    },
    index() {
      return this.$store.getters.index; // 点击表格的歌 传过来
    },
    curMusic() {
      return this.lovePlay[this.index];
    },
  },
  created() {
    this.getPlaylist();
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
    async getPlaylist() {
      let res1 = await userPlaylist(this.uid); // this.uid "573991873"
      this.id = res1.playlist[0].id; // 传用户id拿用户歌单id

      let res2 = await playlistDetail(this.id);
      this.lovePlay = res2.playlist.tracks;
      this.$store.commit("setlovePlay", res2.playlist.tracks);

      let res3 = await songUrl(this.curMusic.id); // 保证刚进去首页播放
      this.songurl = res3.data[0].url; // 传歌曲id拿歌曲播放链接
    },
    playMusic() {
      this.isPlay = !this.isPlay;
      if (this.$refs.audio.paused) {
        setTimeout(() => {
          this.$refs.audio.play();
        }, 150);
      } else {
        this.$refs.audio.pause();
      }
    },
  },
  watch: {
    // 监听点击播放列表的歌
    index: {
      async handler(val, oldVal) {
        let res = await songUrl(this.curMusic.id);
        this.songurl = res.data[0].url; // 传歌曲id拿歌曲播放链接
        // 等待Dom渲染
        if (!this.$refs.audio) {
          await sleep(100);
        }
        if (this.$refs.audio.paused) {
          this.isPlay = !this.isPlay;
        }
        this.$nextTick(() => {
          //等待节点渲染后再获取节点
          setTimeout(() => {
            // console.log(2);
            this.$refs.audio.play();
          }, 150);
        });
      },
      immediate: true,
    },
  },
};
</script>
<style>
.el-slider__runway {
  background-color: #454546;
  height: 3px;
  width: 388px;
  margin: 10px;
}
.voice .el-slider__runway {
  width: 50px;
  margin-right: 26px;
}
/* .el-slider__runway:hover {
  height: 6px;
} */
/*一开始不显示进度条的小圆球*/
.el-slider__button {
  width: 0;
  height: 0;
  border: none;
}
.el-slider__button.hover {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: none;
  background-color: #ec4141;
}
.el-slider__bar {
  background-color: #ec4141;
  height: 3px;
}
</style>
<style scoped>
.play {
  display: flex;
  /* padding: 8px 0; */
}
.left {
  flex: 1;
  padding: 13px 12px;
  font-size: 14px;
}
img {
  width: 46px;
  height: 46x;
  border-radius: 10%;
  float: left;
}
.name,
.singer {
  overflow: hidden;
  padding: 3px 0 3px 11px;
}
.center {
  flex: 2;
  text-align: center;
  /* position: absolute; 会影响flex*/
}
.center .top {
  height: 46px;
  line-height: 46px;
}

.center .top i,
.center .top span {
  margin-right: 30px;
  flex-wrap: wrap;
}
.center .icon1 {
  font-size: 34px;
  position: relative;
  top: 7px;
}
.center .bottom {
  display: flex;
  justify-content: center;
}
.bottom span {
  font-size: 10px;
  margin-top: 5px;
}
.right {
  flex: 1;
  display: flex;
  justify-content: flex-end; /*水平方向*/
  align-items: center; /*垂直方向*/
  /* padding: 25px 0; */
}
.right .icon1 {
  margin-right: 7px;
}
.right .icon2 {
  margin-right: 28px;
}
</style>
