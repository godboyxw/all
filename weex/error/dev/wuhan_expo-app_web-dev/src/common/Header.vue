<template>
    <div class="header">
        <div class="lefts">
            <div class="left" @click="back">
                <image style="width:50px;height:40px;" src="src/images/zuo.png"/>
            </div>
            <div class="text">
                <text class="txts">{{ title }}</text>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.header {
    width: 750px;
    height: 96px;
    background-color: #ffffff;
    justify-content: center;
}
.lefts {
    flex-direction: row;
}
.left {
    flex: 1;
    justify-content: center;
    align-items: center;
}
.text {
    flex: 6;
    justify-content: center;
    align-items: center;
}
.txts {
    font-size:40px;
    font-family:'SourceHanSansCN-Medium';
    font-weight:500;
    color:rgba(53,53,53,1);
    margin-left: -100px;
}
</style>
