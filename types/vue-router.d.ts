import { RoleEnum } from '@/enums/roleEnum';

export {};

declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    orderNo?: number;
    title: string;
    dynamicLevel?: number;
    realPath?: string;
    ignoreAuth?: boolean;
    roles?: RoleEnum[];
    affix?: boolean;
    icon?: string;
  }
}
