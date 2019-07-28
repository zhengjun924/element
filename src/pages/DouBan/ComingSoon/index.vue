<template>
  <div
    ref="screen"
    class="comingSoon"
  >
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form
            label-position="left"
            inline
            class="demo-table-expand"
          >
            <el-form-item label="标题">
              <span>{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="所属店铺">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="主演">
              <span>{{ props.row.casts }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.summary }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="标题"
        prop="title"
      >
      </el-table-column>
      <el-table-column
        label="主演"
        prop="casts"
      >
      </el-table-column>
      <el-table-column
        label="描述"
        prop="summary"
        width="60"
      >
        <template slot-scope="scope">
          <el-popover
            trigger="hover"
            placement="top"
            width="300"
          >
            <p class="des">{{ scope.row.summary }}</p>
            <div
              slot="reference"
              class="name-wrapper"
            >
              <el-tag
                class="summary"
                size="medium"
              >{{ scope.row.summary }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        prop="operation"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <ComingSoonMovieTemplate
      @close="closeDialogTable"
      @sure="handleSumit"
      :dialogTableVisible="dialogTableVisible"
    />
  </div>
</template>

<script>
import ComingSoonMovieTemplate from "./ComingSoonMovieTemplate";
import "./index.less";

export default {
  data() {
    return {
      isFullscreen: false,
      tableData: [],
      dialogTableVisible: false
    };
  },
  components: {
    ComingSoonMovieTemplate
  },
  methods: {
    async getMovieList() {
      const { data } = await this.$axios.get(
        `/zheng/amusement/movies/comingSoon`
      );
      this.tableData = data;
    },
    handleEdit(index, row) {
      this.dialogTableVisible = true;
    },
    async handleDelete(index, row) {
      const { mid } = row;
      const {
        data: { msg }
      } = await this.$axios.post("/zheng/amusement/movies/comingSoon/delete", {
        mid: mid
      });
      
      this.$message({
        type: "success",
        message: msg
      });

      this.getMovieList();
    },
    closeDialogTable(bool) {
      console.log(bool);
      this.dialogTableVisible = false;
    },
    handleSumit(form) {
      this.dialogTableVisible = false;
      console.log(form);
    }
  },
  mounted() {
    this.getMovieList();
  }
};
</script>
<style lang="less" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.des {
  text-indent: 2em;
}
.summary {
  width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
