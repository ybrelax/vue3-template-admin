import { cacheCipher } from '@/settings/encryptionSetting';
import { AesEncryption, EncriptionParams } from '../cipher';
import { isNullOrUnDef } from '../is';

export interface CreateStorageParams extends EncriptionParams {
  prefixKey: string;
  storage: Storage;
  hasEncrypt: boolean;
  timeout?: Nullable<number>;
}

export const createStorage = ({
  prefixKey = '',
  storage = sessionStorage,
  key = cacheCipher.key,
  iv = cacheCipher.iv,
  timeout = null,
  hasEncrypt = true
}: Partial<CreateStorageParams>) => {
  if (hasEncrypt && [key.length, iv.length].some((item) => item !== 16)) {
    throw new Error('当[hasEncrypt]为true时，[key][iv]必须是16位字节');
  }

  const encrption = new AesEncryption({ key, iv });

  const WebStorage = class WebStorage {
    private storage: Storage;
    private prefixKey?: string;
    private encryption: AesEncryption;
    private hasEncrypt: boolean;

    constructor() {
      this.storage = storage;
      this.prefixKey = prefixKey;
      this.encryption = encrption;
      this.hasEncrypt = hasEncrypt;
    }

    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase();
    }

    /**
     * 设置缓存
     * @param key 键
     * @param value 值
     * @param expire 过期时长
     */
    set(key: string, value: any, expire: number | null = timeout) {
      const stringData = JSON.stringify({
        value,
        time: Date.now(),
        expire: !isNullOrUnDef(expire) ? new Date().getTime() + expire * 1000 : null
      });
      const stringifyValue = this.hasEncrypt
        ? this.encryption.encryptByAES(stringData)
        : stringData;
      this.storage.setItem(this.getKey(key), stringifyValue);
    }

    /**
     * 获取缓存
     * @param key
     * @param def 默认值
     * @returns
     */
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key));
      if (!val) return def;

      try {
        const decVal = this.hasEncrypt ? this.encryption.decrptByAES(val) : val;
        const data = JSON.parse(decVal);
        const { value, expire } = data;
        if (isNullOrUnDef(expire) || expire >= new Date().getTime()) {
          return value;
        }
        this.remove(key);
      } catch (e) {
        return def;
      }
    }

    // 删除缓存
    remove(key: string) {
      this.storage.removeItem(this.getKey(key));
    }

    // 清空缓存
    clear(): void {
      this.storage.clear();
    }
  };

  return new WebStorage();
};
