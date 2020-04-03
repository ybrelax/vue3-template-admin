<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown class="right-menu-item">
        <span class="el-dropdown-link">
          个人<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item  @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModule } from "../../../store/modules/user";

@Component({
  name: "Navbar"
})
export default class extends Vue {
  private async logout() {
    await UserModule.LogOut();
    this.$router.push(`/login?redirect=${this.$route.fullPath}`);
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .right-menu {
    float: right;
    padding-right: 20px;
    line-height: 50px;
    height: 100%;
  }
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
  }
}
</style>
