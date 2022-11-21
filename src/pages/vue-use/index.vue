<template>
    <div class="positon"> {{ x }} x {{ y }} </div>
</template>

<script lang="ts" setup>
    import { useMouse } from '@vueuse/core';
    const { x, y } = useMouse();
</script>
<style lang="less">
    div {
        color: red;
    }
    .position {
        color: 'grey';
    }
</style>
