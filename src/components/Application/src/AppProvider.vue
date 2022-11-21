<script lang="ts">
  import { defineComponent, ref, toRefs } from 'vue';
  import { prefixCls } from '@/settings/designSetting';
  import { createAppProviderContext } from './useAppContext';

  const props = {
    /**
     * class style prefix
     */
    prefixCls: { type: String, default: prefixCls }
  };

  export default defineComponent({
    name: 'AppProvider',
    inheritAttrs: false,
    props,
    setup(props, { slots }) {
      const isMobile = ref(false);

      // const isSetState = ref(false);
      // const appStore = useApp

      const { prefixCls } = toRefs(props);

      // inject values
      createAppProviderContext({ prefixCls, isMobile });

      return () => slots.default?.();
    }
  });
</script>
