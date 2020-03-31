
import { BASE_URL } from '@/config/index'
import {AxiosRequestConfig, AxiosError} from 'axios';
// 请求成功拦截
export function requestSuccessFunc(requestObj:AxiosRequestConfig) {
  requestObj.url = BASE_URL + requestObj.url;
  return requestObj;
}

// 请求失败拦截
export function requestFailFunc(requestError:AxiosError) {
  return Promise.reject(requestError);
}

export default {
  requestSuccessFunc,
  requestFailFunc
}