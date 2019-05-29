<template>
    <div class="detail">
        <div class="header">
            <div @click="hide" class="bac">
                <image class="imgs" src="src/images/zuo.png"/>
            </div>
            <div class="title">
                <text class="txt">索尼展商</text>
            </div>
        </div>
        <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="(item, index) in imageList" :key="index">
                <image class="image" resize="stretch" :src="item.src"/>
            </div>
            <indicator class="indicator"></indicator>
        </slider>
        <div class="desc">
            <text class="txt">{{ obj.name }}</text>
        </div>
        <div class="product">
            <text class="ps">产品详情</text>
            <image style="width: 710px; height: 600px;" :src="obj.img" />
        </div>
        <div class="foot">
            <div class="lef">
                <text class="lefs">咨询</text>
            </div>
            <div class="righs">
                <text class="righ">商城预售</text>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      obj: {},
      imageList: [
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' },
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' },
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }
      ]
    }
  },
  mounted () {
    this.obj = this.$route.params.obj
  },
  methods: {
    hide () {
      console.log(1111)
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.detail {
    position: absolute;
    top:0;
    background-color: #ffffff;
}
.header {
    height: 96px;
    align-items: center;
    flex-direction: row;
}
.bac {
    width: 100px;
    height: 50px;
    padding: 10px;
    align-items: center;
}
.imgs {
    width:24px;
    height:32px;
}
.title {
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: -25px;
}
.txt {
    font-size:40px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:500;
    color:rgba(68,68,68,1);
}
.slider {
    width: 750px;
    height: 420px;
    /* border-width: 2px;
    border-style: solid;
    border-color: #41B883; */
    background-color: #ffffff;
}
.frame {
    width: 750px;
    height: 420px;
    position: relative;
}
.image {
    width: 750px;
    height: 420px;
}
.indicator {
    width: 750px;
    height: 420px;
    item-color: green;
    item-selected-color: red;
    item-size: 20px;
    position: absolute;
    top: 180px;
    left: 0px;
}
.desc {
    width:750px;
    height:120px;
    background:rgba(255,255,255,1);
    justify-content: center;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: rgba(229,229,229,1);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgba(229,229,229,1);
}
.txt {
    font-size:36px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:700;
    color:rgba(68,68,68,1);
    margin-left: 34px;
}
.product {
    background-color: #ffffff;
    padding: 20px;
}
.ps {
    padding: 10px;
    font-size:30px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(68,68,68,1);
}
.foot {
    position: fixed;
    bottom: 0;
    width: 720px;
    height: 96px;
    flex-direction: row;
}
.lef {
    flex: 1;
    justify-content: center;
    align-items: center;
}
.lefs {
    font-size:30px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(68,68,68,1);
}
.righs {
    flex: 3;
    background-color:rgba(29,141,243,1);
    justify-content: center;
    align-items: center;
    margin-right: -26px;
}
.righ {
    font-size:32px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(255,255,255,1);
}
</style>
