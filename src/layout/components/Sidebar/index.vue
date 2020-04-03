<template>
  <div class="sidebar-container">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
       background-color="#1f2d3d"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
      >
        <sidebar-item
          v-for="route in routes"
          :route="route"
          :key="route.path"
         :base-path="route.path"
        >
        </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PermissionModule } from "@/store/modules/permission";
import SidebarItem from "./SidebarItem.vue";
// import variables from "@/styles/variables.less";

@Component({
  name: "SideBar",
  components: {
    SidebarItem
  }
})
export default class SideBar extends Vue {
  get routes() {
    return PermissionModule.routes;
  }

  // get isCollapse() {
  //   return !this.sidebar.opened
  // }
}
</script>

<style lang="less" scoped>
.scrollbar-wrapper {
  overflow-x: hidden !important;
}

.el-scrollbar__view {
  height: 100%;
}

.el-scrollbar__bar {
  &.is-vertical {
    right: 0px;
  }

  &.is-horizontal {
    display: none;
  }
}
</style>

<style lang="less">
.el-menu {
  border: none;
  height: 100vh;
  background: @menuBg;
}
</style>
