

import {AxiosResponse, AxiosError} from 'axios';
import { Message } from 'element-ui';

// 响应请求拦截
export function responseSuccessFunc(response:AxiosResponse) {
  // 对响应数据做点什么
  const {data} = response;
  if (data.code === -1) {
    Message.error(data.data.message);
    return {};
  }
  console.log('response:', response.data)
  return response.data;
}

// 响应失败拦截
export function responseFailFunc(err:AxiosError) {
  return Promise.reject(err);
}
export default {
  responseSuccessFunc,
  responseFailFunc,
}
