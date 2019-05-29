<template>
    <div class="dingdan">
        <header :title="'我的订单'"/>
        <div class="d_box">
            <text class="d_txt">应付金额 ¥1200</text>
        </div>
        <div class="d_list">
            <div class="d_b">
                <text class="d_x">购买数量</text>
                <text class="d_x">20盆</text>
            </div>
            <div class="d_b">
                <text class="d_x">配送方式</text>
                <text class="d_x">配送至展位</text>
            </div>
            <div class="d_b">
                <text class="d_x">配送至展位: </text>
                <input type="text" placeholder="请填写配送展位号" class="input" value=""/>
                <text class="d_x"></text>
            </div>
            <div class="d_b">
                <text class="d_x">发票选择</text>
                <text class="d_x">发票选择</text>
            </div>
        </div>
        <div class="footer">
            <div class="btnss" @click="send">
                <text class="send">提交订单</text>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../../common/Header.vue'
export default {
  components: {
    Header
  },
  methods: {
    send () {
      this.$router.push('/pay')
    }
  }
}
</script>
<style scoped>
.dingdan {
    flex: 1;
    background-color: #EEEEEE;
}
.d_box {
    width: 750px;
    height: 160px;
    background-color:rgba(81,90,126,1);
    justify-content: center;
    align-items: center;
}
.d_txt {
    font-size:40px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:40px;
}
.d_list {
    margin-top: 15px;
    width: 750px;
    height: auto;
    align-items: center;
    background-color: #ffffff;
    border-bottom-color: #EEEEEE;
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.d_b {
    width: 710px;
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.d_x {
    font-size:28px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(85,85,85,1);
    line-height:40px;
}
 .input {
    font-size: 26px;
    width: 550px;
    height: 80px;
    line-height: 80px;
    outline: none;
    padding-left: 10px;
    placeholder-color: #BBBBBB;
  }
  .footer {
      width: 750px;
      height: 110px;
      background-color: #ffffff;
      position: absolute;
      bottom: 0;
      justify-content: center;
      align-items: center;
  }
  .btnss {
    width:620px;
    height:90px;
    background:rgba(29,141,243,1);
    border-radius:45px;
    justify-content: center;
    align-items: center;
  }
  .send {
    font-size:36px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:500;
    color:rgba(255,255,255,1);
  }
</style>
