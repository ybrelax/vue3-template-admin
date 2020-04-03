<template>
  <div v-if="!route.meta">
    {{theOnlyOneChild}}
    <template v-if="theOnlyOneChild">
      <el-menu-item :index="route.meta.path">{{route.meta.title}}</el-menu-item>
    </template>
    <el-submenu v-else>
      <span slot="title">{{ route.meta.title }}</span>
      <sidebar-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Route, RouteConfig } from "vue-router";

@Component({
  name: "SidebarItem"
})
export default class extends Vue {
  @Prop({ required: true }) private route!: RouteConfig;

  mounted() {
    console.log("router123:", this.route.path, this.route.meta , this.theOnlyOneChild);
  }

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
      console.log('这里')
      return false;
    }
    if (this.route.children) {
      for (let child of this.route.children) {
        console.log('xxx:',)
        if (!child.meta || !child.meta.hidden) {
          console.log("child:", child);
          return child;
        }
      }
    }
    return { ...this.route, path: "" };
  }
}
</script>
