<template>
  <div
    ref="screen"
    class="comingSoon"
  >
    <el-button
      type="primary"
      @click="handleAdd"
    >
      <i class="el-icon-plus"></i>
      添加
    </el-button>
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
            <el-form-item label="标题:">
              <span>{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="上映时间:">
              <span>{{ props.row.mainland_pubdate }}（中国大陆）</span>
            </el-form-item>
            <el-form-item label="主演:">
              <span>{{ props.row.casts }}</span>
            </el-form-item>
            <el-form-item label="电影 ID:">
              <span>{{ props.row.mid }}</span>
            </el-form-item>
            <el-form-item label="电影分类:">
              <span>{{ props.row.genres }}</span>
            </el-form-item>
            <el-form-item label="电影地址:">
              <a
                :href="props.row.alt"
                target="_blank"
              >{{ props.row.alt }}</a>
            </el-form-item>
            <el-form-item label="电影简介:">
              <span>{{ props.row.summary }}</span>
            </el-form-item>
            <el-form-item label="电影海报:">
              <el-image
                :lazy="true"
                :src="props.row.poster"
              ></el-image>
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
          <el-tooltip
            popper-class="item"
            effect="dark"
            :content="scope.row.summary"
            placement="left"
          >
            <el-button
              size="mini"
              type="primary"
            >
              <i class="el-icon-s-comment"></i>
              {{ scope.row.summary }}
            </el-button>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        prop="operation"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <i class="el-icon-edit-outline"></i>
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <ComingSoonMovieTemplate
      @close="closeDialogTable"
      :dialogTableVisible="dialogTableVisible"
      :formList="formData"
      :addState="addState"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ComingSoonMovieTemplate from "./ComingSoonMovieTemplate";
import "./index.less";

const addconsole = {
  created() {
    console.log(321412)
  },
}

export default {
  data() {
    return {
      isFullscreen: false,
      tableData: [],
      formData: {},
      dialogTableVisible: false,
      addState: true
    };
  },
  computed: {},
  components: {
    ComingSoonMovieTemplate
  },
  methods: {
    async getMovieList() {
      const { data } = await this.$get(`/zheng/amusement/movies/comingSoon`);
      this.tableData = data;
    },
    handleAdd() {
      this.dialogTableVisible = true;
      this.formData = {};
    },
    handleEdit(index, row) {
      const { mid } = row;
      this.$post("/zheng/amusement/movies/comingSoon/edit", {
        mid: mid
      })
        .then(response => {
          const { data } = response;
          const [res] = data;
          this.formData = res;
        })
        .catch(error => console.log(error));
      this.addState = false;
      this.dialogTableVisible = true;
    },
    async handleDelete(index, row) {
      const { mid } = row;
      const {
        data: { msg }
      } = await this.$post("/zheng/amusement/movies/comingSoon/delete", {
        mid: mid
      });

      this.$message({
        type: "success",
        message: msg
      });

      this.getMovieList();
    },
    closeDialogTable(bool) {
      this.dialogTableVisible = false;
    }
  },
  mounted() {
    this.getMovieList();
    console.log(this.$store.state);
  },
  mixmins:[addconsole]
};
</script>

