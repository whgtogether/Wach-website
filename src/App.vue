<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="less">
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */

* {
  padding: 0;
  margin: 0;

}
div{
  font-family: "阿里妈妈东方大楷 Regular";
}
div,
dl,
dt,
dd,
form,
h1,
h2,
h3,
h4,
h5,
h6,
img,
ol,
ul,
li,
table,
th,
td,
p,
span,
a {
  border: 0;
}
img,
input {
  border: none;
  vertical-align: middle;
}
body {
  font-family: Tahoma, Arial, Helvetica;
  // text-align: center;
  background: #fff;
  color: #000;
}
a {
  text-decoration: none;
}
</style>
