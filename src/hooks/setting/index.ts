import type { GlobConfig } from '#/config';
import { getAppEnvConfig } from '@/utils/env';
import { warn } from '@/utils/log';

export const useGlobSetting = () => {
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL
  } = getAppEnvConfig();
  if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn('VITE_GLOB_APP_SHORT_NAME 只能是字符；请修改后重新启动');
  }

  const global = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL
  };
  return global as Readonly<GlobConfig>;
};
