#! /usr/bin/env node

"use strict";

var https = require("./../http/index");

module.exports = {

    auth: function (url, data) {
        return https.post(url, data);
    }
};