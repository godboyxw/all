<template>
    <card :obj="obj" />
</template>
<script>
import Card from '../../../common/Card.vue'
export default {
  data () {
    return {
      obj: [
        { img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2878518453,1633529020&fm=200&gp=0.jpg', title: '麒麟叶', price: 25 },
        { img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2878518453,1633529020&fm=200&gp=0.jpg', title: '麒麟叶', price: 25 },
        { img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2878518453,1633529020&fm=200&gp=0.jpg', title: '麒麟叶', price: 25 },
        { img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2878518453,1633529020&fm=200&gp=0.jpg', title: '麒麟叶', price: 25 }
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
