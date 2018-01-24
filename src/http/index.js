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
    post: function (url, data, headers) {
        var options = this.getCert();
        options.url = url;
        options.form = data;
        options.headers = headers;//头域信息
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
                        Msg: err
                    });
                }
            });

        });

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

    getCert: function () {
        return {
            cert: fs.readFileSync(certFile),
            key: fs.readFileSync(keyFile),
            rejectUnauthorized: false
        };
    }
};