#! /usr/bin/env node

"use strict";

var https = require("./../http/index");

module.exports = {

    auth: function() {
        var data = {
            "appId": "OhYFDUqTQvJD6wzb1NWFWb4KhVwa",
            "secret": "sA2BQ1oGZsDV3BPTohibXxkLsiga"
        };
        var url = "https://180.101.149.140:8743/iocm/app/sec/v1.1.0/login";
        https.post(url, data, (err, respone, body) => {
            console.log("mango1");
            console.log(err)
            if (!err && response.statusCode === 200) {

                var json = JSON.parse(body);
                console.log(json.accessToken) // 打印google首页
            }
        });
    }
};