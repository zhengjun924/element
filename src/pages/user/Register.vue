<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="用户名"
        prop="userName"
      >
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="email"
      >
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="pass"
      >
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="checkPass"
      >
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <p class="login">
        <router-link to="login">返回登录</router-link>
      </p>
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
    const checkUsername = async (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (!/^[0-9a-zA-Z]{3,}$/.test(value)) {
        return callback(new Error("请填写除字符外至少三位的非中文用户名"));
      } else {
        const { data } = await this.$axios.post(
          "/zheng/user/register/userName",
          { userName: value }
        );
        callback();
      }
    };
    const checkEmail = async (rule, value, callback) => {
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
        const { data } = await this.$axios.post("/zheng/user/register/email", {
          email: value
        });
        if (data.msg == "已存在") {
          return callback(new Error("号码已存在"));
        } else {
          callback();
        }
      }
    };
    const checkPhone = async (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      if (!/^1[3456789]\d{9}$/.test(value)) {
        return callback(new Error("请填写正确的手机号"));
      } else {
        const { data } = await this.$axios.post("/zheng/user/register/phone", {
          phone: value
        });
        if (data.msg == "已存在") {
          return callback(new Error("号码已存在"));
        } else {
          callback();
        }
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      if (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,16}$/.test(value)) {
        callback(new Error("请输入非纯数字、纯字母、纯特殊字符8-16位的密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        email: "",
        phone: "",
        pass: ""
      },
      rules: {
        userName: [{ validator: checkUsername, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // await $axios.post('/zheng/user/register',this.ruleForm)
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  watch: {
    "ruleForm.userName"(newval) {}
  },
  mounted() {
    // alert(32453)
  }
};
</script>
<style scoped lang="less">
.container {
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
  .login {
    text-align: right;
    a,
    a:hover {
      text-decoration: none;
    }
  }
}
</style>
