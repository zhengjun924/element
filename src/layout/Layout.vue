<template>
  <el-row>
    <el-col :span="24">
      <img src="../assets/logo.png">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>
<style>
.el-row {
  margin: 0 auto;
}
.el-col {
  border-radius: 4px;
}
img {
  display: block;
  margin: 0 auto;
  position: relative;
  left: 35px;
}
</style>
