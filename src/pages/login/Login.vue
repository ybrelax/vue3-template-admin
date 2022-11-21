<template>
  <div :class="prefixCls" class="relative w-full h-full px-4"> </div>
</template>
<script lang="ts" setup>
  import { useGlobSetting } from '@/hooks/setting';
  import { useDesign } from '@/hooks/web/useDesign';
  import { computed } from 'vue';

  const globSetting = useGlobSetting();
  const { prefixCls } = useDesign('login');

  console.log('globSetting:', globSetting);
</script>
