<template>
  <el-row>
    <el-col :span="24">
      <img src="@/assets/logo/logo.png">
      <router-view />
    </el-col>
  </el-row>
</template>
<style scoped lang="less">
.el-row {
  margin: 0 auto;
  .el-col {
    border-radius: 4px;
    text-align: center;
    img{
      position: relative;
      left: 40px;
    }
  }
}
</style>
