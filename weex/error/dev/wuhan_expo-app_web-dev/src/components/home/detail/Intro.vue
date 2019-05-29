<template>
    <div class="mess">
        <text class="txt1">索尼公司是世界上民用及专业视听产品、游戏产品、通信产品、核心部件和信息技术等领域的创新先导之一，加之在音乐、影视互动娱乐以及在线业务方面的成就，索尼成为全球领先的电子和娱乐公司。公司在截止到2017年3月31日结束的2016财年中的合并销售额达678.86亿美元，实现营业利润25.78亿美元。</text>
        <div class="third">
            <div class="box1">
                <text class="name">展会负责人</text>
                <text class="tel">张先生：1938475984</text>
            </div>
        </div>
        <div class="four">
            <div class="box2">
                <text class="ti">展会地图</text>
                <div class="map">
                  <image style="height: 400px;" src="https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=296697024,2862811016&fm=202&mola=new&crop=v1"/>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="box3">
                <div class="left11">
                <text class="tt">商业洽谈</text>
                </div>
                <div class="right11">
                <image class="imgs" src="src/images/kefu.png"/>
                <text style="width: 20px;"></text>
                <text class="mm">客服</text>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.mess {
  flex: 1;
  background-color: #EEEEEE;
}
.txt1 {
  padding: 20px;
  text-indent: 0.8rem;
  font-size:30px;
  font-family:'SourceHanSansCN-Regular';
  font-weight:400;
  color:rgba(85,85,85,1);
  line-height:50px;
  background-color: #ffffff;
}
.third {
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
}
.box1 {
  flex-direction: column;
  align-items: flex-start;
}
.name {
  font-size:30px;
  font-family:'SourceHanSansCN-Medium';
  font-weight:700;
  color:rgba(55,55,55,1);
  margin-bottom: 5px;
}
.tel {
  margin-top: 5px;
  font-size:24px;
  font-family:'SourceHanSansCN-Regular';
  font-weight:400;
  color:rgba(152,152,152,1);
}
.four {
  margin-top: 20px;
  background-color: #ffffff;
  padding: 20px;
}
.ti {
  font-size:30px;
  font-family:'SourceHanSansCN-Medium';
  font-weight:700;
  color:rgba(55,55,55,1);
  margin-bottom: 10px;
}
.footer {
  position: fixed;
  bottom: 0px;
  flex: 1;
  width: 750px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
}
.box3 {
  flex-direction: row;
}
.left11 {
  width:328px;
  height:89px;
  background:rgba(29,141,243,1);
  border:1px solid rgba(219,236,245,1);
  box-shadow:0px 2px 10px 0px rgba(228,234,246,1);
  border-radius: 44px 0px  0px 44px;
  justify-content: center;
  align-items: center;
}
.right11 {
  width:328px;
  height:84px;
  background:rgba(255,255,255,1);
  border:1px solid rgba(29,141,243,1);
  border-left: none;
  border-radius:0px 44px 44px 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.tt {
  font-size:32px;
  font-family:'Adobe Heiti Std R';
  font-weight:normal;
  color:rgba(255,255,255,1);
  line-height:40px;
}
.mm {
  font-size:32px;
  font-family:'Adobe Heiti Std R';
  font-weight:normal;
  color:rgba(102,102,102,1);
  line-height:40px;
}
</style>
