<template>
  <div>
    <el-dialog
      :visible.sync="dialogTableVisible"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form
        :model="form"
        class="form"
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
            v-if="form.poster"
          >
            <img v-lazy="form.poster" />
          </el-avatar>
          <i
            v-else
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-upload>
        <el-form-item
          label="标题:"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="主演:"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.casts"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="电影分类:"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.genres"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="上映时间:"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="form.mainland_pubdate"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="电影 ID:"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.mid"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="电影地址:"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.alt"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="电影简介:"
          :label-width="formLabelWidth"
        >
          <el-input
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 6}"
            v-model="form.summary"
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
          type="primary"
          @click="handleSure"
        >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      formLabelWidth: "120px",
      childrenMessage: ""
    };
  },
  props: {
    dialogTableVisible: {
      type: Boolean,
      default: false
    },
    formList: {
      type: Object
    }
  },
  methods: {
    handleCencel() {
      this.$emit("close", this.dialogTableVisible);
    },
    handleSure() {
      this.$emit("sure", this.form);
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
    }
  },
  watch: {
    formList(movieInfo) {
      this.form = movieInfo;
    }
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