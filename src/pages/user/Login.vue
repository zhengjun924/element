<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-position="left"
      status-icon
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="邮箱"
        prop="email"
      >
        <el-input
          type="email"
          v-model="ruleForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="pass"
      >
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="userOperate">
        <router-link to="forgot">忘记密码</router-link>
        <router-link to="register">用户注册</router-link>
      </div>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      if (
        !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          value
        )
      ) {
        return callback(new Error("请填写正确的邮箱"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      if (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,16}$/.test(value)) {
        callback(new Error("请输入非纯数字、纯字母、纯特殊字符8-16位的密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const {
            data: { token, status, msg }
          } = await this.$post("/zheng/user/login", this.ruleForm);
          
          if (status === 1) {
            window.sessionStorage.setItem("token", token);
            this.$router.replace({
              path: "/welcome"
            });
            this.$message({
              message: msg,
              type: "success"
            });
          } else {
            this.$message({
              message: msg,
              type: "error"
            });
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped lang="less">
.container {
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  .userOperate {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    a,
    a:hover {
      text-decoration: none;
    }
  }
}
</style>
