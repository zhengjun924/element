<template>
  <div ref="screen" class="comingSoon">
    <el-input
      placeholder="请输入城市"
      v-model="city"
      clearable
    >
    </el-input>
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
          <div
            class="watchMovie"
            @click="goWatchMovie(item.title)"
          >
            <img
              src="@/assets/watch.png"
              alt=""
            >
          </div>
          <div class="movieDetail">
            <p>电影名：<span>{{item.title}}</span></p>
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
  </div>

</template>

<script>
import screenfull from "screenfull";
import "./index.less";

export default {
  data() {
    return {
      city: sessionStorage.getItem("city"),
      movieList: [],
      isFullscreen: false
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
    },
    goWatchMovie(movie) {
      alert(movie);
    },
    click() {
      // 如果不允许进入全屏，发出不允许提示 浏览器不能全屏
      if (!screenfull.enabled) {
        this.$message({
          message: "浏览器不能全屏",
          type: "warning"
        });
        return false;
      }
      // screenfull.toggle();
      screenfull.request(this.$refs.screen);
      this.$message({
        message: "全屏啦",
        type: "success"
      });
    }
  },
  mounted() {
    this.getMovieList();
    // this.click();
    console.log(this.$refs.screen)
  }
};
</script>