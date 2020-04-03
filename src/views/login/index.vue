<template>
  <div class="container">
    <el-form
      class="login-form raduis"
      :model="loginForm"
      :rules="loginRules"
      ref="loginForm"
      autocomplete="on"
    >
      <div class="title">
        Hello
      </div>
      <el-form-item prop="username">
        <el-input
          name="username"
          type="text"
          placeholder="请输入登录帐号"
          prefix-icon="el-icon-user"
          size="medium"
          maxlength="30"
          v-model="loginForm.username"
          autocomplete="on"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          name="password"
          type="password"
          placeholder="请输入登录密码"
          prefix-icon="el-icon-lock"
          size="medium"
          minlength="6"
          maxlength="30"
          autocomplete="on"
          v-model="loginForm.password"
        ></el-input>
      </el-form-item>
      <el-form-item class="text-center">
        <el-button
          type="primary"
          class="submit"
          native-type="submit"
          @click="handleLogin"
          :loading="loading"
          :disabled="loading"
          >{{ loading ? "登陆中" : "确认登录" }}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";
import { ElForm } from "element-ui/types/form";

@Component
export default class extends Vue {
  private loading = false;

  private loginForm = {
    username: "admin",
    password: "123456"
  };
  private loginRules = {
    username: [{ required: true, message: "帐号不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
  };
  mounted() {}

  private handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true;

        await UserModule.Login(this.loginForm);
        this.$router.push({
          path: "/"
        });
        this.loading = false;
      }
    });
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("../../assets/login-bg.png");
  background-size: cover;
}
.login-form {
  width: 300px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.3);
  .title {
    margin: 20px 0;
    text-align: center;
  }
  .submit {
    width: 100%;
  }
}
</style>
