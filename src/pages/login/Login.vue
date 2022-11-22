<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">
    <div class="flex items-center absolute right-4 top-4"> </div>
    <span class="-enter-x xl:hidden"> </span>
  </div>
</template>
<script lang="ts" setup>
  import { useGlobSetting } from '@/hooks/setting';
  import { useDesign } from '@/hooks/web/useDesign';
  import { AppLogo } from '@/components/Application';
  import { computed } from 'vue';

  const globSetting = useGlobSetting();
  const { prefixCls } = useDesign('login');

  const title = computed(() => globSetting?.title ?? '');
</script>
