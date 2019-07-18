<template>
  <el-container>
    <el-aside width="auto">
      <router-link to="/welcome">
        <img
          src="../assets/logo.png"
          alt=""
          class="logo"
        >
      </router-link>
      <el-menu
        class="el-menu-vertical-demo"
        default-active="/welcome"
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
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
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
            src="@/assets/GitHub.png"
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
      isCollapse: ""
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

