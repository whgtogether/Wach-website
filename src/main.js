import Vue from 'vue'
import App from './App.vue'
// 引入Vue路由
import router from './router'
// 引入element-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入axios
import axios from 'axios'
import './assets/font/index.css' // 全局使用

/* v-md-editor 编辑器 start  */
/* 1、v-md-editor 基础引用  */
import VueMarkdownEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import Prism from 'prismjs'

/* 2、v-md-editor 代码块关键字高亮  */
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
// 引入所有语言包
import hljs from 'highlight.js'

/* 3、v-md-editor 二次封装  */
import mdEditor from '@/components/v-md-editor/index'
VueMarkdownEditor.use(vuepressTheme, {
  Prism
})
VueMarkdownEditor.use(githubTheme, {
  Hljs: hljs
})
Vue.use(VueMarkdownEditor)
Vue.component('MdEditor', mdEditor)
/* v-md-editor 编辑器 end  */

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
