import { PermissionModeEnum } from '@/enums/appEnum';
import { CacheTypeEnum } from '@/enums/cacheEnum';

const setting = {
  permissionCacheType: CacheTypeEnum.LOCAL,

  // 权限模式
  permissionMode: PermissionModeEnum.ROUTE_MAPPING
};

export default setting;
