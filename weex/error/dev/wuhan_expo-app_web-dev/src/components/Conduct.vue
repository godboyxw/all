<template>
  <div class="service">
    <div class="lefts">
      <div class="left" @click="jump">
        <image style="width:50px;height:40px;" src="src/images/left.png"/>
      </div>
      <text class="txts">举办方应用</text>
    </div>
    <grid :obj="arr" :isHome="false" :isNum="num" />
  </div>
</template>
<script>
import Grid from '../common/Grid.vue'
export default {
  name: 'Conduct',
  data () {
    return {
      arr: [
        { img: 'https://vuejs.org/images/logo.png', text: '进馆路线' },
        { img: 'https://vuejs.org/images/logo.png', text: '办展须知' },
        { img: 'https://vuejs.org/images/logo.png', text: '财务管理' },
        { img: 'https://vuejs.org/images/logo.png', text: '展位确认书' },
        { img: 'https://vuejs.org/images/logo.png', text: '信息管理' },
        { img: 'https://vuejs.org/images/logo.png', text: '车辆认证' }
      ],
      num: 12
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
.service {
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
