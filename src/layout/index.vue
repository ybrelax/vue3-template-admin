<template>
  <section>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <!-- main content block -->

      <div class="app-main">
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "./components/Navbar/index.vue";

@Component({
  components: {
    Sidebar,
    Navbar
  }
})
export default class Layout extends Vue {
  get key() {
    return this.$route.path;
  }
}
</script>

<style lang="less" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  padding-top: 50px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: calc(100% - @sideBarWidth);
  transition: width 0.28s;
}
.main-container {
  position: relative;
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: @sideBarWidth;
}
.sidebar-container {
  width: @sideBarWidth !important;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  overflow: hidden;
}
</style>
