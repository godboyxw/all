<template>
    <div class="list">
        <header :title="'展具租赁'"/>
        <div class="bac">
            <image style="width: 750px;height: 360px;" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3574994506,669675904&fm=27&gp=0.jpg"/>
        </div>
        <div class="tab">
            <text class="txt" :class="active === index ? 'active' : ''" v-for="(item, index) in arr" :key="index" @click="tab(index)">{{ item }}</text>
        </div>
        <div :is="currentView"></div>
        <div class="cart">
            <div class="c_left" @click="showCart">
                <image style="width:48px;height:40px" src="src/images/cart.png" />
            </div>
            <div class="c_right">
                <image style="width:48px;height:40px" src="src/images/notice.png" />
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../common/Header.vue'
import Desk from './rent/Desk.vue'
import Fire from './rent/Fire.vue'
import Tree from './rent/Tree.vue'
import Others from './rent/Others.vue'
export default {
  data () {
    return {
      active: 0,
      showFlag: false,
      obj: {},
      currentView: Desk,
      arr: ['桌椅', '绿植', '消防', '其他']
    }
  },
  methods: {
    jump () {
      this.$router.push('/')
    },
    tab (index) {
      this.active = index
      switch (index) {
        case 0: this.currentView = Desk; break
        case 1: this.currentView = Tree; break
        case 2: this.currentView = Fire; break
        case 3: this.currentView = Others; break
        default: break
      }
    },
    showCart () {
      this.$router.push('/cart')
    }
  },
  components: {
    Header
  }
}
</script>
<style scoped>
.list {
    width: 750px;
    background-color: #EEEEEE;
}
.bac {
    width: 750px;
    height: 360px;
}
.tab {
    width: 750px;
    height: 90px;
    background-color: #ffffff;
    flex-direction: row;
    align-items: center;
}
.txt {
    font-size: 28px;
    font-family: 'SourceHanSansCN-Regular';
    font-weight: 400;
    color:rgba(85,85,85,1);
    margin-left: 50px;
    margin-right: 25px;
    padding: 15px 0;
}
.active {
    font-size: 28px;
    font-family: 'Adobe Heiti Std R';
    font-weight :normal;
    color:rgba(8,117,209,1);
    border-bottom-color: rgba(8,117,209,1);
    border-bottom-style: solid;
    border-bottom-width: 2px;
}
.cart {
    width: 200px;
    height: 88px;
    background:rgba(56,62,74,1);
    border-radius: 20px;
    position: fixed;
    bottom: 60px;
    left: 10px;
    flex-direction: row;
    align-items: center;
}
.c_left {
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-right-style: solid;
    border-right-color: rgba(93,93,93,1);
    border-right-width: 1px;
}
.c_right {
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
