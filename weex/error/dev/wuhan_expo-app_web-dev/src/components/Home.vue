<template>
  <div class="home">
      <div class="top">
          <div class="bac" />
          <text class="title">武汉国际博览中心</text>
      </div>
      <grid :obj="arr" :isHome="true" :isNum="num" />
      <div class="tab">
        <div class="tab-item">
          <router-link to="/conduct" class="txt">举办方</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{path: '/display'}" class="txt">参展商</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/service" class="txt">服务商</router-link>
        </div>
      </div>
  </div>
</template>
<script>
import Grid from '../common/Grid.vue'
export default {
  name: 'Home',
  data () {
    return {
      arr: [
        { img: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg', text: '展会信息' },
        { img: 'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg', text: '展具租赁' },
        { img: 'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg', text: '餐饮预定' },
        { img: 'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg', text: '水电订购' },
        { img: 'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg', text: '泊车寻车' },
        { img: 'https://gw.alicdn.com/tfs/TB1w.ocb3DD8KJjy0FdXXcjvXXa-140-140.png_150x10000.jpg', text: '全景国博' },
        { img: 'https://img.alicdn.com/tfs/TB1sWLoRVXXXXbdXXXXXXXXXXXX-140-140.png', text: '通勤车查询' },
        { img: 'https://gw.alicdn.com/tfs/TB10.R_SpXXXXbtXXXXXXXXXXXX-140-140.png', text: '问题反馈' },
        { img: 'https://img.alicdn.com/tfs/TB1fRVASpXXXXXdXXXXXXXXXXXX-140-140.png', text: '行李托管' },
        { img: 'https://img.alicdn.com/tfs/TB1_TkdPVXXXXcJXXXXXXXXXXXX-140-140.png', text: '餐饮预定' },
        { img: 'https://img.alicdn.com/tps/TB1goZhPXXXXXXfXpXXXXXXXXXX-118-118.png_170x120Q50s50.jpg', text: '会议室预约' },
        { img: 'https://img.alicdn.com/tps/TB1zUTQPXXXXXaZaXXXXXXXXXXX-118-118.png_170x120Q50s50.jpg', text: '广告申请' },
        { img: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg', text: '问题反馈' },
        { img: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg', text: '缴费中心' },
        { img: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg', text: '申请展位' },
        { img: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg', text: '表格填写' },
        { img: 'https://vuejs.org/images/logo.png', text: '特装搭建' },
        { img: 'https://vuejs.org/images/logo.png', text: '展品运输' }
      ],
      num: 9
    }
  },
  components: {
    Grid
  }
}
</script>
<style scoped>
.home {
  flex: 1;
}
.bac {
  width: 750px;
  height: 500px;
  background-image: linear-gradient(to bottom,rgba(76,187,250,1),rgba(127,132,255,1));
}
.title {
  position: absolute;
  top: 50px;
  left: 30px;
  font-size: 36px;
  font-family: 'MicrosoftYaHei';
  font-weight: 400;
  color:rgba(255,255,255,1);
  line-height: 40px;
}
.tab-item {
    flex: 1;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.tab {
    width: 750px;
    height: 96px;
    line-height: 96px;
    flex-direction: row;
    background-color: rgba(255,255,255,1);
    position: absolute;
    bottom: 0px;
    left: 0px;
}
.txt {
    font-size:28px;
    font-family:'MicrosoftYaHei';
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:40px;
}
.router-link-active {
    color: #FF0000;
}
</style>
