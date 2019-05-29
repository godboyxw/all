<template>
  <div class="water">
    <header :title="'水电订购'" />
    <div class="w_box1">
      <text class="w_name">用水订购</text>
      <div class="moduel">
        <div :class="activeIndex === index ? 'active' : 'w_box'"
             v-for="(item, index) in arr"
             :key="index"
             @click="tab(index)">
          <text class="w_weight">{{ item.weight }}</text>
          <text class="w_price">{{ item.price }}</text>
        </div>
        <div :class="activeIndex === 6 ? 'active' : 'w_box'"
             @click="tabIndex">
          <text class="dingyi">自定义</text>
        </div>
      </div>
    </div>
    <div class="w_box1">
      <text class="w_name">用电订购</text>
      <div class="moduel">
        <div :class="activeIndex1 === index ? 'active' : 'w_box'"
             v-for="(item, index) in arr1"
             :key="index"
             @click="tab1(index)">
          <text class="w_weight">{{ item.weight }}</text>
          <text class="w_price">{{ item.price }}</text>
        </div>
        <div :class="activeIndex1 === 6 ? 'active' : 'w_box'"
             @click="tabIndex1">
          <text class="dingyi">自定义</text>
        </div>
      </div>
    </div>
    <div class="w_btn">
      <text class="w_tct">立即支付</text>
    </div>
  </div>
</template>
<script>
import Header from '../../common/Header.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      activeIndex: 0,
      activeIndex1: 0,
      arr: [
        { weight: '1t', price: '5元' },
        { weight: '2t', price: '10元' },
        { weight: '3t', price: '15元' },
        { weight: '4t', price: '20元' },
        { weight: '5t', price: '25元' }
      ],
      arr1: [
        { weight: '5 kw·h', price: '5元' },
        { weight: '9 kw·h', price: '10元' },
        { weight: '12 kw·h', price: '15元' },
        { weight: '16 kw·h', price: '20元' },
        { weight: '20 kw·h', price: '25元' }
      ]
    }
  },
  methods: {
    tab (index) {
      this.activeIndex = index
    },
    tab1 (index) {
      this.activeIndex1 = index
    },
    tabIndex () {
      this.activeIndex = 6
    },
    tabIndex1 () {
      this.activeIndex1 = 6
    }
  }
}
</script>
<style scoped>
.water {
  flex: 1;
  background-color: rgba(253, 253, 253, 1);
  position: relative;
}
.w_box1 {
  padding: 24px 16px 20px 20px;
  background-color: rgba(253, 253, 253, 1);
}
.w_name {
  font-size: 32px;
  font-family: "SimHei";
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 40px;
  margin: 14px 0;
}
.moduel {
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
.w_box {
  margin: 20px 0 0 0;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: rgba(227, 227, 227, 1);
  border-width: 1px;
  width: 220px;
  height: 108px;
}
.active {
  margin: 20px 0 0 0;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-color: rgba(110, 207, 243, 1);
  border-width: 2px;
  width: 220px;
  height: 108px;
}
.w_weight {
  font-size: 36px;
  font-family: "SimHei";
  font-weight: 400;
  color: rgba(46, 46, 46, 1);
  line-height: 40px;
}
.w_price {
  font-size: 26px;
  font-family: "SimHei";
  font-weight: 400;
  color: rgba(143, 143, 143, 1);
  line-height: 40px;
}
.dingyi {
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-family: "SimHei";
  font-weight: 400;
  color: rgba(46, 46, 46, 1);
  line-height: 40px;
}
.w_btn {
  width: 750px;
  height: 96px;
  background-color: rgba(47, 145, 255, 1);
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}
.w_tct {
  font-size: 36px;
  font-family: "DengXian";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
</style>
