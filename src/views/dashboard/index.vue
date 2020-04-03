<template>
  <div class="home">
    this is home page
    <!-- 当前角色名字：{{currRole.username}} -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getRoles } from "@/apis/roles";

@Component
export default class Dashboard extends Vue {
  private name:string = '2343';

  mounted() {
    this.getRoleInfo();
  }
 

  async getRoleInfo() {
    // const currRole =  await getRoles();
  }

}
</script>
