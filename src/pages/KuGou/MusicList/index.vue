<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          height="200px"
        >    
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicList: []
    };
  },
  methods: {
    async getMusicList() {
      const { data: res } = await this.$get("/zheng/amusement/music/new");
      const { data: musicList } = JSON.parse(res);
      this.musicList = musicList;
      console.log(musicList);
    }
  },
  mounted() {
    this.getMusicList();
    this.$layer.alert("找不到对象！");
  }
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>