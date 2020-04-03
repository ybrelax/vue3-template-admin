<template>
  <div v-if="!route.meta || !route.meta.hidden">
    <template v-if="theOnlyOneChild">
      <router-link :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="theOnlyOneChild.path">{{
          theOnlyOneChild.meta.title
        }}</el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="route.path">
      <span slot="title">{{ route.meta.title }}</span>
      <sidebar-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
        :base-path="route.path"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path';
import { Component, Prop, Vue } from "vue-property-decorator";
import { Route, RouteConfig } from "vue-router";

@Component({
  name: "SidebarItem"
})
export default class extends Vue {
  @Prop({ required: true }) private route!: RouteConfig;
  @Prop({ default: "" }) private basePath!: string;

  get showingChildNumber() { 
    if (this.route.children) {
      const showingChildNumber = this.route.children.filter(
        item => !(item.meta && item.meta.hidden)
      );
      return showingChildNumber.length;
    } else {
      return 0;
    }
  }

  get theOnlyOneChild() {
    if (this.showingChildNumber > 1) {
      return false;
    }
    if (this.route.children) {
      for (let child of this.route.children) {
        if (!child.meta || !child.meta.hidden) {
          return child;
        }
      }
    }
    return { ...this.route };
  }

  private resolvePath(routePath: string) {
    return path.resolve(this.basePath, routePath)
  }
}
</script>

<style lang="less">
.el-submenu.is-active > .el-submenu__title {
  color: @subMenuActiveText !important;
}

.el-submenu > .el-submenu__title,
.el-submenu .el-menu-item {
  min-width: @sideBarWidth !important;
  background-color: @subMenuBg !important;

  &:hover {
    background-color: @subMenuHover !important;
  }
}
</style>
