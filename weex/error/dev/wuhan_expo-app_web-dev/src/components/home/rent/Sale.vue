<template>
    <div class="sale">
        <div class="ceng" />
        <div class="bb">
             <div class="box1">
                <div>
                    <image class="imgs" :src="img" />
                </div>
                <div class="info">
                    <text class="txt txt1">￥{{ price }}</text>
                    <text class="txt txt2">库存{{ stack }}件</text>
                    <text class="txt txt3">选择 高度,数量</text>
                </div>
                <div @click="close">
                    <image style="width:30px;height:30px" src="src/images/cha.png" />
                </div>
            </div>
            <div class="hei">
                <div class="title">
                    <text>高度</text>
                </div>
                <div class="len">
                    <div class="bo" :class="activeIndex === index ? 'active' : ''"  v-for="(item, index) in len" :key="index" @click="tab(index)">
                        <text class="txts" :class="activeIndex === index ? 'activeText' : ''">{{ item }}</text>
                    </div>
                </div>
            </div>
            <div class="hei">
                <div class="title">
                    <text>数量</text>
                </div>
                <div class="len">
                    <div class="bo" :class="activeIndexs === index ? 'active' : ''"  v-for="(item, index) in lenArr" :key="index" @click="tabs(index)">
                        <text class="txts" :class="activeIndexs === index ? 'activeText' : ''">{{ item }}</text>
                    </div>
                    <div class="bo bos" :class="activeIndexs === 4 ? 'active' : ''"  @click="tabss">
                        <text class="txts" :class="activeIndexs === 4 ? 'activeText' : ''">自定义盆数</text>
                    </div>
                </div>
            </div>
            <div class="foote">
                <div class="btn">
                    <text class="nn">确定</text>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 0,
      activeIndexs: 0,
      stack: 214,
      price: 1200,
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547002969&di=1c34b2cde2c59451a9c626988a78da7e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg7.cntrades.com%2F201407%2F08%2F16-01-12-55-833386.jpg',
      len: ['0.8m~1.0m', '1.0m~1.2m', '1.2m~1.5m'],
      lenArr: ['10盆', '20盆', '30盆']
    }
  },
  methods: {
    tab (index) {
      this.activeIndex = index
    },
    tabs (index) {
      this.activeIndexs = index
    },
    tabss () {
      this.activeIndexs = 4
    },
    close () {
      this.$router.push('/rent')
    }
  }
}
</script>
<style scoped>
.sale {
    flex: 1;
}
.ceng {
    flex: 1;
    background-color: rgba(0, 0, 0, 0.6);
}
.bb {
    width: 750px;
    height:954px;
    background:rgba(255,255,255,1);
    border-radius:10px 10px 0px 0px;
    align-items: center;
}
.box1 {
    width: 710px;
    padding: 30px 0 60px 0;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: rgba(238,238,238,1);
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.imgs {
    width:250px;
    height:260px;
    border-radius:10px;
    position: absolute;
    top: -80px;
}
.info {
    justify-content: space-around;
    margin-left: 150px;
}
.txt {
    margin-bottom: 15px;
    font-weight:400;
    font-family:'SourceHanSansCN-Regular';
}
.txt1 {
    font-size:40px;
    color:rgba(255,79,0,1);
}
.txt2 {
    font-size:26px;
    color:rgba(153,153,153,1);
}
.txt3 {
    font-size:26px;
    color:rgba(153,153,153,1);
}
.hei {
    width: 700px;
    padding-bottom: 40px;
    border-bottom-color: rgba(238,238,238,1);
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.title {
    padding: 40px 0 25px 10px;
}
.len {
    flex-direction: row;
    width: 680px;
    justify-content: space-between;
    margin-left: 10px;
    flex-wrap: wrap;
}
.bo {
    width:180px;
    height:66px;
    background-color:rgba(245,245,245,1);
    border-radius:10px;
    justify-content: center;
    align-items: center;
}
.bos {
    margin-top: 25px;
}
.txts {
    font-size:26px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(51,51,51,1);
}
.activeText {
    color:rgba(255,255,255,1);
}
.active {
    background:rgba(29,141,243,1);
    border-radius: 10px;
    color:rgba(255,255,255,1);
}
.foote {
    width: 750px;
    height: 90px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
}
.btn {
    width:620px;
    height:90px;
    background-color:rgba(29,141,243,1);
    border-radius:45px;
    justify-content: center;
    align-items: center;
}
.nn {
    font-size:36px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:500;
    color:rgba(255,255,255,1);
}
</style>
