#! /usr/bin/env node

"use strict";

var https = require("./../http/index");

module.exports = {

    auth: function (url, data) {
        var route = "/iocm/app/sec/v1.1.0/login";
        return https.post(url, data);
    }
};