<template>
  <el-container>
    <el-aside width="auto">
      <router-link to="/welcome">
        <img
          src="@/assets/images/logo/logo.png"
          alt=""
          class="logo"
        >
      </router-link>
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="this.$router.path"
        :collapse="isCollapse"
        router
        background-color="#001529"
        text-color="#dede"
        active-text-color="#FFF"
      >
        <el-menu-item index="/bArea">
          <i class="el-icon-s-home"></i>
          <span slot="title">选项一</span>
        </el-menu-item>
        <el-submenu index="/douBan">
          <template slot="title">
            <i class="el-icon-video-camera-solid"></i>
            <span slot="title">豆瓣电影</span>
          </template>
          <el-menu-item index="/douBan/ComingSoon">即将上映</el-menu-item>
          <el-menu-item index="/douBan/InTheaters">正在热映</el-menu-item>
          <el-menu-item index="/douBan/Top250">Top250</el-menu-item>
        </el-submenu>
        <el-submenu index="/kuGou">
          <template slot="title">
            <i class="el-icon-headset"></i>
            <span slot="title">酷狗音乐</span>
          </template>
          <el-menu-item index="/kuGou/musicList">音乐排行榜</el-menu-item>
          <el-menu-item index="/douBan/InTheaters">正在热映</el-menu-item>
          <el-menu-item index="/douBan/Top250">Top250</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <global-header @getCollapse="collapse" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer height="auto">
        <el-link
          href="https://cn.vuejs.org/"
          type="success"
          target="_blank"
          :underline="false"
        >Vue首页</el-link>
        <el-link
          href="https://github.com/zhengjun924/element"
          target="_blank"
          :underline="false"
        >
          <img
            class="gitHub"
            src="@/assets/images/logo/GitHub.png"
            alt
          />
        </el-link>
        <el-link
          href="https://element.eleme.io"
          type="primary"
          target="_blank"
          :underline="false"
        >Element UI</el-link>
        <p>Copyright&copy;郑君</p>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import GlobalHeader from "@/components/GlobalHeader/Header";
import Container from "./Container.less";

export default {
  name: "container",
  data() {
    return {
      isCollapse: false
    };
  },
  components: {
    GlobalHeader
  },
  methods: {
    collapse(bool) {
      this.isCollapse = bool;
    }
  }
};
</script>
<style lang="less" scoped>
</style>

