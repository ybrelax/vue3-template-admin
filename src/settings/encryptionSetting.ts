import { isDevMode } from '@/utils/env';

// 默认缓存时间
export const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

// aes 加密密钥
export const cacheCipher = {
  key: '_11111000001111@',
  iv: '@11111000001111_'
};

// 是否开启缓存加密
export const enableStorageEncryption = !isDevMode();
