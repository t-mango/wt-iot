#! /usr/bin/env node

"use strict";

var request = require("request"),
    path = require("path"),
    extend = require("extend"),
    P = require("bluebird"),
    certFile = path.resolve(__dirname, "client.crt"),
    keyFile = path.resolve(__dirname, "client.key"),
    //caFile = path.resolve(__dirname, "ssl/ca.cer.pem"),
    fs = require("fs");

module.exports = {
    defaultHeaders: function() {
        return {
            headers: {
                "User-Agent": "request",
                "app_key": "OhYFDUqTQvJD6wzb1NWFWb4KhVwa",
                "Content-Type": "application/json"
            }
        };
    },
    authHeaders: function() {
        var headers = this.defaultHeaders();
        headers.headers.Authorization = `Bearer  + ${data.data.accessToken}`;
        return headers;

    },
    post: function(url, data, headers) {
        var options = this.getCert();
        options.url = url;
        options.form = data;
        options.headers = headers; //头域信息
        return new P((resolve, reject) => {
            request.post(options, (err, respone, body) => {
                if (!err && respone.statusCode === 200) {
                    var json = JSON.parse(body);
                    resolve({
                        statusCode: 200,
                        data: json
                    });
                } else {
                    reject({
                        statusCode: 500,
                        msg: err
                    });
                }
            });

        });

    },
    request: function(options) {

        var opt = this.getCert();
        extend(opt, options);
        opt = this.param(opt);

        return new P((resolve, reject) => {
            request.post(opt, (err, respone, body) => {
                if (!err && respone.statusCode === 200) {
                    var json = JSON.parse(body);
                    resolve({
                        statusCode: 200,
                        data: json
                    });
                } else {
                    reject({
                        statusCode: respone.statusCode,
                        Msg: err
                    });
                }
            });
        });
    },
    param: function() {
        //todo get 修改data参数放置url
        //     post put delete json/unlin 数据格式变化


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