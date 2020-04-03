<template>
  <div class="home">
    加载表格
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getRoles } from "@/apis/roles";

@Component
export default class Dashboard extends Vue {
  private name:string = '2343333';

  mounted() {
    this.getRoleInfo();
  }
 

  async getRoleInfo() {

  }

}
</script>
