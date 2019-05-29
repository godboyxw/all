let request = require('request');
let url = "https://tapi.jingtum.com/v2/accounts/jsQzfc74ZN9wRxXVSWLTWaTBmbUvXK/pants";

request({
    method: "POST",
    url: url,
    headers: {
        "content-type": "application/json"
    },
    body: {
        "secret": "shmhGGpQ9djjYwAkRf3FswoVzFT",
        "client_id": "fnwtest203190007",
        "payment": {
            "source": "jsQzfc7WLZWTmTWaTBmbUvXK",
            "destination": "jwCPxksQzs3oo8doqb5YmvxFJsFbda",
            "amount": {
                "value": "0.01",
                "currency": "SWT",
                "issuer": ""
            },
            "choice": "",
            "memos": ["hello world", "aaaaa"]
        }
    },
    json: true //这个针对body是不是支持json

}, (error, response, body) => {
    console.log(body);


})