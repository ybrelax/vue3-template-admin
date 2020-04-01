import request from "@/request";

export const login = (data: any) =>
  request({
    url: "/users/login",
    method: "post",
    data
  });
