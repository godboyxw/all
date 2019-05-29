<template>
    <div class="pay">
       <header :title="'收银台'"/>
        <div class="p_box">
            <text class="p_txt">支付剩余时间</text>
        </div>
        <div class="p_list">
            <div class="p_b"  v-for="(item, index) in arr" :key="index">
                <div class="weixin">
                    <image style="width:40px;height:40px;margin-right: 20px;" :src="item.img"/>
                    <text class="p_x">{{ item.txt }}</text>
                </div>
               <image style="width:50px;height:50px;" :src="activeIn === index ? 'src/images/icon-radios.png' : 'src/images/radio.png'" @click="gou(index)"/>
            </div>
        </div>
        <div class="p_footer">
            <div class="p_btnss" @click="sends">
                <text class="p_send">提交订单</text>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../../common/Header.vue'
export default {
  data () {
    return {
      activeIn: 0,
      arr: [
        { img: 'src/images/weixin.png', txt: '微信支付' },
        { img: 'src/images/alipay.png', txt: '支付宝支付' },
        { img: 'src/images/bank.png', txt: '银联快捷支付' }
      ]
    }
  },
  components: {
    Header
  },
  methods: {
    gou (index) {
      this.activeIn = index
    }
  }
}
</script>
<style scoped>
.pay {
    flex: 1;
    background-color: rgba(238,238,238,1);
}
.p_box {
    width: 750px;
    height: 160px;
    background-color:rgba(81,90,126,1);
    justify-content: center;
    align-items: center;
}
.p_txt {
    font-size:40px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:40px;
}
.weixin {
    flex-direction: row;
}
.p_list {
    margin-top: 15px;
    width: 750px;
    height: auto;
    align-items: center;
    background-color: #ffffff;
    border-bottom-color: #EEEEEE;
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.p_b {
    width: 710px;
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.p_x {
    font-size:28px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(85,85,85,1);
    line-height:40px;
}
.input {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.p_footer {
    width: 750px;
    height: 110px;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    justify-content: center;
    align-items: center;
}
.p_btnss {
    width:620px;
    height:90px;
    background:rgba(29,141,243,1);
    border-radius:45px;
    justify-content: center;
    align-items: center;
}
.p_send {
    font-size:36px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:500;
    color:rgba(255,255,255,1);
}
</style>
