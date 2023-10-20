// 文章相关的api
import request from '@/utils/request'
const qs = require('qs')
export const postArt = function (params) {
  return request.post('/postart', qs.stringify(params))
}
