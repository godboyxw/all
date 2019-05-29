<template>
    <div class="mess">
        <list class="list">
            <cell @click="jump(item)" class="item" style="margin-bottom: 10px;" v-for="(item, index) in arrItem" :key="index">
                <image class="img" :src="item.img" />
                <div class="column">
                <text class="title">{{ item.title }}</text>
                <div class="tel">
                    <text class="phone">联系方式:</text>
                    <text class="phone">{{ item.phone }}</text>
                </div>
                    <div class="btn">
                        <text class="text">查看展品</text>
                    </div>
                </div>
            </cell>
        </list>
    </div>
</template>
<script>
export default {
  data () {
    return {
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
          img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=971713667,3923876220&fm=202&mola=new&crop=v1',
          title: 'Amazon展商',
          phone: '628-030927'
        },
        {
          img: 'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=971713667,3923876220&fm=202&mola=new&crop=v1',
          title: 'Amazon展商',
          phone: '628-030927'
        }
      ]
    }
  }
}
</script>
<style scoped>
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
  .btn {
    width:160px;
    height:50px;
    background-color:#ffffff;
    justify-content: center;
    align-items: center;
    border:1px solid rgba(29,141,243,1);
    border-radius:25px;
  }
  .text {
    font-size:24px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(29,141,243,1);
  }
</style>
