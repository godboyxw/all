<template>
    <card :obj="obj" />
</template>
<script>
import Card from '../../../common/Card.vue'
export default {
  data () {
    return {
      obj: [
        { img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547002969&di=1c34b2cde2c59451a9c626988a78da7e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg7.cntrades.com%2F201407%2F08%2F16-01-12-55-833386.jpg', title: '麒麟叶', price: 25 },
        { img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546408250442&di=25c80380a712ffb6fe3b91233acb7a5c&imgtype=0&src=http%3A%2F%2Fi1.ymfile.com%2Fuploads%2Fproduct%2F12%2F24%2Fx1_1.1356311567_3377_2251_799288.JPG', title: '麒麟叶', price: 25 }
      ]
    }
  },
  components: {
    Card
  }
}
</script>
<style scoped>
</style>
