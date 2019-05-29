var request = require('request');
var fs = require('fs')
var axios = require('axios')
var jsonp = require('jsonp')
//Node.js的模块——request。有了这个模块，http请求变的超简单
//Request使用超简单，同时支持https和重定向。
request('http://www.baidu.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        //console.log(body) // 打印baidu首页
    }
})

//流-----任何响应都可以输出到文件流。   将url中地址的响应内容输出为名字为doodle.png的文件流
request('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg').pipe(fs.createWriteStream('doodle.png'))


//request.get('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=873265023,1618187578&fm=27&gp=0.jpg').pipe(request.put('http://localhost:3000/img.png'))

//fs.createReadStream('file.json').pipe(request.put('http://192.168.1.157:8000//obj.json'))
var commonParams = { // 列表参数
    method: 'baidu.ting.billboard.billList',
    type: 1,
    size: 25,
    offset: 0
}
var dataObj = { // 公共参数
    format: 'json',
    calback: '',
    from: 'webapp_music'
}
const dataMusic = Object.assign({}, commonParams, dataObj)
console.log(dataMusic)
axios({
    method: 'get',
    url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
    data: dataMusic

}).then(json => {
    console.log(json)
})

// axios.get('http://tingapi.ting.baidu.com/v1/restserver/ting', dataMusic).then(data => {
//     console.log(data)
// })