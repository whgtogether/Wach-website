<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <el-dialog
      title="发布文章"
      :close-on-click-modal="false"
      :visible.sync="dialogFormVisible"
    >
      <el-form label-width="80px">
        <div class="title">
          <span>文章标签：</span>
          <el-select
            v-model="value"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span
            v-if="this.value.length <= 0"
            style="margin-left: 10px; color: red"
          ></span>
        </div>
      </el-form>
      <div class="art_desc">
        <span>文章摘要：</span>
        <el-input
          type="textarea"
          autosize
          placeholder="请在此输入文章描述"
          v-model="textarea1"
        >
        </el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sendMs">确 定</el-button>
      </div>
    </el-dialog>
    <div class="toolbar">
      <!-- eslint-disable-next-line vue/no-parsing-error -->
      <span @click="back">&lt; 返回 </span>
      <div class="inp_title">
        <input
          v-model="title"
          type="text"
          placeholder="请输入标题（5~100个字）"
          maxlength="100"
        />
        <div class="article-bar__number">
          <span v-if="num < 5" style="padding-right: 10px"
            >还需要输入{{ 5 - num }}个字</span
          >
          <span v-if="num >= 5" style="padding-right: 10px"
            >{{ num }} / 100</span
          >
        </div>
      </div>

      <button @click="showModal">发布文章</button>
    </div>
    <MdEditor :content.sync="obj.content"></MdEditor>
  </div>
</template>

<script>
import { postArt } from '@/api/Article/postArt'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Edit',
  data () {
    return {
      obj: {
        defult: ''
      },
      num: 0,
      dialogFormVisible: false,
      title: '',
      // 选项卡
      options: [
        {
          value: 'JavaScript',
          label: 'JavaScript'
        },
        {
          value: 'HTML',
          label: 'HTML'
        },
        {
          value: 'CSS',
          label: 'CSS'
        },
        {
          value: 'Vue',
          label: 'Vue'
        },
        {
          value: 'React',
          label: 'React'
        },
        {
          value: 'Node',
          label: 'Node'
        }
      ],
      value: [],
      textarea1: ''
    }
  },
  methods: {
    uoLoadArt () {
      console.log(this.obj.content)
    },
    showModal () {
      // console.log(this.obj.content)
      if (this.num < 5 || this.obj.content === undefined) {
        return this.$message.error('请输入文章信息')
      } else {
        this.dialogFormVisible = true
      }
    },
    async sendMs () {
      this.dialogFormVisible = false
      const { data: res } = await postArt(
        {
          title: this.title,
          desc: this.textarea1,
          tag: this.value.join(','),
          content: this.obj.content
        }
      )
      console.log(res)
    },
    back () {
      this.$router.back()
    }
  },
  watch: {
    title (newVal) {
      const len = newVal.length
      this.num = len
    },
    value (newVal) {}
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 1200px;
  margin: 0 auto;
}
.el-dialog {
  span {
    width: 80px;
  }
  .titlt {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .art_desc {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
}
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 15px;
  font-size: 20px;
  span {
    min-width: 60px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #2d98da;
    }
  }
  .inp_title {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0 20px;
    padding-left: 10px;
    height: 45px;
    font-size: 18px;
    border: 1px solid #b6b6b6;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    input {
      flex: 1;
      height: 100%;
      font-size: 18px;
      outline: none;
      border: 0;
      cursor: pointer;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }
  button {
    min-width: 70px;
    height: 50px;
    color: #fff;
    border-radius: 14px;
    background-color: #fc5531;
    transition: 0.2s;
    &:hover {
      background: #fc1944;
      cursor: pointer;
      // transform: scale(1.1);
    }
  }
}
</style>
