<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Welcome Wach!</div>
      <div class="form-wrapper">
        <input
          type="text"
          v-model="username"
          placeholder="用户名"
          class="input-item"
        />
        <input
          v-model="password"
          type="password"
          placeholder="密码"
          class="input-item"
        />
        <div @click="Login" class="btn">Login</div>
      </div>
      <div class="msg">
        Don't have account?
        <router-link to="/sign">Sign</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { getLogin } from '@/api/User/login'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  created () {
    document.onkeydown = (e) => {
      e = window.event || e
      console.log('按下登录')
      if (this.$route.path === '/login' && (e.code === 'Enter' || e.code === 'enter')) {
        // 调用登录事件方法
        this.Login()
      }
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async Login () {
      const { data: message } = await getLogin(this.username, this.password)
      console.log(message)
      if (message.message !== 'success') {
        return this.$message.error(message)
      }
      const tk = message.data.token
      // 1. 存储 token
      localStorage.setItem('token', tk)
      // 2. 跳转到后台主页
      this.$router.push('/home')
      this.$message({
        message: '登录成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-wrapper {
  background-color: #fff;
  width: 358px;
  height: 588px;
  border-radius: 15px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.header {
  font-size: 38px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
  transition: 0.2s;
}
.header:hover {
  font-size: 40px;
  color: #03a9f4;
}
.input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(128, 125, 125);
  font-size: 15px;
  outline: none;
  transition: font 0.2s;
}

.input-item:hover {
  border-radius: 5px;
  font-size: 18px;
}
.input-item:placeholder {
  text-transform: uppercase;
}
.btn {
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 40px;
  border-radius: 5px;
  background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
  color: #fff;
  transition: 0.2s;
}
.btn:hover {
  transform: scale(1.05, 1.05);
  transform-origin: center center;
}

.msg {
  text-align: center;
  line-height: 88px;
}

a {
  text-decoration-line: none;
  color: #abc1ee;
}
a:hover {
  font-size: 18px;
}
</style>
