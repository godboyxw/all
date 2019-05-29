// // const axios = require('axios')


// // const apiGetAccounts2 = async () => {
// //     return new Promise((resolve, reject) => {
// //         axios.get('http://localhost:8990/map/style/list').then(res => {
// //             // console.log(res);
// //             resolve(res.data.data)
// //         })
// //     })

// // }

// // const apiGetAccounts = (method, url, data) => {
// //     return axios({
// //         method: method,
// //         url: url,
// //         data: data
// //     })
// // }

// const ajax = (method, url) => {
//     return new Promise((resolve, reject) => {
//         var xhr = new XMLHttpRequest()
//         xhr.open(method, url, true)
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4) { //其他的readyState排除在外,4: 请求已完成，且响应已就绪
//                 if (xhr.status == 200) { //200: "OK"
//                     try {
//                         var res = JSON.parse(xhr.responseText);
//                         console.log(res); //{status: "OK", data: Array(26)}
//                         resolve(res)
//                     } catch (err) {
//                         console.log(err);
//                         reject(err)
//                     }
//                 } else { //404: 未找到页面
//                     console.log({
//                         status: this.status,
//                         response: xhr.readyState,
//                         data: this.responseText,
//                         code: '请求数据失败'
//                     });
//                     reject(new Error(xhr.statusText));
//                 }
//             }
//         }
//         xhr.send()
//     })
// }

// ajax('GET', 'http://localhost:8990/map/style/list').then(res => {
//     console.log(res); //{status: "OK", data: Array(26)}
// })

// const apiRequest = async () => {
//     var result = await ajax('GET', 'http://localhost:8990/map/style/list')
//     console.log(result); //{status: "OK", data: Array(26)}
// }
// apiRequest()



// apiGetAccounts('get', 'http://localhost:8990/map/style/list')
//     .then(lists => {
//         console.log(lists.data.data);
//         lists = lists.data.data
//         Promise.all(lists.map(item => {
//             return apiGetAccounts('get', `http://localhost:8990/map/style/data/id/name/${item}`)
//         })).then(res => {
//             console.log(Array.isArray(res)); //true
//             res = res.map(item => item.data)
//             console.log(res, res.length); //26
//         })
//     })

// // async 函数里可以出现 await 关键字，await 会等到 Promise 对象完成任务，然后再执行下一句话
// const makeRequest = async () => {
//     var lists = await apiGetAccounts('get', 'http://localhost:8990/map/style/list')
//     lists = lists.data.data
//     console.log(lists);
//     var res = await Promise.all(lists.map(item=>apiGetAccounts('get', `http://localhost:8990/map/style/data/id/name/${item}`)))
//     res = res.map(item=>item.data)
//     console.log(res,res.length);
// }
// makeRequest()

[1, 2, 3].map((x) => {
    [4, 5, 6].map((y) => {
        [7, 8, 9].map((z) => {
            console.log(x, y, z);
        })
    })
});

// function* gen(x) {
//     var y = yield x + 2;
//     return 10;
// }

// var g = gen(1);
// console.log(g.next()) // { value: 3, done: false }
// console.log(g.next()) // { value: 10, done: true }
// console.log(g.next()) //{ value: undefined, done: true }

// let aPromise = new Promise(resolve => {
//     resolve('aPromise');
// })

// console.log(aPromise); // ==> Promise {'aPromise'}


// let aPromise = new Promise(resolve => {
//     resolve('aPromise');
// })

// Promise.resolve('newPromise').then(res => {
//     console.log(res); //newPromise
//     return aPromise
// }).then((res) => {
//     console.log(res) // ==> 'aPromise'
// });


let aPromise = new Promise(resolve=>{
    resolve('aPromise');
})
// 监听promise，并打印出promise传递的值
aPromise.then(response=>{
console.log(response) //aPromise
})

async function test() {
    return "async 有什么用？";
  }
  const result = test();
  console.log(result)  //Promise { 'async 有什么用？' }