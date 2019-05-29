<template>
    <div class="e_detail">
        <image style="height: 400px;" :src="obj.img" />
        <div class="e_navbar">
          <div class="n_left" @click="hide">
            <image class="n_img" src="src/images/left.png"/>
          </div>
          <div class="n_right">
            <image class="n_img" style="margin-right: 15px;" src="src/images/care.png"/>
            <image class="n_img" style="margin-left: 15px;" src="src/images/share.png"/>
          </div>
        </div>
        <div class="first">
          <div class="box">
            <div class="left">SONY</div>
              <div class="center">
                <text class="title">{{ obj.title }}</text>
                <text class="time">展期：2018/8/15-8/18</text>
              </div>
              <div class="clear">
                <div class="right">
                  <text class="txt">导航</text>
                </div>
            </div>
          </div>
        </div>
        <div class="second">
            <div class="tab">
                <div class="tab-item" @click="btn1">
                    <text class="a" :class="show1 ? 'active' : ''" >简介</text>
                </div>
                <div class="tab-item" @click="btn2">
                    <text class="a" :class="show2 ? 'active' : ''" >展品</text>
                </div>
                <div class="tab-item" @click="btn3">
                    <text class="a" :class="show3 ? 'active' : ''" >同期展商</text>
                </div>
            </div>
            <div class="content">
                <intro v-show="show1" />
                <zhan v-show="show2" />
                <shang v-show="show3" />
            </div>
        </div>
    </div>
</template>
<script>
import Intro from './detail/Intro.vue'
import Zhan from './detail/Zhan.vue'
import Shang from './detail/Shang.vue'
export default {
  data () {
    return {
      obj: {},
      show1: true,
      show2: false,
      show3: false
    }
  },
  mounted () {
    this.obj = this.$route.params.obj
  },
  methods: {
    hide () {
      this.$router.push('/exhibition')
    },
    btn1 () {
      this.show1 = true
      this.show2 = false
      this.show3 = false
    },
    btn2 () {
      this.show2 = true
      this.show1 = false
      this.show3 = false
    },
    btn3 () {
      this.show3 = true
      this.show1 = false
      this.show2 = false
    }
  },
  components: {
    Intro,
    Zhan,
    Shang
  }
}
</script>
<style scoped>
.e_detail {
    flex: 1;
    background-color: #EEEEEE;
}
.e_bac {
    width: 750px;
    height: 360px;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.8;
}
.e_navbar {
  position: absolute;
  width: 670px;
  flex-direction: row;
  justify-content: space-between;
  top: 50px;
  left: 30px;
}
.n_img {
    height: 50px;
    width: 50px;
}
.n_right {
    flex-direction: row;
}
.first {
  background-color: #ffffff;
  padding: 20px 30px 20px 30px;
}
.box {
  flex-direction: row;
  align-items: center;
}
.left {
  position: absolute;
  top: -60px;
  width: 140px;
  height: 140px;
  background:rgba(255,255,255,1);
  box-shadow: 0px 3px 6px 0px rgba(57,57,57,0.23);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.center {
  margin-left: 160px;
}
.title {
  font-size: 32px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 700;
  color:rgba(53,53,53,1);
  margin-bottom: 10px;
}
.time {
  font-size:24px;
  font-family:'SourceHanSansCN-Regular';
  font-weight:400;
  color:rgba(153,153,153,1);
  margin-top: 10px;
}
.clear {
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
}
.right {
  width:140px;
  height:60px;
  background-color:rgba(8,117,209,1);
  border-radius:30px;
  justify-content: center;
  align-items: center;
}
.txt {
  font-size:30px;
  font-family:'Adobe Heiti Std R';
  font-weight:normal;
  color:rgba(255,255,255,1);
}
.second {
  margin-top: 20px;
  background-color: #ffffff;
}
.tab {
  flex-direction: row;
  height: 100px;
  align-items: center;
  border-bottom: 1px solid rgba(238,238,238,1);
}
.tab-item {
  flex: 1;
  align-items: center;
}
.a {
  font-size:32px;
  font-family:'SourceHanSansCN-Regular';
  font-weight:400;
  color:rgba(50,50,50,1);
}
.active {
  height: 100px;
  line-height: 100px;
  font-size:32px;
  font-family:'SourceHanSansCN-Medium';
  font-weight:700;
  color:rgba(29,141,243,1);
  border-bottom-color: rgba(29,141,243,1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.txt1 {
  text-indent: 0.8rem;
  font-size:30px;
  font-family:'SourceHanSansCN-Regular';
  font-weight:400;
  color:rgba(85,85,85,1);
  line-height:50px;
}
</style>
