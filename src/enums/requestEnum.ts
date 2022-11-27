export enum ContentTypeEnum {
  JSON = 'application/json;charset=UTF-8',
  FORM_DATA = 'multipart/form-data;charset=UTF-8'
}

export enum StatusEnum {
  SUCCESS = 200,
  // 公共错误码
  COMMON = 10001,

  // 特殊异常码
  TOKEN_INVALID = 10002,

  // 禁止访问
  PERMISSION_DISABLED = 1003,

  // 用户已冻结
  USER_DISABLED = 1004,

  // 未授权
  UNAUTHORIZED = -1
}
