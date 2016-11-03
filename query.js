var request = require('request');
var querystring = require("querystring");

var settings = require("./settings.js");


var get = function (args, callback) {
    args.format = "json"; // we will always expect JSON

    var options = {
        uri: settings.endpoint,
        qs: args,
        form: args,
        jar: true,
        headers: {
            "User-Agent": settings.userAgent
        }
    };

    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log("get: "+response.request.uri.href);

            processResponse(body, callback);
        } else {
            callback(new Error(response.statusCode), null);
        }
    });
};

var post = function (args, body, callback) {
    args.format = "json"; // we will always expect JSON


    var options = {
        uri: settings.endpoint,
        qs: args,
        form: args,
        jar: true,
        headers: {
            "User-Agent": settings.userAgent,
            'content-type': 'application/x-www-form-urlencoded'
        }
    };

    if (body != null) {
        body = querystring.stringify(body);
        var bodyLength = body.length;
        options.body = body;
        options.headers["Content-Length"] = bodyLength;
    }

    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //console.log("post: "+response.request.uri.href);
            //console.log(JSON.stringify(response));
            processResponse(body, callback);
        } else {
            callback("error: " + response.statusCode, null);
        }
    });
};


// process an API response
function processResponse(body, callback) {
    var data = {};
    try {
        data = JSON.parse(body);
    } catch (err) {
        callback(err, null);
        return;
    }

    callback(null, data);
}

module.exports = {
    "post": post,
    "get": get
};
