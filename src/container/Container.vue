<template>
  <el-container>
    <el-header>
      <GlobalHeader @getCollapse="collapse" />
    </el-header>
    <el-container>
      <el-aside>
        <el-menu
          class="el-menu-vertical-demo"
          :default-active="this.$route.path"
          :collapse="isCollapse"
          router
        >
          <el-menu-item index="/welcome">
            <i class="el-icon-s-home"></i>
            <span slot="title">欢迎</span>
          </el-menu-item>
          <el-menu-item index="/bArea">选项1</el-menu-item>
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
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>
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
              src="../assets/GitHub.png"
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
  </el-container>
</template>
<script>
import GlobalHeader from "../components/GlobalHeader/Header";

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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  max-width: 200px;
}
.el-header {
  line-height: 60px;
  .el-radio-group {
    display: inline-block;
  }
}
.el-footer {
  width: 100%;
  text-align: center;
  padding: 15px 0;
  .gitHub {
    margin: 0 5px;
  }
}
.container {
  padding: 20px;
}
.el-aside {
  max-width: 202px;
}
</style>
