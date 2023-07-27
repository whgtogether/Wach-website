<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <div class="toolbar">
      <!-- eslint-disable-next-line vue/no-parsing-error -->
      <span>&lt; 返回 </span>
      <input type="text" placeholder="请输入标题" />
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
    uoLoadArt () {
      console.log(this.obj.content)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 90vw;
  margin: 0 auto;
}
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 15px;
  font-size: 20px;
  span {
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #2d98da;
    }
  }
  input {
    flex: 1;
    margin: 0 20px;
    padding-left: 10px;
    height: 45px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 10px;
    outline: none;
    transition: 0.2s;
    &:hover {
      transform: scale(1.01);
    }
  }
  button {
    border: 0;
  }
}
</style>
