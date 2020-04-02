<template>
  <div>
    <template>
      <el-menu-item index="1-1">{{ item.meta.title }}</el-menu-item>
    </template>
    <el-submenu v-if="item.children">
      <template > </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Route, RouteConfig } from "vue-router";

export default class extends Vue {
  @Prop({ required: true }) private item!: RouteConfig;
}
</script>
