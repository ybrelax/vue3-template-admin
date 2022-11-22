import { cacheCipher } from '@/settings/encryptionSetting';
import { AesEncryption } from '../cipher';

export const createStorage = ({
  prefixKey = '',
  storage = sessionStorage,
  key = cacheCipher.key,
  iv = cacheCipher.iv,
  timeout = null,
  hasEncrypt = true
}) => {
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
    }
  };
};
