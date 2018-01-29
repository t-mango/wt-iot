#! /usr/bin/env node

"use strict";



//注册设备
var auth = require("./auth/index");
var req = require("request");
var https = require("./http/index");


auth.auth("https://180.101.149.140:8743/iocm/app/sec/v1.1.0/login", {
    "appId": "OhYFDUqTQvJD6wzb1NWFWb4KhVwa",
    "secret": "sA2BQ1oGZsDV3BPTohibXxkLsiga"
}).then((data) => {
    console.log(data);

    var opt = https.getCert();

    opt.url = "https://180.101.149.140:8743/iocm/app/reg/v1.2.0/devices?appId=OhYFDUqTQvJD6wzb1NWFWb4KhVwa";

    opt.method = "POST";
    opt.headers = {
        "User-Agent": "request",
        "app_key": "OhYFDUqTQvJD6wzb1NWFWb4KhVwa",
        "Authorization": "Bearer " + data.data.accessToken,
        "Content-Type": "application/json"
    };
    opt.body = JSON.stringify({
        "verifyCode": "111-11-222",
        "nodeId": "12345678890",
        "appId": "OhYFDUqTQvJD6wzb1NWFWb4KhVwa"
    });

    req(opt, (err, rep, body) => {

        console.log(body);
        console.log(err);
    });

}, (err) => {
    console.log(err);
});