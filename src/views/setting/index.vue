<template>
  <div class="home">
    设置中心 - {{this.$route.meta.title}}
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
  }

}
</script>
