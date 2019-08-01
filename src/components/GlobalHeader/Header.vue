<template>
  <el-row>
    <el-col :span="8">
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col
      :span="8"
      :offset="8"
      class="rightBox"
    >
      <el-dropdown @command='handClick'>
        <el-avatar
          :size="60"
        >
          <img :src="defaultAvatar" />
        </el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">个人设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      defaultAvatar:""
    };
  },
  watch: {
    isCollapse() {
      this.$emit("getCollapse", this.isCollapse);
    }
  },
  methods: {
    handClick(command) {
      switch (command) {
        case "setting":
          console.log(231324);
          break;
        case "logout":
          this.logout();
          break;
      }
    },
    logout() {
      this.$router.replace("/user/login");
      this.$message({
        message: "退出成功",
        type: "success"
      });
      window.sessionStorage.clear();
    },
    errorHandler() {
      return true;
    },
    async getAvatar(){
      const {data} = await this.$axios.get('/zheng/userinfo/getHeadSculpture')
      this.defaultAvatar = data.url;
    }
  },
  mounted() {
    this.getAvatar();
  },
};
</script>

<style lang="less" scoped>
.rightBox {
  text-align: right;
  padding-right: 15px;
}
</style>