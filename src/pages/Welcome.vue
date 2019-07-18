<template>
  <div>
    <el-carousel
      indicator-position="none"
      height="72vh"
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
        require("@/assets/1.jpg"),
        require("@/assets/2.jpg"),
        require("@/assets/3.jpg"),
        require("@/assets/4.jpg")
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