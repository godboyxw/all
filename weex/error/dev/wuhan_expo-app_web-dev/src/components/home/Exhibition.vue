<template>
  <div class="exhibition">
    <div class="box" />
    <div class="e_nav">
        <div class="e_left" @click="back">
            <image style="width:50px;height:40px;" src="src/images/left.png"/>
        </div>
        <div class="e_ti">
            <text class="e_txts">展会信息</text>
        </div>
    </div>
    <list class="list">
      <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <div class="bubble">
          <text @click="change(index)" :class="active===index ? 'active' : 'txt'"  v-for="(item, index) in arr" :key="index">{{ item }}</text>
        </div>
      </refresh>
      <cell @click="jump(item)" class="item" style="margin-bottom: 10px;" v-for="(item, index) in arrItem" :key="index">
        <image class="img" :src="item.img" />
        <div class="column">
          <text class="title">{{ item.title }}</text>
          <div class="tel">
            <text class="phone">联系方式:</text>
            <text class="phone">{{ item.phone }}</text>
          </div>
          <div class="clear">
            <div class="btn">
              <text class="text">导航</text>
            </div>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>
<script>
export default {
  name: 'Echibition',
  data () {
    return {
      active: 0,
      refreshing: false,
      arrItem: [
        {
          img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=296697024,2862811016&fm=202&mola=new&crop=v1',
          title: 'Amazon展商',
          phone: '628-030927'
        },
        {
          img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1831666713,3372574273&fm=202&mola=new&crop=v1',
          title: 'DAPPEH DOGS展商',
          phone: '628-030927'
        },
        {
          img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=971713667,3923876220&fm=202&mola=new&crop=v1',
          title: 'Amazon展商',
          phone: '628-030927'
        },
        {
          img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3859606235,3366875836&fm=58&bpow=1280&bpoh=853',
          title: 'Amazon展商',
          phone: '628-030927'
        },
        {
          img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1495910729,272474942&fm=58&s=F823717EC983E7747CA3AFAC0300E048&bpow=121&bpoh=75',
          title: 'Amazon展商',
          phone: '628-030927'
        }
      ],
      arr: ['全部', '数码', '汽车', '生活', '其他']
    }
  },
  methods: {
    change (index) {
      this.active = index
    },
    back () {
      this.$router.push('/')
    },
    jump (item) {
      this.$router.push({
        name: 'ExhibitionDetail',
        params: {
          obj: item
        }
      })
    },
    onrefresh (event) {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 2000)
    },
    onpullingdown (event) {
    //   console.log('dy: ' + event.dy)
    //   console.log('pullingDistance: ' + event.pullingDistance)
    //   console.log('viewHeight: ' + event.viewHeight)
    //   console.log('type: ' + event.type)
    }
  }
}
</script>
<style scoped>
.exhibition {
  flex: 1;
  background-color: #F3F3F3;
}
.e_nav {
    flex-direction: row;
    position: absolute;
    top: 50px;
    left: 15px;
}
.e_left {
    width:80px;
    height:60px;
    justify-content: center;
    align-items: center;
}
.e_ti {
    margin-left: 20px;
    justify-content: center;
}
.e_txts {
    font-size:36px;
    font-family:'MicrosoftYaHei';
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:40px;
}
.refresh {
    width: 750px;
    height: 100px;
    background-color: #EEEEEE;
}
.box {
    width: 750px;
    height: 500px;
    background:linear-gradient(0deg,rgba(76,187,250,1) 0%,rgba(127,132,255,1) 78%);
}
.bubble {
    flex-direction: row;
    padding: 20px;
    padding-left: 0px;
}
.txt {
    background-color:rgba(189,211,255,1);
    border-radius: 25px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 30px;
}
.active {
    border-radius: 25px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 30px;
    background-color:rgba(127,132,255,1);
}
.list {
    background-color: #F3F3F3;
}
.item {
    background-color: #ffffff;
    flex-direction: row;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.img {
    width: 260px;
    height: 200px;
    border-radius: 20px;
    margin-right: 50px;
}
.column {
    flex: 1;
    justify-content: space-between;
}
.title {
    font-size: 36px;
    font-family: 'SourceHanSansCN-Regular';
    font-weight: 400;
    color: rgba(63,63,63,1);
}
.tel {
    flex-direction: row;
}
.phone {
    font-size: 24px;
    font-family: 'SourceHanSansCN-Regular';
    font-weight: 400;
    color: rgba(171,171,171,1);
    margin-left: 15px;
}
.clear {
    align-items: flex-end;
}
.btn {
    width:140px;
    height:60px;
    background-color: rgba(8,117,209,1);
    border-radius: 30px;
    justify-content: center;
    align-items: center;
}
.text {
    font-size: 30px;
    font-family: 'Adobe Heiti Std R';
    font-weight: normal;
    color:rgba(255,255,255,1);
}
</style>
