<template>
    <card :obj="obj" />
</template>
<script>
import Card from '../../../common/Card.vue'
export default {
  data () {
    return {
      obj: [
        { img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546406793660&di=9cfc173f0755bd44c9a36029244a8523&imgtype=0&src=http%3A%2F%2Fpic43.nipic.com%2F20140710%2F13595917_091506167677_2.jpg', title: '麒麟叶', price: 25 },
        { img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546406793660&di=4574b99d3a92dbd39fecb296729f4202&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F74%2F16%2F82z58PICgdj_1024.jpg', title: '麒麟叶', price: 25 },
        { img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546406803929&di=9160329e773048a29cd9a26fc7dd0bf6&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2689054393%2C4258180899%26fm%3D214%26gp%3D0.jpg', title: '麒麟叶', price: 25 },
        { img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546406793660&di=e91863b898877ac1bf1f4aaac6bce47d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F738b4710b912c8fcc2de7de8f6039245d68821e1.jpg', title: '麒麟叶', price: 25 }
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
