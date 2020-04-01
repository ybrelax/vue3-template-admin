<template>
  <div class="home">
    <div class="login">
      <div class="title">登录管理</div>
      <div class="form">
        <el-form
          :model="ruleForm"
          :rules="loginRules"
          ref="ruleForm"
          autocomplete="on"
        >
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
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              native-type="submit"
              @click="submitForm('ruleForm')"
              :loading="loading"
              :disabled="loading"
              >{{ loading ? "登陆中" : "确认登录" }}</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class extends Vue {
  private loading = false;

  private loginForm = {
    username: '123456',
    password: '123456'
  }
  private loginRules = {
    username: [{ required: true, message: "帐号不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
  };
  mounted() {}
}
</script>

<style lang="less" scoped></style>
