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
