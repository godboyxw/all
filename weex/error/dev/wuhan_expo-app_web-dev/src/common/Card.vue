<template>
    <div class="list">
        <div class="shop">
            <div class="box" v-for="(item, index) in obj" :key="index">
                <div class="top">
                    <image style="width:340px;height:240px;" :src="item.img" resize="stretch"/>
                </div>
                <div class="bottom">
                    <text class="b_title">{{ item.title }}</text>
                    <div class="sale">
                        <text class="t1">租5送2</text>
                        <text class="t2">租7送3</text>
                    </div>
                    <div class="price">
                        <text class="rent">租赁价：</text>
                        <text class="r_price">¥{{item.price}}</text>
                        <text class="r_day">元/天</text>
                    </div>
                    <div class="btn" @click="sale(item)">
                        <text class="b_txt">立即租赁</text>
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
      default: () => {
        return []
      }
    }
  },
  methods: {
    sale (obj) {
      console.log(obj)
      this.$router.push('/sale')
    }
  }
}
</script>
<style scoped>
.list {
    width: 750px;
    background-color: #EEEEEE;
}
.shop {
    padding: 10px;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
.box {
    width:340px;
    height:428px;
    background:rgba(155,194,228,1);
    border-radius:20px;
    margin: 0 10px 20px 10px;
}
.top {
    width:340px;
    height:240px;
    background:rgba(255,255,255,1);
    border-radius:10px 10px 0px 0px;
    justify-content: center;
    align-items: center;
}
.bottom {
    width:328px;
    height:188px;
    background:rgba(155,194,228,1);
    border-radius: 0 0 10px 10px;
    justify-content: space-around;
    align-items: center;
}
.b_title {
    font-size:24px;
    font-family:'Adobe Heiti Std R';
    font-weight:normal;
    color:rgba(255,255,255,1);
}
.sale {
    flex-direction: row;
}
.t1 {
    font-size:24px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(251,80,83,1);
    margin-right: 10px;
}
.t2 {
    font-size:24px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(251,80,83,1);
    margin-left: 10px;
}
.price {
    flex-direction: row;
}
.rent {
    font-size:26px;
    font-family:'Adobe Heiti Std R';
    font-weight:normal;
    color:rgba(255,255,255,1);
}
.r_price {
    font-size:26px;
    font-family:'Adobe Heiti Std R';
    font-weight:normal;
    color:#FB5053;
}
.r_day {
    font-size:26px;
    font-family:'Adobe Heiti Std R';
    font-weight:normal;
    color:rgba(255,255,255,1);
}
.btn {
    width:200px;
    height:50px;
    background:rgba(251,80,83,1);
    border-radius:25px;
    justify-content: center;
    align-items: center;
}
.b_txt {
    font-size:24px;
    font-family:'Adobe Heiti Std R';
    font-weight:normal;
    color:rgba(238,238,238,1);
}
</style>
