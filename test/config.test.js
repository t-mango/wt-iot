#! /usr/local/bin/mocha node

"use strict";



var assert = require("assert"),
    config = require("./../config/index");


describe("配置文件", () => {

    describe("文件操作", () => {

        it("获取文件1", () => {

            assert.ok(true);
        });
    });



    describe("文件操作2", () => {

        it("获取文件1", () => {

            assert.ok(false);
        });
    });
    // config.GetConfigByFile().then(
    //     (data) => {

    //     },
    //     () => {


    //     });
});

