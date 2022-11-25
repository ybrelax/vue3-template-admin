import { computed } from 'vue';
import { useAppStore } from '@/store/modules/app';

export function useMenuSetting() {
  const appStore = useAppStore();

  const getCollapsedShowTitle = computed(() => appStore.getMenuSetting?.collapsedShowTitle ?? '');

  return {
    getCollapsedShowTitle
  };
}
