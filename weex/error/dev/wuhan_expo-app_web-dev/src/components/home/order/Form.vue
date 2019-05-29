<template>
    <div class="list">
        <div class="input">
            <div class="in1">
                <text class="name">姓名</text>
                <input type="text" placeholder="请输入真实姓名" class="i"  value="" @change="onchange" @input="oninput"/>
            </div>
            <div class="in1">
                <text class="name">电话</text>
                <input type="text" placeholder="请输入电话号码" class="i"  value="" @change="onchange" @input="oninput"/>
            </div>
            <div class="in1">
                <text class="name">开始时间</text>
                <input type="text" placeholder="请输入电话号码" class="i"  value="" @change="onchange" @input="oninput"/>
            </div>
            <div class="in1">
                <text class="name">结束时间</text>
                <datepicker
                :format="customFormatter"
                placeholder="请选择时间"></datepicker>
            </div>
            <div class="in1">
                <text class="name">展馆</text>
                <select class="se">
                    <option value="请选择">请选择</option>
                    <option value="请选择1">请选择1</option>
                    <option value="请选择2">请选择2</option>
                    <option value="请选择3">请选择3</option>
                </select>
            </div>
            <div class="in2">
                <textarea placeholder="留言" class="i1"  value="" @change="onchange" @input="oninput"/>
            </div>
        </div>
        <div class="foot">
            <div class="left1">
                <text class="reset1">重置</text>
            </div>
            <div class="right1">
                <text class="send1">提交</text>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
export default {
  components: {
    Datepicker
  },
  data () {
    return {
      index1: true,
      index2: false,
      time: new Date(),
      startDate: '',
      endDate: '',
      minDate: {},
      maxDate: {}
    }
  },
  methods: {
    tab1 () {
      this.index1 = true
      this.index2 = false
    },
    tab2 () {
      this.index1 = false
      this.index2 = true
    },
    onchange () { },
    oninput () { },
    // 自定义时间格式
    customFormatter (date) {
      return moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>
<style scoped>
.list {
    margin-top: 15px;
    flex: 1;
    align-items: center;
    background-color: #ffffff;
}
.input {
    width: 560px;
}
.in1 {
    flex-direction: row;
    align-items: center;
    width:560px;
    padding: 25px 30px;
    border-bottom-color:rgba(153,153,153,1);
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
.in2 {
    width: 560px;
    height: 210px;
    border-style: solid;
    border-color: rgba(153,153,153,1);
    border-width: 1px;
    margin-top: 40px;
}
.i1 {
    width: 550px;
    height: 200px;
    font-size:30px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(153,153,153,1);
    padding: 30px;
    outline: none;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
.name {
    font-size:32px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(53,53,53,1);
    margin-right: 20px;
}
.i {
    height: 60px;
    font-size:28px;
    font-family:'SourceHanSansCN-Light';
    font-weight:300;
    color:rgba(153,153,153,1);
    margin-left: 20px;
    align-items: flex-end;
    outline: none;
}
.se {
    width: 150px;
    outline: none;
    font-size:28px;
    font-family:'SourceHanSansCN-Light';
    font-weight:300;
    color:rgba(153,153,153,1);
}
.foot {
    width: 750px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    flex-direction: row;
    margin-top: 60px;
}
.left1 {
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 80px;
    border-radius:40px;
    background-color: rgba(255,255,255,1);
    border-color: rgba(153,153,153,1);
    border-style: solid;
    border-width: 1px;
}
.right1 {
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 80px;
    border-radius:40px;
    background-color: rgba(29,141,243,1);
}
.reset1 {
    font-size:32px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(153,153,153,1);
}
.send1 {
   font-size:32px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(255,255,255,1);
}
</style>
