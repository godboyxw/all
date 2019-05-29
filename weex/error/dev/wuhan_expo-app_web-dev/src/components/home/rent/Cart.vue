<template>
    <div class="cart">
        <header :title="'购物车'"/>
        <scroller class="scroller">
            <div class="c_list" v-for="(item, index) in list" :key="index">
                <div class="c_box">
                    <div class="c_l">
                        <image style="width: 247px; height: 230px;" :src="item.img"/>
                    </div>
                    <div class="c_r">
                        <text class="c_tit">{{ item.title }}</text>
                        <div class="rent">
                            <text class="c_rent c_rent1">租金¥  </text>
                            <text class="c_rent c_rent2">{{ item.rent }} </text>
                            <text class="c_rent c_rent3"> / 天</text>
                        </div>
                        <div class="yajin">
                            <text class="c_yajin c_yajin1">租金 </text>
                            <text class="c_yajin c_yajin2"> ¥{{ item.yajin }}</text>
                        </div>
                        <div class="cl">
                            <div class="cl_l">
                                <text class="tts ttl" @click="reduce(item)">-</text>
                                <text class="ttt">{{ item.count }}</text>
                                <text class="tts ttr" @click="add(item)">+</text>
                            </div>
                            <div class="cl_r" @click="cancel(item)">
                                <image style="width:30px;height:30px" src="src/images/cha.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </scroller>
        <div class="c_totol">
            <div class="totals">
                <text class="tota">总金额 ¥{{ total }}</text>
            </div>
            <div class="btns" @click="goTo">
                <text class="sum">结算</text>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../../common/Header.vue'
export default {
  data () {
    return {
      count: 1,
      total: 0,
      list: [
        { img: 'http://t2.hddhhn.com/uploads/tu/201610/198/scx30045vxd.jpg', title: '艾博斯（Airproce） 空气净化器AL-730', rent: 300, yajin: 500, count: 1 },
        { img: 'http://t2.hddhhn.com/uploads/tu/201610/198/jnrqtcnyywt.jpg', title: '展览地毯（含加地膜铺地毯费用', rent: 300, yajin: 500, count: 1 },
        { img: 'http://t2.hddhhn.com/uploads/tu/201610/198/opwavhv01ra.jpg', title: '多功能插线板', rent: 300, yajin: 500, count: 1 },
        { img: 'http://t2.hddhhn.com/uploads/tu/201610/198/0napi51vpzy.jpg', title: '液晶电视', rent: 300, yajin: 500, count: 1 },
        { img: 'http://t2.hddhhn.com/uploads/tu/201610/198/amcmsp2nuwp.jpg', title: '艾博斯（Airproce） 空气净化器AL-730', rent: 300, yajin: 500, count: 1 },
        { img: 'http://t2.hddhhn.com/uploads/tu/201610/198/ui0rqinzt2t.jpg', title: '艾博斯（Airproce） 空气净化器AL-730', rent: 300, yajin: 500, count: 1 },
        { img: 'http://t2.hddhhn.com/uploads/tu/201610/51/s25010jc31m.jpg', title: '艾博斯（Airproce） 空气净化器AL-730', rent: 300, yajin: 500, count: 1 }
      ]
    }
  },
  created () {
    for (let i = 0; i < this.list.length; i++) {
      this.total += this.list[i].rent * this.list[i].count
    }
  },
  methods: {
    cancel (item) {
      for (var i = 0; i < this.list.length; i++) {
        if (item === this.list[i]) {
          if (i === 0) {
            this.list.shift()
          } else if (i === this.length - 1) {
            this.list.pop()
          } else {
            this.list.splice(i, 1)
          }
        }
      }
    },
    goTo () {
      this.$router.push('/confirm')
    }
  },
  components: {
    Header
  }
}
</script>
<style scoped>
.cart {
    background-color: #EEEEEE;
}
.scroller {
    height: calc(100vh - 268px);
    margin-top: 15px;
    margin-bottom: 15px;
}
.c_list {
    width: 750px;
    height: 280px;
    background-color: #ffffff;
    justify-content: center;
    border-bottom-color: rgba(187,187,187,0.2);
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.c_box {
    height: 230px;
    width: 700px;
    flex-direction: row;
}
.c_r {
    flex: 1;
    margin-left: 30px;
    flex-wrap: wrap;
    justify-content: space-between;
}
.c_tit {
    font-size:30px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:500;
    color:rgba(53,53,53,1);
    line-height:40px;
}
.c_pri {
    font-size:22px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(251,80,83,1);
    line-height:40px;
}
.rent {
    flex-direction: row;
}
.c_rent {
    font-size:22px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(251,80,83,1);
    line-height:40px;
}
.c_rent2 {
    font-size:40px;
}
.yajin {
    flex-direction: row;
}
.c_yajin {
    font-size:22px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(187,187,187,1);
    line-height:40px;
}
.cl {
    flex-direction: row;
    justify-content: space-between;
}
.cl_l {
    flex-direction: row;
}
.tts {
    width: 40px;
    height: 40px;
    color: rgba(238,238,238,1);
    font-size:20px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    border-left-color: rgba(187,187,187,1);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(187,187,187,1);
    text-align: center;
    line-height: 40px;
    color:rgba(85,85,85,1);
}
.ttl {
    border-right: none;
}
.ttr {
    border-left: none;
}
.ttt {
    width: 50px;
    height: 40px;
    font-size:24px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(85,85,85,1);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(187,187,187,1);
    text-align: center;
    line-height: 40px;
}
.c_totol {
    height: 140px;
    width: 750px;
    position: fixed;
    bottom: 0;
}
.totals {
    width: 750px;
    height: 50px;
    background-color:#ffffff;
    justify-content: center;
    align-items: center;
}
.tota {
    font-size:28px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(85,85,85,1);
    line-height:40px;
}
.btns {
    width: 750px;
    height: 90px;
    justify-content: center;
    align-items: center;
    background-color:rgba(8,117,209,1);
}
.sum {
    font-size:32px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:40px;
}
</style>
