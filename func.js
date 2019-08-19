const request = require('request');
const sleep = require('sleep-async')();
require('dotenv').config();

/**
 * APIコール用のリクエストヘッダ
 */
const requestConfig = (uri, jsonData) => {
    return {
        uri: uri,
        headers: { 'Content-type': 'application/json' },
        json: jsonData
        // json: {
        //     // JSONをPOSTする場合書く
        //     'id': 1,
        //         'text': 'bbb'
        // }
    };
}

exports.testJson = (res) => {
    return res.json({
        message: "Hello,world"
    });
}

exports.testRouteJson = (res) => {
    return res.json({
        message: "Hello World!!!"
    });
}

exports.call = (res) => {
    request.post(
        requestConfig(process.env.uri,
            { 'id': '1', 'text': 'abc' }),
        (err, req, data) => {
            console.log(err);
            console.log(data);
            console.log(data["text"]);
        }
    )
    return res.json({
        message: "success calling."
    });
}

exports.callUrl = (req, res) => {
    console.log('calling...')

    sleep.sleep(time - 0, function () {
        request.post(
            requestConfig(req['target'],
                {}),
            (err, req, data) => {
                console.log('finish');
                console.log(err);
                console.log(data);
            }
        )
    });


    return res.json({
        message: "success calling."
    });
}
