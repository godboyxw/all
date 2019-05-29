<template>
    <div class="feedback">
        <header :title="'建议反馈'"/>
        <div class="tel">
            <div class="box">
                <div class="t_left">
                    <div class="t_tel">
                        <text class="t_txt1">电话</text>
                    </div>
                    <div class="t_num">
                        <text class="t_txt2">88888888</text>
                    </div>
                </div>
                <div class="t_right">
                    <text class="t_txt3">拨打</text>
                </div>
            </div>
        </div>
        <div class="adjust">
            <text class="a_txt">请输入详细的问题和意见</text>
        </div>
        <div class="input">
            <input type="text" placeholder="请输入不少于十个字的描述" class="i_txt"  value="" @change="onchange" @input="oninput" />
        </div>
    </div>
</template>
<script>
import Header from '../../common/Header.vue'
export default {
  components: {
    Header
  },
  methods: {
    onchange () {},
    oninput () {}
  }
}
</script>
<style scoped>
.feedback {
    flex: 1;
    background-color: #F5FAFF;
}
.tel {
    width: 750px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
}
.box {
    width: 670px;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}
.t_left {
    flex-direction: row;
    align-items: center;
}
.t_tel {
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 50px;
    background-color: rgba(34,111,214,1);
    border-radius:10px;
    margin-right: 15px;
}
.t_txt1 {
    font-size:40px;
    font-family:'HYi4gj';
    font-weight:400;
    color:rgba(255,255,255,1);
}
.t_num {
    margin-left: 15px;
}
.t_txt2 {
    font-size:26px;
    font-family:'MicrosoftYaHei';
    font-weight:400;
    color:rgba(163,160,160,1);
}
.t_right {

}
.t_txt3 {
    font-size:26px;
    font-family:'MicrosoftYaHei';
    font-weight:400;
    color:rgba(84,174,255,1);
}
.adjust {
    padding: 20px 0 20px 25px;
}
.a_txt {
    font-size:28px;
    font-family:'SourceHanSansCN-Regular';
    font-weight:400;
    color:rgba(153,153,153,1);
}
.input{
    width: 750px;
    height: 300px;
    background-color: #ffffff;
}
.i_txt {
    width: 750px;
    height: 300px;
    outline: none;
    font-size:32px;
    font-family:'Adobe Heiti Std R';
    font-weight:normal;
    color:rgba(99,99,99,1);
    padding-left: 25px;
    padding-top: 25px;
}
</style>
