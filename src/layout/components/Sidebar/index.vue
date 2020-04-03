<template>
  <div>
    <!-- <el-scrollbar> -->
      <el-menu>
        <sidebar-item
          v-for="route in routes"
          :route="route"
          :key="route.path"
        >
        </sidebar-item>
      </el-menu>
    <!-- </el-scrollbar> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PermissionModule } from "@/store/modules/permission";
import SidebarItem from "./SidebarItem.vue";

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
}
</script>


<style lang="less" scoped>
.el-menu {
  width: 400px;
  
}
</style>