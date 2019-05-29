<template>
    <div class="display">
        <div class="input">
            <input type="text" placeholder="输入你喜欢的商品" class="input1" :autofocus=true value="" @change="onchange" @input="oninput"/>
            <div class="all">
                <div class="clear" @click="showFlag">
                    <text class="txt">全部</text>
                    <image src="src/images/up.png" style="width:50px;height: 50px;"/>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px;height: auto;width: 710px;">
            <div class="shop">
                <div class="box" v-for="(item, index) in arr" :key="index"  @click="jump(item)">
                    <image class="img" :src="item.img" resize="stretch" />
                    <text class="name">{{ item.name }}</text>
                </div>
            </div>
        </div>
        <div class="bo" v-show="show">
            <div class="ceng" v-for="(item, index) in arr1" :key="index">
                <text class="txts">{{ item }}</text>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      arr: [
        {
          img: 'https://paimgcdn.baidu.com/F7B3114115CFB0C5?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F403777088.jpg&rz=urar_2_968_600&v=0',
          name: '索尼a5100相机（含1...'
        },
        {
          img: 'https://paimgcdn.baidu.com/1A17CFA130D6B8FB?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1373582757.jpg&rz=urar_2_968_600&v=0',
          name: '索尼a5100相机（含1...'
        },
        {
          img: 'https://paimgcdn.baidu.com/DFE81015F3A1F36E?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1373916554.jpg&rz=urar_2_968_600&v=0',
          name: '索尼a5100相机（含1...'
        },
        {
          img: 'https://paimgcdn.baidu.com/905B6ADCFC210CB1?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1328123607.jpg&rz=urar_2_968_600&v=0',
          name: '索尼a5100相机（含1...'
        },
        {
          img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=421414498,2175136568&fm=27&gp=0.jpg',
          name: '索尼a5100相机（含1...'
        },
        {
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2668580163,1935431991&fm=27&gp=0.jpg',
          name: '索尼a5100相机（含1...'
        }
      ],
      arr1: ['潮玩科技', '家庭影像', '音响设备', '视频游戏', '数码影像', '数码配件']
    }
  },
  methods: {
    onchang () {},
    oninput () {},
    showFlag () {
      this.show = !this.show
    },
    jump (item) {
      this.$router.push({
        name: 'Detail',
        params: {
          obj: item
        }
      })
    }
  }
}
</script>
<style scoped>
.display {
    width: 750px;
    background-color: #ffffff;
    align-items: center;
}
.input {
    height: 100px;
    flex-direction: row;
    padding-left: 10px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -10px;
}
.input1 {
    width:540px;
    height:60px;
    background:rgba(241,241,241,1);
    border:1px solid rgba(187,187,187,1);
    border-radius:30px;
    outline: none;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    font-size: 24px;
}
.bo {
    position: absolute;
    top: 80px;
    right: 20px;
    height: auto;
    background-color: #ffffff;
    box-shadow:0px 2px 10px 0px rgba(28,28,28,0.25);
}
.ceng {
    width:240px;
    height:90px;
    justify-content: center;
    align-items: center;
}
.txts {
    font-size:30px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(68,68,68,1);
}
.all {
    justify-content: center;
}
.clear {
    width: 160px;
    height: 60px;
    align-items: center;
    flex-direction: row;
}
.txt {
    font-size:28px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(85,85,85,1);
    padding-left: 30px;
    padding-right: 20px;
}
.shop {
    width: 710px;
    flex-direction: row;
    flex-wrap: wrap;
}
.box {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    margin-top: 10px;
}
.img {
    width:330px;
    height:330px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    border-radius:10px;
}
.name {
    font-size:28px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(68,68,68,1);
    margin-top: 10px;
    margin-bottom: 15px;
}
</style>
