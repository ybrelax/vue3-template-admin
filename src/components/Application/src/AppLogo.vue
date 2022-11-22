<template>
  <div class="action" :class="getAppLogoClass" @click="goHome"> </div>
</template>

<script lang="ts" setup>
  import { useUserStore } from '@/store/modules/user';
  //   import { computed, unref } from 'vue';

  const userStore = useUserStore();

  function goHome() {
    // go(userStore);
  }

  function getAppLogoClass() {}
</script>
<style lang="less" scoped></style>
