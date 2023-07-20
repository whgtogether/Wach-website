<template>
  <div class="article">
    <div class="art-header">
      <router-link to="/">
        <img src="../../upload/20230308045529.png" alt="" />
      </router-link>
    </div>
    <div class="content">
      <router-link to="/">
        <p class="art-title">{{ title }}</p>
        <span class="desc">{{ desc }}</span>
      </router-link>
      <div class="option">
        <span class="date">发布日期：{{ date }}</span>
        <div class="view">
          <i class="el-icon-view"></i>
          <span>{{ vtimes }}次</span>
        </div>
        <div class="tag">
          <span>标签:</span>
          <router-link v-for="item in tags" :key="item" to="/">{{
            item
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入获取文章模块
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Article',
  props: {
    title: {
      default: 'asdasdasdasda',
      type: String
    },
    desc: {
      default: 'aaa',
      type: String
    },
    date: {
      default: 'aaa',
      type: String
    },
    vtimes: {
      default: 1,
      type: Number
    },
    tags: {
      default: () => {
        return ['前端']
      },
      type: Array
    }
  }
  // 文章标题
}
</script>

<style lang="less" scoped>
.article {
  display: flex;
  cursor: pointer;
  width: 900px;
  max-height: 200px;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  margin-top: 16px;
  margin-bottom: 16px;
  .art-header img {
    margin-top: 10px;
    max-width: 290px;
    height: 90%;
  }
  .content {
    display: flex;
    max-width: 600px;
    justify-content: space-between;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 10px;
    a {
      .art-title {
        font-size: 18px;
        font-weight: 500;
        color: #222226;
        overflow: hidden;
        white-space: normal;
        word-break: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        line-height: 25px;
        margin-bottom: 4px;
      }
      .desc {
        font-size: 14px;
        font-weight: 400;
        margin-top: 18px;
        color: #555666;
        overflow: hidden;
        white-space: normal;
        word-break: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .option {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      align-items: flex-end;
      flex: 1;
      margin-bottom: 10px;
      .view {
        margin: 0 10px;
        span {
          margin-left: 5px;
        }
      }
      .tag {
        a {
          color: rgb(161, 147, 147);
          margin: 0 5px;
        }
      }
      a:hover {
        color: red;
      }
    }
  }
}
:hover {
  background-color: #f2f2f2;
}
</style>
