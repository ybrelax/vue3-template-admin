import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { RequestOptions } from '#/axios';
import axios from 'axios';
import { cloneDeep } from 'lodash-es';
import { notification } from 'ant-design-vue';
import { ContentTypeEnum, StatusEnum } from '@/enums/requestEnum';
import { getToken } from './auth';

interface CreateAxiosOptions extends AxiosRequestConfig {
  requestOptions?: RequestOptions;
}

const baseRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_GLOB_API_URL_PREFIX,
  timeout: 10 * 1000,
  headers: { 'Content-Type': ContentTypeEnum.JSON }
};

class AxiosRequest {
  private axiosInstance: AxiosInstance;
  private readonly options: CreateAxiosOptions;

  constructor(options: CreateAxiosOptions) {
    this.options = options;
    this.axiosInstance = axios.create(options);
    this.setupInterceptors();
  }

  // 启动相应拦截器
  private setupInterceptors() {
    // 请求拦截器
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        (config as Record<string, any>).headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  public request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    const conf: CreateAxiosOptions = cloneDeep(config);

    const { requestOptions } = this.options;
    const opt: RequestOptions = Object.assign({}, requestOptions, options);
    conf.requestOptions = opt;

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(conf)
        .then(({ data }) => {
          if (data.code === StatusEnum.SUCCESS) {
            resolve(data?.data);
          } else {
            notification.error({
              message: '错误提示',
              description: data.message || '网络异常，请检查您的网络连接是否正常!'
            });
            reject(new Error(data.message));
          }
        })
        .catch((res) => {
          notification.error({
            message: '错误提示',
            description: res.message || '网络异常，请检查您的网络连接是否正常!'
          });
          console.error(res);
          reject(res);
        });
    });
  }
}

const instance = new AxiosRequest(baseRequestConfig);

export default (config: AxiosRequestConfig, options?: RequestOptions) =>
  instance.request(config, options);
