let request = require('request');
let url = 'https://api.omniexplorer.info/v1/search';


request.post(url, {
    formData: {
        query: "31sJBcB59v7FGtmpGAM9xYfecLzJkDj7Kp"
    },
    json: true
}, function (err, res, body) {
    // assert.equal(typeof body, 'object')
    console.log(body)
})
/** 
{ data: { address: { balance: [Array] }, asset: [], tx: {} },
  query: '31sJBcB59v7FGtmpGAM9xYfecLzJkDj7Kp',
  status: 200 } **/