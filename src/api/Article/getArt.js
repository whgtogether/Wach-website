// 文章相关的api
import request from '@/utils/request'

export const getArt = function (params) {
  return request.get('/getart', {
    params
  })
}
