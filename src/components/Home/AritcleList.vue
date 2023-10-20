<template>
  <!-- 内容部分 -->
  <div>
    <div class="article-list">
      <div class="left-side">
        <Article
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :desc="item.desc"
          :date="item.date"
          :vtimes="item.vtimes"
          :tags="item.tag"
        ></Article>
      </div>
      <div class="right-side">
        <h2>常看文章</h2>
        <AlwaysArt
          v-for="item in alwArticle"
          :key="item.id"
          :title="item.title"
          :vtimes="item.vtimes"
        ></AlwaysArt>
      </div>
    </div>
    <div v-if="isShow" class="loading">
      <i class="el-icon-loading"></i>正在加载中
    </div>
    <div v-else class="loading">没有更多了</div>
  </div>
</template>

<script>
import Article from '@/components/Home/Article.vue'
import AlwaysArt from './Always.vue'
import { getArt } from '@/api/Article/getArt'
export default {
  components: {
    Article,
    AlwaysArt
  },
  data () {
    return {
      // 查询内容
      params: {
        // 查询数量
        limit: 10,
        // 排序方式
        sort: 'asc',
        // 开始位置
        star: 0,
        // 查询方式
        tag: ''
      },
      alyParams: {
        // 查询数量
        limit: 10,
        // 排序方式
        sort: 'desc',
        orderby: 'vtimes',
        // 开始位置
        star: 0,
        // 查询方式
        tag: ''
      },
      // 文章列表
      artlist: [],
      // 常看文章
      alwArticle: [],
      // 判断是否显示
      isShow: true,
      // 加载更多
      loadMore: true
    }
  },
  async created () {
    console.log('创建阶段')
    console.log(this.params)
    const { data: res } = await getArt(this.params)
    this.artlist = res.date
    const { data: res1 } = await getArt(this.alyParams)
    this.alwArticle = res1.date
  },
  mounted () {
    window.addEventListener('scroll', this.debounce(this.load, 500))
  },
  methods: {
    // 下拉加载更多
    load () {
      const loading = document.querySelector('.loading')
      const ob = new IntersectionObserver(
        async (target) => {
          if (target[0].isIntersecting === true && this.loadMore === true) {
            this.loadMore = false
            this.params.star += 10
            console.log(this.params)
            const { data: res } = await getArt(this.params)
            this.artlist = [...this.artlist, ...res.date]
            console.log('请求了一次')
            this.loadMore = true
            if (res.date.length === 0) {
              this.loadMore = false
              this.isShow = false
            }
          }
        },
        {
          threshold: 0.5
        }
      )
      ob.observe(loading)
    },
    // 定义防抖函数
    debounce (fn, delay) {
      let timeId = null
      return () => {
        if (timeId) clearTimeout(timeId)
        timeId = setTimeout(() => {
          fn()
        }, delay)
      }
    },
    // 返回到顶层
    backTop () {
      scroll(0, 0)
    }
  },
  watch: {
    async $route (to) {
      // 当前路由状态
      const rs = to.path.split('/')[2] === 'rec' ? '' : to.path.split('/')[2]
      this.params.tag = rs
      this.alyParams.tag = rs
      this.params.star = 0
      this.isShow = true
      this.loadMore = true
      const { data: res } = await getArt(this.params)
      this.artlist = res.date
      const { data: res1 } = await getArt(this.alyParams)
      this.alwArticle = res1.date
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
.backTop {
  position: fixed;
  bottom: 0;
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
// 文章部分
.article-list {
  display: flex;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  // min-height: 1500px;
  margin-top: 15px;
  .left-side {
    min-width: 900px;
    margin-right: 20px;
  }
  .right-side {
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    width: 100%;
    text-align: center;
    margin-top: 16px;
    border-collapse: collapse;
    h2 {
      margin-top: 10px;
      color: #f56c6c;
      font-weight: 400;
    }
  }
}

// 底部
.loading {
  text-align: center;
}
</style>
