<template>
  <div class="home">
    设置中心
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { getRoles } from "@/apis/roles";

@Component
export default class Dashboard extends Vue {
  private name:string = '2343';

  mounted() {
    console.log("页面加载完成");
    this.getRoleInfo();
  }
 

  async getRoleInfo() {
    const currRole =  await getRoles();
    const f = async () => {
      return "hello world";
    };

    f().then(v => console.log(v));
    console.log(12);
    const info  = await fetch('http://localhost:8080/get/roles').then((res:any) => res.json());
     console.log("currRole:", currRole, info);
  }

}
</script>
