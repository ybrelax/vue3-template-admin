import request from "@/request";

export const getRoles = (params?: any) => (
    request({
        url: '/get/roles',
        method: 'get',
        params
    })
)