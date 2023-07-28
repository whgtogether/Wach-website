<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  created () {
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;

}
div{

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
button,
a {
  border: 0;
}
img,
input {
  border: none;
  vertical-align: middle;
}
body {
  font-family: "阿里妈妈东方大楷 Regular";
  // text-align: center;
  background: #fff;
  color: #000;
}
a {
  text-decoration: none;
}
</style>
