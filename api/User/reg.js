// 文章相关的api
import request from '@/utils/request'

export const getLogin = function (username, password) {
  return request.get('/articles', {
    params: {
      username,
      password
    }
  })
}
