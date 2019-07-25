import request from '@/router/axios';
import {baseUrl} from '@/config/env';

export const getList = (current, size, params) => {
  return request({
    url: baseUrl + '/api/blade-system/param/list',
    method: 'get',
    params: {
      ...params,
      current,
      size,
    }
  })
}
export const remove = (ids) => {
  return request({
    url: baseUrl + '/api/blade-system/param/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: baseUrl + '/api/blade-system/param/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: baseUrl + '/api/blade-system/param/submit',
    method: 'post',
    data: row
  })
}
