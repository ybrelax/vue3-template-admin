<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown>
        <span class="el-dropdown-link">
          个人<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Navbar"
})
export default class extends Vue {}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;

  .right-menu {
    float: right;
    line-height: 50px;
    height: 100%;
  }
}
</style>
