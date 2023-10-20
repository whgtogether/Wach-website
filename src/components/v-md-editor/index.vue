<template>
  <div>
    <v-md-editor
      height="800px"
      v-model="editorValue"
      :disabled-menus="[]"
    ></v-md-editor>
  </div>
</template>

<script>
export default {
  name: 'mdEditor',
  data () {
    return {
      editorValue: this.content != null ? this.content : ''
    }
  },
  props: {
    // 接收值父组件传递值
    content: String
  },
  methods: {
  },
  watch: {
    editorValue: function (newNum, oldNum) {
      // 修改调用者传入的值
      this.$emit('update:content', newNum)
    }
  }
}
</script>

<style></style>
