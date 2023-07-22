<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div @click="backTop" v-if="TopBarFixed" class="backTop">UP</div>
    <div class="nav" :class="navBarFixed == true ? 'navBarWrap' : ''">
      <el-row>
        <el-col :span="8">
          <el-row>
            <el-col :span="8">
              <div class="info">
                <div class="home" @click="backTop">
                  <span class="el-icon-house"></span>
                  <router-link to="/home">首页</router-link>
                </div>
              </div></el-col
            >
            <el-col :span="8">
              <div class="info">
                <span class="el-icon-news"></span>
                <router-link to="/">AI</router-link>
              </div></el-col
            >
            <el-col :span="8">
              <div class="info">
                <span class="el-icon-folder-remove"></span>
                <router-link to="/">归档</router-link>
              </div></el-col
            >
          </el-row></el-col
        >
        <el-col :span="8"
          ><div class="input">
            <input type="text" placeholder="输入文章信息" /></div
        ></el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="8"
              ><div class="info">
                <span class="el-icon-message"></span
                ><router-link to="/">留言</router-link>
              </div></el-col
            >
            <el-col :span="8"
              ><div class="info">
                <span class="el-icon-user"></span>
                <router-link to="/">关于</router-link>
              </div></el-col
            ><el-col :span="8"
              ><router-link to="/edit" class="info">
                <span class="el-icon-circle-plus-outline"></span>
                <span>发布</span>
              </router-link></el-col
            >
          </el-row></el-col
        >
      </el-row>
    </div>
    <div class="container w">
      <!-- 导航栏部分 -->
      <div class="blog-nav">
        <ul @click="colorChange">
          <li>
            <router-link id="rec" to="/home/rec" class="selected"
              >推荐</router-link
            >
          </li>
          <li>
            <router-link id="javascript" to="/home/javascript"
              >JavaScript</router-link
            >
          </li>
          <li>
            <router-link id="html" to="/home/html">HTML</router-link>
          </li>
          <li>
            <router-link id="css" to="/home/css">CSS</router-link>
          </li>
          <li>
            <router-link id="vue" to="/home/vue">Vue</router-link>
          </li>
          <li>
            <router-link id="react" to="/home/react">React</router-link>
          </li>
          <li>
            <router-link id="node" to="/home/node">Node</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  props: ['lang'],
  data () {
    return {
      navBarFixed: false,
      TopBarFixed: false
    }
  },
  created () {
    if (this.$route.path !== '/home/rec') {
      this.$router.push('/home/rec')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
  },
  methods: {
    // 改变颜色
    async colorChange (e) {
      const k = e.target
      const overHave = document.querySelector('.selected')
      if (k.nodeName === 'A') {
        if (overHave) {
          overHave.classList.remove('selected')
        }
        k.classList.toggle('selected')
      }
    },
    // 任务栏固定
    watchScroll () {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      //  当滚动超过 100 时，实现吸顶效果
      console.log(scrollTop)
      if (scrollTop > 100) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }

      // 当滚动超过200时，实现向上功能
      if (scrollTop > 2000) {
        this.TopBarFixed = true
      } else {
        this.TopBarFixed = false
      }
    },
    // 返回到顶层
    backTop () {
      const timer = setInterval(function () {
        const target = 0
        // 获取页面当前滚动的距离
        let leader = document.documentElement.scrollTop
        let step = (target - leader) / 10
        // step = step > 0 ? Math.ceil(step) : ___(7)___(step);
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        leader = leader + step
        // 滚动到leader位置
        // window.___(8)____(0, leader);
        window.scrollTo(0, leader)
        // if (____(9)_____) {
        if (leader === 0) {
          // 清除计时器
          // ____(10)_____;
          clearInterval(timer)
        }
      }, 5)
    }
  }
}
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
a {
  color: #000;
}
// 版心设置
.w {
  width: 90vw;
  margin: 0 auto;
}

.selected {
  color: red;
}

// 吸附设置
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
}

.backTop {
  position: fixed;
  bottom: 80px;
  right: 80px;
  width: 120px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  background-color: #a5d4f1;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  transition: all 2s;
  // border: 1px solid rgba(0, 0, 0, 0.05);
}

// 头部导航栏
.nav {
  width: 100vw;
  height: 75px;
  background-color: rgba(255, 255, 255, 0.5);
  // border-bottom: 1px solid #555;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  font-size: 20px;
  .input {
    width: 100%;
    height: 50px;
    margin-top: 13px;

    input {
      width: 100%;
      height: 100%;
      border: 1px solid #000;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      padding-left: 10px;
      outline: none;
      transition: 0.2s;
    }
  }
  .info {
    cursor: pointer;
    transition: 0.2s;
    span {
      padding-right: 5px;
    }
  }
}

input:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.info:hover {
  font-size: 24px;
}

.el-col {
  text-align: center;
  a {
    line-height: 75px;
    color: black;
  }
}

.container {
  min-height: 500px;
  margin-top: 30px;

  // 导航栏部分
  .blog-nav {
    width: 100%;
    height: 75px;
    border: 1px solid #f3f3f3;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    // background: #000;
    ul {
      text-align: center;
      line-height: 75px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      li {
        flex: 1;
        color: #555666;
        transition: font 0.2s;
      }
      :hover {
        font-size: 20px;
      }
    }
  }
}
</style>
