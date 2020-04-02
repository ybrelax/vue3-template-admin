<template>
  <div>
    <el-scrollbar>
      <el-menu>
        <sidebar-item
          v-for="route in routes"
          :item="route"
          :is-collapse="isCollapse"
          :key="route.path"
        >
        </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { PermissionModule } from "@/store/modules/permission";

@Component({
  name: "SideBar"
})
export default class extends Vue {
  get routes() {
    return PermissionModule.routes;
  }
}
</script>
