<template>
    <div>
        <div class="ceng" v-if="isHome">
            <div class="cengs">
                <div v-if="obj.length > 9">
                    <div class="box" v-if="show1">
                        <div class="hezi" v-for="(item, index) in arr1" :key="index" @click="jump(item.text)">
                            <router-link :to="jumpPath" class="router">
                                <image class="img" :src="item.img"/>
                                <text class="txt">{{ item.text }}</text>
                            </router-link>
                        </div>
                    </div>
                    <div class="box" v-if="show2">
                        <div class="hezi" v-for="(item, index) in arr2" :key="index" @click="jump(item.text)">
                            <image class="img" :src="item.img"/>
                            <text class="txt">{{ item.text }}</text>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="box">
                        <div class="hezi" v-for="(item, index) in arr1" :key="index" @click="jump(item.text)">
                            <image class="img" :src="item.img"/>
                            <text class="txt">{{ item.text }}</text>
                        </div>
                    </div>
                </div>
            </div>
            <div class="indicator">
                <div class="dd" v-if="arr2.length > 0">
                    <div class="idt" @click="left">
                        <text class="dot dot1" :class="show1 ? 'dots' : ''"></text>
                    </div>
                    <div class="idt" @click="right">
                        <text class="dot dot2" :class="show2 ? 'dots' : ''"></text>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!isHome">
            <div class="s_ceng">
                <div class="s_cengs">
                    <div v-if="obj.length > 12">
                        <div class="s_box" v-if="show1">
                            <div class="hezi" v-for="(item, index) in arr1" :key="index" @click="jump(item.text)">
                                <image class="img" :src="item.img"/>
                                <text class="txt">{{ item.text }}</text>
                            </div>
                        </div>
                        <div class="s_box" v-if="show2">
                            <div class="hezi" v-for="(item, index) in arr2" :key="index" @click="jump(item.text)">
                                <image class="img" :src="item.img"/>
                                <text class="txt">{{ item.text }}</text>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="s_box">
                            <div class="hezi" v-for="(item, index) in arr1" :key="index" @click="jump(item.text)">
                                <image class="img" :src="item.img"/>
                                <text class="txt">{{ item.text }}</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="s_indicator">
                <div class="dd" v-if="arr2.length > 0">
                    <div class="idt" @click="left">
                        <text class="dot dot1" :class="show1 ? 'dots' : ''"></text>
                    </div>
                    <div class="idt" @click="right">
                        <text class="dot dot2" :class="show2 ? 'dots' : ''"></text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Array,
      default: null
    },
    isHome: {
      type: Boolean,
      default: false
    },
    isNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      arr1: [],
      arr2: [],
      show1: true,
      show2: false,
      text: '',
      jumpPath: ''
    }
  },
  mounted () {
    this.arr1 = this.obj.slice(0, this.isNum)
    this.arr2 = this.obj.slice(this.isNum)
  },
  methods: {
    left () {
      this.show1 = true
      this.show2 = false
    },
    right () {
      this.show1 = false
      this.show2 = true
    },
    jump (text) {
      /* eslint-disable */
      switch (text) {
        case '展会信息': this.jumpPath = '/exhibition'; break
        case '展具租赁': this.jumpPath = '/rent'; break
        case '问题反馈': this.jumpPath = '/feedback'; break
        case '水电订购': this.jumpPath = '/water'; break
        case '餐饮预定': this.jumpPath = '/order'; break
        default: ''
      }
      /* eslint-enable */
    }
  }
}
</script>
<style scoped>
.ceng {
    width:750px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -100px;
    left: 0;
}
.cengs {
    width:672px;
    height: auto;
    padding-top: 70px;
    padding-bottom: 50px;
    background-color:rgba(255,255,255,1);
    box-shadow:0px 1px 16px 5px rgba(53, 53, 53, 0.35);
    border-radius:20px;
    justify-content: center;
    align-items: center;
}
.s_ceng {
    width:672px;
    height:auto;
    background-color:rgba(255,255,255,1);
    box-shadow:0px 1px 16px 5px rgba(53, 53, 53, 0.35);
    border-radius:20px;

}
.s_cengs {
    width:672px;
    height:auto;
    padding-top: 70px;
    padding-bottom: 70px;
    border-radius:20px;
    justify-content: center;
    align-items: center;
}
.s_box {
    width: 600px;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.box {
    width: 600px;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.hezi {
    width: 200px;
    align-items: center;
    margin-bottom: 50px;
}
.router {
    align-items: center;
}
.img {
    width:84px;
    height:84px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(65,95,255,1);
    border-radius: 42px;
    margin-bottom: 5px;
}
.txt {
    font-size:28px;
    font-family:'DengXian';
    font-weight:400;
    color:rgba(53,53,53,1);
    line-height:40px;
    margin-top: 5px;
}
.s_indicator {
    width: 750px;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    bottom: 0px;
    left: -40px;
}
.indicator {
    width: 750px;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    bottom: 5px;
}
.dd {
    flex-direction: row;
}
.idt {
    width: 50px;
    height: 50px;
}
.dot {
    width:10px;
    height:10px;
    background-color:rgba(98,162,252,1);
    border-radius:5px;
}
.dot1 {
    margin-right: 5px;
}
.dot2 {
    margin-left: 5px;
}
.dots {
    width:20px;
    height:10px;
    background-color:rgba(95,67,220,1);
    border-radius:10px;
}
</style>
