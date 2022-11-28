import { PermissionModeEnum } from '@/enums/appEnum';
import { CacheTypeEnum } from '@/enums/cacheEnum';

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  siderHidden: boolean;
  canDrag: boolean;
  show: boolean;
  hidden: boolean;
  split: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  topMenuAlign: 'start' | 'center' | 'end';
  trigger: TriggerEnum;
  accordion: boolean;
  closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}

export interface GlobConfig {
  title: string;
  apiUrl: string;
  shortName: string;
  uploadUrl?: string;
  urlPrefix?: string;
}

export interface GlobEnvConfig {
  // 标题
  VITE_GLOB_APP_TITLE: string;
  // api url
  VITE_GLOB_API_URL: string;
  // api url 前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // 项目简称
  VITE_GLOB_APP_SHORT_NAME: string;
  // 上传地址
  VITE_GLOB_UPLOAD_URL?: string;
}

export interface ProjectConfig {
  // 权限缓存类型
  permissionCacheType: CacheTypeEnum;
  // 菜单设置
  menuSetting: MenuSetting;
  // 权限模式
  permissionMode: PermissionModeEnum
}
