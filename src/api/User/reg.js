// 文章相关的api
import request from '@/utils/request'

export const getReg = function (username, password) {
  return request.get('/reguser', {
    params: {
      username,
      password
    }
  })
}
