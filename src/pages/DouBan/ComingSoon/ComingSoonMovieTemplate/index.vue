<template>
  <div>
    <el-dialog
      :visible.sync="dialogTableVisible"
      :show-close="false"
      :close-on-click-modal="false"
      @keyup.enter.native="handleEsc"
    >
      <el-form
        :model="formList"
        class="form"
        :rules="rules"
        ref="movieForm"
      >
        <el-upload
          action="/zheng/userInfo/headSculpture"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <el-avatar
            :size="60"
            fit="contain"
            v-if="formList.poster"
          >
            <img v-lazy="formList.poster" />
          </el-avatar>
          <el-avatar
            :size="60"
            fit="contain"
            v-else
          >
            <img src="/zheng/public/images/user/empty.png" />
          </el-avatar>
        </el-upload>
        <el-form-item
          label="标题:"
          prop="title"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="formList.title"
            autocomplete="off"
            placeholder="请输入标题"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="主演:"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="formList.casts"
            autocomplete="off"
            placeholder="请输入主演"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="电影分类:"
          prop="genres"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="formList.genres"
            autocomplete="off"
            placeholder="请输入分类"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="上映时间:"
          prop="mainland_pubdate"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="formList.mainland_pubdate"
            type="date"
            placeholder="请选择日期"
            value-format="yyyy-MM-dd"
          >
            >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="电影 ID:"
          prop="mid"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="formList.mid"
            autocomplete="off"
            placeholder="请输入id"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="电影地址:"
          prop="alt"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="formList.alt"
            autocomplete="off"
            placeholder="请输入地址"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="电影简介:"
          prop="summary"
          :label-width="formLabelWidth"
        >
          <el-input
            type="textarea"
            placeholder="请输入简介"
            :autosize="{ minRows: 1, maxRows: 6}"
            v-model="formList.summary"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="handleCencel"
        >取 消</el-button>
        <el-button
          v-if="addState"
          type="primary"
          @click="handleAdd('movieForm')"
        >提 交</el-button>
        <el-button
          v-else
          type="primary"
          @click="handleUpdate('movieForm')"
        >提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelWidth: "120px",
      rules: {
        title: [{ required: true, message: "请输入电影标题", trigger: "blur" }],
        genres: [
          {
            required: true,
            message: "请输入电影分类",
            trigger: "blur",
            type: "string"
          }
        ],
        mainland_pubdate: [
          {
            required: true,
            message: "请选择上映时间",
            trigger: "blur"
          }
        ],
        mid: [{ required: true, message: "请输入电影id", trigger: "blur" }],
        alt: [
          {
            required: true,
            message: "请输入电影地址",
            trigger: "blur"
          },
          {
            required: true,
            message: "请输入有效的地址",
            trigger: "blur",
            type: "url"
          }
        ],
        summary: [
          { required: true, message: "请输入电影简介", trigger: "blur" }
        ]
      }
    };
  },
  props: {
    dialogTableVisible: {
      type: Boolean,
      default: false
    },
    addState: {
      type: Boolean,
      default: true
    },
    formList: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleCencel() {
      this.$emit("close", this.dialogTableVisible);
    },
    handleAdd(movieForm) {
      this.$refs[movieForm].validate(async valid => {
        if (valid) {
          const { data } = await this.$axios.post(
            "/zheng/amusement/movies/comingSoon/add",
            this.formList
          );
          this.$emit("close", this.dialogTableVisible);
        } else {
          console.error("error submit!!");
          return false;
        }
      });
    },
    handleUpdate(movieForm) {
      this.$refs[movieForm].validate(async valid => {
        if (valid) {
          const { data } = await this.$axios.post(
            "/zheng/amusement/movies/comingSoon/update",
            this.formList
          );
          this.$emit("close", this.dialogTableVisible);
        } else {
          console.error("error submit!!");
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    keydown() {
      let This = this; //存一下this
      document.onkeydown = function(event) {
        let e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 27) {
          This.$emit("close", This.dialogTableVisible);
        }
      };
    }
  },
  created() {
    this.keydown();
  }
};
</script>

<style lang="less" scoped>
.form {
  margin-top: -40px;
  text-align: center;
  .el-avatar {
    margin-bottom: 10px;
  }
  .el-input {
    width: 100% !important;
  }
}
</style>