// 文章相关的api
import request from '@/utils/request'

export const getArt = function (title) {
  return request.get('/upview', {
    params: {
      title
    }
  })
}
