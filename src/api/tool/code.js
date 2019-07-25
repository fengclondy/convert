import request from '@/router/axios';
import {baseUrl} from '@/config/env';

export const getList = (current, size) => {
  return request({
    url: baseUrl + '/api/blade-develop/code/list',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

export const build = (ids) => {
  return request({
    url: baseUrl + '/api/blade-develop/code/gen-code',
    method: 'post',
    params: {
      ids,
      system: 'saber'
    }
  })
}
export const remove = (ids) => {
  return request({
    url: baseUrl + '/api/blade-develop/code/remove',
    method: 'post',
    params: {
      ids,
    }
  })
}

export const add = (row) => {
  return request({
    url: baseUrl + '/api/blade-develop/code/submit',
    method: 'post',
    data: row
  })
}

export const update = (row) => {
  return request({
    url: baseUrl + '/api/blade-develop/code/submit',
    method: 'post',
    data: row
  })
}

export const getCode = (id) => {
  return request({
    url: baseUrl + '/api/blade-develop/code/detail',
    method: 'get',
    params: {
      id,
    }
  })
}
