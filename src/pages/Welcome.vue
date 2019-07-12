<template>
  <div>
    <el-carousel
      indicator-position="none"
    >
      <el-carousel-item
        v-for="item in 4"
        :key="item"
      >
        <img src="../assets/logo.png" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.el-carousel__item{
  text-align: center;
}
</style>