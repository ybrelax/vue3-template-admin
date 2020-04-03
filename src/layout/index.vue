<template>
  <section> 
    <side-bar></side-bar>
    <keep-alive>
      <router-view :key="key"/>
    </keep-alive>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from "./components/Sidebar/index.vue";

@Component({
  components: {
    SideBar
  }
})
export default class Layout extends Vue {

  get key() {
    return this.$route.path;
  }
}
</script>