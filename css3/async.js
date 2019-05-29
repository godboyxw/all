const axios = require('axios')

function f1() {
    // axios.get('http://localhost:8990/map/style/data/id/name/test.json').then(res=>{
    //     console.log(res.data);
    // }) //异步,不会阻塞后续代码执行

    // console.log('f1'); //同步任务

    setTimeout(function () {
        console.log('f1 耗时任务');
    }, 3000)
}

// function f2 (){
//     console.log('f2');
// }

// f1() //f1
// f2() //f2
/*
function f2(){
    f1()
    console.log('f2');
}
f2()

f2
f1 耗时任务
*/




// //定义主函数，回调函数作为参数
// function A(callback) {
//     callback();  
//     console.log('我是主函数');      
// }

// //定义回调函数
// function B(){
//     setTimeout(function(){
//         console.log('我是回调函数')
//     }, 3000);//模仿耗时操作  

//     // console.log('回调');


// }

// //调用主函数，将函数B传进去
// A(B);

// //输出结果
// // 我是主函数
// // 我是回调函数


function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve({
        "id": 1,
        "name": '张三'
    }), ms));
}

function test () {
    
    return {
        "id": 1,
        "name": '张三'
    }
}
async function getdata(callback) {
    //这里我们假设是从后端获取数据
    setTimeout(function(){
        //假设我们获取到数据info
        var info = {
         "id":1,
         "name":'张三'
        }
        //得到数据以后执行函数方法
        // callback(info)//这个就是回调函数
        // check(info)
       },1000)

    // info = await test()
    // // info = await timeout(1000)
    // console.log(info);
    // callback(info) //这个就是回调函数
}

function check(data) {
    if (data.id == 1) {
        console.log('验证成功，可以通过')
    }
}
getdata(check)