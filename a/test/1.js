//const settings = require('./settings');
var express = require('express');
var request = require('request');
var sha1 = require('sha1');
var app = express();
var port = 8087;
var appid = 'wxc45985ad938f76f2';
//var appsecret = '5224eac4082fb12728ac9b171be35562';

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var page = req.query.url;
    console.log(page)
    var t = {};
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxc45985ad938f76f2&secret=5224eac4082fb12728ac9b171be35562'
    //2、获取access_token;
    request.get(url, function (err, response, body) {
        token = JSON.parse(body);
        console.log(token)
        var ticketUrl = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token.access_token + '&type=jsapi';

        //3、获取ticket并且生成随机字符串,时间戳,签名
        request.get(ticketUrl, function (err, response, ticket) {
            var data = JSON.parse(ticket);
            var _callback = req.query.callback;
            var timestamp = parseInt(new Date().getTime() / 1000);
            t.ticket = data.ticket;
            t.noncestr = sha1(new Date());
            t.timestamp = timestamp;
            t.token = "111111"
            var string = 'jsapi_ticket=' + t.ticket + '&noncestr=' + t.noncestr + '&timestamp=' + timestamp + '&url=' + page
            t.signature = sha1(string);
            t.appid = 'wxc45985ad938f76f2'
            console.log(t)
            res.json(t)
            // if (_callback) {
            //     res.send(_callback + '(' + JSON.stringify(t) + ')');
            // } else {
            //     res.json(t);
            // }
            // console.log(t)
        });
    });
});

var server = app.listen(port, function () {
    var host = server.address().address
    console.log(host)
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})