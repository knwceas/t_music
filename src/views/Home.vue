<template>
  <div class="home">
    <TabBar></TabBar>
    <Main />
    <Play></Play>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from "components/tabbar/TabBar";
import Main from "components/main/Main.vue";
import Play from "components/playlist/Play.vue";

export default {
  name: "Home",
  components: {
    TabBar,
    Main,
    Play,
  },
};
</script>

<style scoped>
</style>
