#! /usr/bin/env node

"use strict";

var request = require("request"),
    path = require("path"),
    P = require("bluebird"),
    certFile = path.resolve(__dirname, "client.crt"),
    keyFile = path.resolve(__dirname, "client.key"),
    //caFile = path.resolve(__dirname, "ssl/ca.cer.pem"),
    fs = require("fs");




module.exports = {

    // getAuth() {





    //     request("https://180.101.149.140:8743/iocm/app/sec/v1.1.0/login", function (error, response, body) {
    //         console.log("mango1")
    //         if (!error && response.statusCode == 200) {
    //             console.log(body) // 打印google首页
    //         }
    //     });
    // }

    post: function(url, data, callback) {

        var options = this.getCert();
        options.url = url;
        options.form = data;
        return new P(function(resolve, reject) {

            resolve({})
        });

        request.post(options, callback);
    },

    // extend(des, src, override) {
    //     if (src instanceof Array) {
    //         for (var i = 0, len = src.length; i < len; i++)
    //             this.extend(des, src[i], override);
    //     }
    //     for (var i in src) {
    //         if (override || !(i in des)) {
    //             des[i] = src[i];
    //         }
    //     }
    //     return des;
    // }

    getCert: function() {
        return {
            cert: fs.readFileSync(certFile),
            key: fs.readFileSync(keyFile),
            rejectUnauthorized: false
        };
    }
};