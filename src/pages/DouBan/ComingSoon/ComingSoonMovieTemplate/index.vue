<template>
  <div>
    <el-dialog
      :visible.sync="dialogTableVisible"
      :show-close="false"
    >
      <el-form :model="form">
        <el-form-item
          label="标题"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="主演"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.title"
            autocomplete="off"
          ></el-input>
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
      formLabelWidth: "120px",
      childrenMessage: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  props: {
    dialogTableVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    frontPoints(newValue, oldValue) {
      console.log(newValue);
    }
  },
  methods: {
    handleCencel() {
      this.$emit("close", this.dialogTableVisible);
    },
    handleSure() {
      this.$emit("sure", this.form);
    }
  },
  created() {
    // console.log(this.dialogTableVisible);
  }
};
</script>

<style lang="scss" scoped>
</style>