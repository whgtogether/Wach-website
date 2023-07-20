// 文章相关的api
import request from '@/utils/request'

export const getArt = function (title, desc) {
  return request.get('/postart', {
    params: {
      title,
      desc
    }
  })
}
