const request = require('request');

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
        {
            uri: process.env.uri,
            headers: { 'Content-type': 'application/json' },
            json: {
                // JSONをPOSTする場合書く
                'id': 1,
                'text': 'bbb'
            }
        },
        (err, req, data) => {
            // console.log(req)
            console.log(data);
            console.log(data["text"]);
        }
    )
    return res.json({
        message: "success calling."
    });
}
