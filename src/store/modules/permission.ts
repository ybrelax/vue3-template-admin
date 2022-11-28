import type { AppRouteRecordRaw, Menu } from '@/router/types';

import { defineStore } from 'pinia';
import { useUserStore } from './user';
import { useAppStore } from './app';
import { toRaw } from 'vue';

import projectSetting from '@/settings/projectSetting';
import { PageEnum } from '@/enums/pageEnum';
import { PermissionModeEnum } from '@/enums/appEnum';
import { filter } from '@/utils/helper/treeHelper';
import { asyncRoutes } from '@/router';
import { flatMultiLevelRoutes } from '@/router/helper/routeHelper';
import { transformMenuModule } from '@/router/helper/menuHelper';

interface PermissionState {
  // 权限代码列表
  permCodeList: string[] | number[];
  // 路由动态添加
  isDynamicAddedRoute: boolean;
  // 触发菜单更新
  lastBuildMenuTime: number;
  // 后台菜单列表
  backMenuList: Menu[];
  // 菜单列表
  frontMenuList: Menu[];
}

export const usePermissionStore = defineStore({
  id: 'app-permission',
  state: (): PermissionState => ({
    permCodeList: [],
    isDynamicAddedRoute: false,
    lastBuildMenuTime: 0,
    backMenuList: [],
    frontMenuList: []
  }),
  getters: {
    getPermCodeList(): string[] | number[] {
      return this.permCodeList;
    },
    getBackMenuList(): Menu[] {
      return this.backMenuList;
    },
    getFrontMenuList(): Menu[] {
      return this.frontMenuList;
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    }
  },
  actions: {
    setPermCodeList(codeList: string[]) {
      this.permCodeList = codeList;
    },
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
      list?.length > 0 && this.setLastBuildMenuTime();
    },
    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },
    setFrontMenuList(list: Menu[]) {
      this.frontMenuList = list;
    },
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    resetState(): void {
      this.isDynamicAddedRoute = false;
      this.permCodeList = [];
      this.backMenuList = [];
      this.lastBuildMenuTime = 0;
    },
    // 构建路由
    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const userStore = useUserStore();
      const appStore = useAppStore();

      let routes: AppRouteRecordRaw[] = [];
      const roleList = toRaw(userStore.getRoleList) || [];
      const { permissionMode = projectSetting.permissionMode } = appStore.getProjectConfig;

      // 路由器过滤器
      const routerFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        // 抽出角色
        const { roles } = meta || {};
        if (!roles) return true;
        // 进行权限判断
        return roleList.some((role) => roles.includes(role));
      };

      const routeRemoveIgnoreFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        const { ignoreAuth } = meta || {};
        return !ignoreAuth;
      };

      // 根据首页path, 修正routes中的affix
      const patchHomeAffix = (routes: AppRouteRecordRaw[]) => {
        if (!routes || routes.length === 0) return;
        let homePath: string = userStore.getUserInfo.homePath || PageEnum.BASE_HOME;

        function patcher(routes: AppRouteRecordRaw[], parentPath = '') {
          if (parentPath) parentPath = parentPath + '/';
          routes.forEach((route: AppRouteRecordRaw) => {
            const { path, children, redirect } = route;
            const currentPath = path.startsWith('/') ? path : parentPath + path;
            if (currentPath === homePath) {
              if (redirect) {
                homePath = route.redirect! as string;
              } else {
                route.meta = Object.assign({}, route.meta, { affix: true });
                throw new Error('end');
              }
            }
            children && children.length > 0 && patcher(children, currentPath);
          });
        }
        try {
          patcher(routes);
        } catch (e) {}
      };

      switch (permissionMode) {
        // 角色权限
        case PermissionModeEnum.ROLE:
          // 对路由进行过滤
          routes = filter(asyncRoutes, routerFilter);
          // 将多级路由转换为 2 级路由
          routes = flatMultiLevelRoutes(routes);
          break;
        case PermissionModeEnum.ROUTE_MAPPING:
          // 对路由进行过滤
          routes = filter(asyncRoutes, routerFilter);
          // 将路由转换成菜单
          const menuList = transformMenuModule(routes, true);
      }
      return routes;
    }
  }
});
