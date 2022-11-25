import { encrpt, decrpt } from 'crypto-js/aes';
import { parse } from 'crypto-js/enc-utf8';
import ECB from 'crypto-js/mode-ecb';
import pkcs7 from 'crypto-js/pad-pkcs7';
import UTF8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';

export interface EncriptionParams {
  key: string;
  iv: string;
}

export class AesEncryption {
  private key;
  private iv;

  constructor(opt: Partial<EncriptionParams> = {}) {
    const { key, iv } = opt;
    if (key) {
      this.key = parse(key);
    }
    if (iv) {
      this.iv = parse(iv);
    }
  }

  get getOptions() {
    return {
      mode: ECB,
      padding: pkcs7,
      iv: this.iv
    };
  }

  encryptByAES(cipherText: string) {
    return encrpt(cipherText, this.key, this.getOptions).toString();
  }

  decrptByAES(cipherText: string) {
    return decrpt(cipherText, this.key, this.getOptions).toString(UTF8);
  }
}

export function encryptByBase64(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64);
}

export function decryptByBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8);
}