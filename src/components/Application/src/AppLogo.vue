<template>
  <div class="action" :class="getAppLogoClass" @click="goHome">
    <img src="../../../assets/images/logo.svg" />
    <div v-show="showTitle" class="m-2 truncate md:opacity-100" :class="getTitleClass">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useGlobSetting } from '@/hooks/setting';
  import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useGo } from '@/hooks/web/usePage';
  import { PageEnum } from '@/enums/pageEnum';
  import { useUserStore } from '@/store/modules/user';

  const props = defineProps({
    theme: { type: String, validator: (v: string) => ['light', 'dark'].includes(v) },
    showTitle: { type: Boolean, default: true },
    alwaysShowTitle: { type: Boolean }
  });

  const { prefixCls } = useDesign('app-logo');
  const userStore = useUserStore();
  const { title } = useGlobSetting();
  const { getCollapsedShowTitle } = useMenuSetting();

  const go = useGo();

  const getAppLogoClass = computed(() => [
    prefixCls,
    props.theme,
    { 'collapsed-show-title': unref(getCollapsedShowTitle) }
  ]);

  const getTitleClass = computed(() => [
    `${prefixCls}__title`,
    {
      'xs:opacity-0': !props.alwaysShowTitle
    }
  ]);

  function goHome() {
    go(userStore.getUserInfo.homePath || PageEnum.BASE_HOME);
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: pointer;
    transition: all 0.2s ease;

    &.light {
      border-bottom: 1px solid @border-color-base;
    }
    &.collabpsed-show-title {
      padding-left: 20px;
    }
    &.light &__title {
      color: @primary-color;
    }
    &.dark &__title {
      color: @white;
    }
    &__title {
      font-size: 16px;
      font-weight: 700;
      transition: all 0.5s;
      line-height: normal;
    }
  }
</style>
