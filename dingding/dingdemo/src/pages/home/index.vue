<template>
  <div class="wrapper">
    <text class="title"
          v-on:click="getClick">Hello Dingtalk Micro App {{ link }}</text>
  </div>
</template>
<script>

import dingtalk from 'dingtalk-javascript-sdk';
//import dingtalk from 'weex-dingtalk'
export default {
  name: 'home',
  data: function () {
    return {
      link: ', author: icepy'
    }
  },
  mounted: function () {
    dingtalk.ready(function () {
      const dd = dingtalk.apis;
      // 设置导航
      dd.biz.navigation.setTitle({
        title: 'Dingtalk'
      });
    });
  },
  methods: {
    getClick: function () {

    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 750px;
  align-items: center;
}
.title {
  font-size: 60px;
  color: #505050;
  text-align: center;
}
.subtitle {
  display: block;
  font-size: 30px;
  color: #aaaaaa;
  text-align: center;
  margin-top: 20px;
}
.bind-vue-container {
  width: 702px;
  height: 88px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #4fc08d;
}
.bind-vue {
  font-size: 34px;
  color: #ffffff;
  text-align: center;
}
</style>
