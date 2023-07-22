<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <div class="send-setting">
      <div class="go-back">
        <i class="el-icon-arrow-left"></i>
        <span>返回</span>
      </div>
      <input type="text" placeholder="请输入文章标题" />
      <button>发布文章</button>
    </div>
    <MdEditor :content.sync="obj.content"></MdEditor>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Edit',
  data () {
    return {
      obj: {
        defult: ''
      }
    }
  },
  methods: {
    watch: {
      change (text, html) {
        console.log(text)
      }

    }
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 0 50px;
  .send-setting {
    display: flex;
    width: 100%;
    height: 56px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    .go-back {
      font-size: 20px;
      cursor: pointer;
      margin-left: 10px;
    }
    input {
      width: 900px;
      height: 40px;
      text-align: center;
      line-height: 24px;
      padding-left: 20px;
      font-size: 18px;
      border: 1px solid #e7e7e7;
      border-radius: 10px;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
      outline: none;
      transition: 0.1s;
    }
    input:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
    button {
      cursor: pointer;
      padding: 10px 16px;
      margin-right: 10px;
      font-size: 16px;
      color: #fff;
      border: none;
      border-radius: 18px;
      white-space: nowrap;
      background: #4a9ae9;
      transition: 0.2s;
    }
    button:hover {
      background-color: #2888e6;
    }
  }
  // background-color: #F6F6F6;
}
.go-back:hover {
  color: #409eff;
}
</style>
