<template>
    <div class="order">
        <header :title="'展位预约'"/>
        <div class="tab">
            <div class="left" @click="tab1">
                <text :class="index1 ? 'active' : 'txt'">场馆档期预约</text>
            </div>
            <div class="right"  @click="tab2">
                <text :class="index2 ? 'active' : 'txt'">展馆考察预约</text>
            </div>
        </div>
        <forms v-show="show1"/>
        <formss v-show="show2"/>
    </div>
</template>
<script>
import Header from '../../common/Header.vue'
import Forms from './order/Form.vue'
import Formss from './order/Forms.vue'
export default {
  components: {
    Header,
    Forms,
    Formss
  },
  data () {
    return {
      index1: true,
      index2: false,
      show1: true,
      show2: false
    }
  },
  methods: {
    tab1 () {
      this.index1 = true
      this.index2 = false
      this.show1 = true
      this.show2 = false
    },
    tab2 () {
      this.index1 = false
      this.index2 = true
      this.show1 = false
      this.show2 = true
    }
  }
}
</script>
<style scoped>
.order {
    flex: 1;
    background-color: #EEEEEE;
}
.tab {
    padding: 30px 50px;
    background-color: #ffffff;
    flex-direction: row;
    border-top-color: #EEEEEE;
    border-top-style: solid;
    border-top-width: 0.02px;
}
.left {
    flex: 1;
    justify-content: center;
    align-items: center;
}
.txt {
    font-size:28px;
    font-family:'Adobe Heiti Std R';
    font-weight:normal;
    color:rgba(154,154,154,1);
}
.active {
    font-size:32px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(29,141,243,1);
}
.right {
    flex: 1;
    justify-content: center;
    align-items: center;
}
</style>
