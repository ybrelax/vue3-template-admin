import type { GlobEnvConfig } from '#/config';
import pkg from '../../package.json';
import { getConfigFileName } from '../../build/getConfigFileName';
import { warn } from './log';

export function getCommonStoragePrefix() {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppEnvConfig();
  return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv}`.toUpperCase();
}

export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase();
}

export const getAppEnvConfig = () => {
  const ENV_NAME = getConfigFileName(import.meta.env);

  const ENV = (import.meta.env.DEV
    ? (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfig;

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL
  } = ENV;

  if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn('VITE_GLOB_APP_SHORT_NAME 只能是字符；请修改后重新启动');
  }

  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL
  };
};

/**
 * 判断是否为开发环境
 * @returns
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * 获取环境变量
 * @returns
 */
export function getEnv() {
  return import.meta.env.MODE;
}
