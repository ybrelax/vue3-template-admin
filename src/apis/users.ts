import request from "@/request";

export const login = (data: any) =>
  request({
    url:   "/users/login",
    method: "post",
    data
  });
export const getUserInfo = (data: any) =>
  request({
    url:  "/get/userInfo",
    method: "post",
    data
  });