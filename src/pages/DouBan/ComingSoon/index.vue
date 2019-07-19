<template>
  <div>
    <el-input
      placeholder="请输入城市"
      v-model="city"
      clearable
    >
    </el-input>
    <el-row :gutter="20">
      <el-col
        :span="4"
        v-for="(item,key) in movieList"
        :key="key"
      >
        <el-card>
          <el-image
            fit="fit"
            :src="item.images.small"
          ></el-image>
          <div style="padding: 5 10px;">
            <p>电影名：{{item.title}}</p>
            <p>电影类型：{{item.genres}}</p>
            <p>主演:
              <span
                v-for="(cast,key) in item.casts"
                :key="key"
              >
                {{cast.name}}
              </span>
            </p>
            <!-- <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button
                type="text"
                class="button"
              >操作按钮</el-button>
            </div> -->
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data() {
    return {
      city: sessionStorage.getItem('city'),
      movieList: []
    };
  },
  methods: {
    async getMovieList() {
      const {
        data: { subjects }
      } = await this.$axios.get(
        `/zheng/amusement/movies/comingSoon?city=${this.city}`
      );
      this.movieList = subjects;
    }
  },
  mounted() {
    this.getMovieList();
  }
};
</script>

<style lang="less" scoped>
p {
  margin: 0;
}

.el-input {
  width: 120px;
  margin-bottom: 10px;
}
</style>