<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Lets Sign!</div>
      <!-- <hr> -->
      <div class="form-wrapper">
        <input
          id="username"
          type="text"
          v-model="username"
          placeholder="用户名"
          class="input-item"
        />
        <input v-model="password" placeholder="密码" class="input-item" />
        <input v-model="sure_pass" placeholder="确认密码" class="input-item" />
        <div @click="Sign" class="btn">注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReg } from '@/api/User/reg'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Sign',
  data: function () {
    return {
      username: '',
      password: '',
      sure_pass: ''
    }
  },
  methods: {
    async Sign () {
      if (this.password !== this.sure_pass) {
        return this.$message.error('两次密码不一致')
      }
      if (this.username.length < 5 || this.username.length > 10) {
        return this.$message.error('用户名长度需要在5-8之间')
      }
      if (this.password.length <= 5 || this.password.length >= 10) {
        return this.$message.error('密码长度需要在5-8之间')
      }
      const { data: message } = await getReg(this.username, this.password)
      console.log(message)
      if (message.message !== '注册成功！') {
        return this.$message.error(message)
      }
      this.$message({
        message: '注册成功',
        type: 'success'
      })
      this.$router.push('/login')
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
  width: 100%;
  height: 40px;
  line-height: 40px;
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
