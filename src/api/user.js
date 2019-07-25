import request from '@/router/axios';
import {baseUrl} from '@/config/env';

export const loginByUsername = (tenantCode, account, password, type) => request({
  url: baseUrl + '/api/blade-auth/token',
  method: 'post',
  params: {
    tenantCode,
    account,
    password,
    type
  }
})

export const getButtons = () => request({
  url: baseUrl + '/api/blade-system/menu/buttons',
  method: 'get'
});

export const getUserInfo = () => request({
  url: baseUrl + '/api/user/getUserInfo',
  method: 'get'
});

export const refeshToken = () => request({
  url: baseUrl + '/api/user/refesh',
  method: 'post'
})

export const getMenu = () => request({
  url: baseUrl + '/api/blade-system/menu/routes',
  method: 'get'
});

export const getTopMenu = () => request({
  url: baseUrl + '/api/user/getTopMenu',
  method: 'get'
});

export const sendLogs = (list) => request({
  url: baseUrl + '/api/user/logout',
  method: 'post',
  data: list
})

export const logout = () => request({
  url: baseUrl + '/api/user/logout',
  method: 'get'
})
