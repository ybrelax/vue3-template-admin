<script setup lang="ts">
    import { useUserStore } from '@/store/user';
    const userStore = useUserStore();
</script>

<template>
    <h1>username: {{ userStore.name }}</h1>
</template>

<style scoped>
    .read-the-docs {
        color: #888;
    }
</style>
