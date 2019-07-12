<template>
  <el-row>
    <el-col :span="8">
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col
      :span="8"
      :offset="8"
    >
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  watch: {
    isCollapse() {
      this.$emit("getCollapse", this.isCollapse);
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
</style>