<template>
  <section> 
    
    <keep-alive>
      <router-view :key="key"/>
    </keep-alive>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {

  get key() {
    return this.$route.path;
  }
}
</script>