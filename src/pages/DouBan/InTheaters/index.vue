<template>
  <el-row :gutter="15">
    <el-col
      :span="4"
      v-for="(item,key) in movieList"
      :key="key"
    >
      <el-card :body-style="{ height:'350px',padding: '0px' }">
        <el-image
          fit="fit"
          :src="`https://images.weserv.nl/?url=${item.images.small}`"
        ></el-image>
        <div class="movieDetail">
          <p>电影名：{{item.title}}</p>
          <p>电影类型：<span
              v-for="(name,key) in item.genres"
              :key="key"
            >
              {{name}}、
            </span></p>
          <p>主演:
            <span
              v-for="(cast,key) in item.casts"
              :key="key"
            >
              {{cast.name}}、
            </span>
          </p>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      movieList: [],
      centerDialogVisible: false
    };
  },
  methods: {
    async getMovieList() {
      const {
        data: { subjects }
      } = await this.$axios.get("/zheng/amusement/movies/inTheaters");
      this.movieList = subjects;
    }
  },
  mounted() {
    this.getMovieList();
  }
};
</script>

<style lang="less" scoped>
.el-col {
  margin-bottom: 10px;
  .el-image {
    width: 205px;
    height: 240px;
  }
  .movieDetail {
    padding: 0px 10px;
    p {
      margin: 1px;
      span {
        font-size: 14px;
        color: #000;
      }
    }
  }
}
</style>