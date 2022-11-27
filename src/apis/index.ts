import request from '@/utils/request';

// 用户登陆
export const login = (data: API.LoginParams): Promise<{ token: string }> => {
  return request({
    url: 'api/auth/login',
    method: 'post',
    data
  });
};

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: 'api/user/profile',
    method: 'post',
    data: {}
  });
};
