<template>
  <div class="home">
    <div class="lefts">
      <div class="left" @click="jump">
        <image style="width:50px;height:40px;" src="src/images/left.png"/>
      </div>
      <text class="txts">参展商应用</text>
    </div>
    <grid :obj="arr" :isHome="false" :isNum="num"/>
  </div>
</template>
<script>
import Grid from '../common/Grid.vue'
export default {
  name: 'Display',
  data () {
    return {
      arr: [
        { img: 'https://vuejs.org/images/logo.png', text: '展会信息' },
        { img: 'https://vuejs.org/images/logo.png', text: '去买票' },
        { img: 'https://vuejs.org/images/logo.png', text: '餐饮预定' },
        { img: 'https://vuejs.org/images/logo.png', text: '餐饮预定' },
        { img: 'https://vuejs.org/images/logo.png', text: '泊车寻车' },
        { img: 'https://vuejs.org/images/logo.png', text: '全景国博' },
        { img: 'https://vuejs.org/images/logo.png', text: '通勤车查询' },
        { img: 'https://vuejs.org/images/logo.png', text: '问题反馈' },
        { img: 'https://vuejs.org/images/logo.png', text: '行李托管' },
        { img: 'https://vuejs.org/images/logo.png', text: '展会信息' },
        { img: 'https://vuejs.org/images/logo.png', text: '展会信息' },
        { img: 'https://vuejs.org/images/logo.png', text: '展会信息' },
        { img: 'https://vuejs.org/images/logo.png', text: '展会信息' },
        { img: 'https://vuejs.org/images/logo.png', text: '行李托管' },
        { img: 'https://vuejs.org/images/logo.png', text: '展会信息' }
      ],
      num: 12,
      show: true
    }
  },
  components: {
    Grid
  },
  methods: {
    jump () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.home {
  flex: 1;
  background-image:linear-gradient(to bottom,rgba(76,187,250,1),rgba(127,132,255,1));
  justify-content: center;
  align-items: center;
}
.lefts {
  position: absolute;
  top: 50px;
  left: 30px;
  flex-direction: row;
  align-items: center;
}
.left {
   width:80px;
   height:60px;
   justify-content: center;
   align-items: center;
}
.txts {
  font-size:36px;
  font-family:'MicrosoftYaHei';
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:40px;
  margin-left: 20px;
}
</style>
