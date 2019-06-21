<template>
  <el-row>
    <el-col :span="24">
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
</style>
