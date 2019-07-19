<template>
  <div>
    <el-carousel
      indicator-position="none"
      height="76vh"
    >
      <el-carousel-item
        v-for="(item,key) in imgList"
        :key="key"
      >
        <img
          v-lazy="item"
        >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        require("@/assets/carousel/1.jpg"),
        require("@/assets/carousel/2.jpg"),
        require("@/assets/carousel/3.jpg"),
        require("@/assets/carousel/4.jpg")
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.el-carousel {
  text-align: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>