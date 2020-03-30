<template>
  <div class = "home">
    this is home page
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Dashboard extends Vue {

  mounted() {
    console.log('页面加载完成')
  }
}

</script>

