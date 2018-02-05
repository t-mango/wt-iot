#! /usr/local/bin/mocha node

"use strict";



var assert = require("assert"),

    auth = require("./../auth/index");


describe("认证", function () {
    describe("auth.Http()", function () {
        it("获取token", function () {
            auth.auth("https://180.101.149.140:8743/iocm/app/sec/v1.1.0/login", {
                "appId": "OhYFDUqTQvJD6wzb1NWFWb4KhVwa",
                "secret": "sA2BQ1oGZsDV3BPTohibXxkLsiga"
            }).then((data) => {
                assert.equal(data.statusCode, 200);
            }, (data) => {
                assert.equal(data.statusCode, 200);
                // assert.fail("statusCode:" + err.statusCode);
            }).error(() => {
                assert.equal(1, 200);
            });
        });
    });
});

