<template>
  <el-row>
    <el-col :span="24">
      <img src="../assets/logo.png">
      <router-view />
    </el-col>
  </el-row>
</template>
<style scoped lang="less">
.el-row {
  margin: 0 auto;
}
.el-col {
  border-radius: 4px;
  text-align: center;
}
</style>
