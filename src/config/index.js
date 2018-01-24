#! /usr/bin/env node

"use strict";
/**
 * 
 * 
 */

var auth = require("./../auth/index"),
    fs = require("fs"),
    path = require("path"),
    configJsonFile = path.resolve(__dirname, "./config.json");

class Config {

    constructor() {

    }

    SetConfig(path) {
        console.log(1);
        console.log(path);
    }

    GetConfig() {
        var promise = new Promise(function (resolve,reject) {
            var conFile = JSON.parse(fs.readFileSync(configJsonFile));
            auth.auth(conFile.url,conFile.data)
                .then((value)=>{
                    // console.log("成功",value);
                    var time = new Date().getTime();//获得请求成功时的时间的毫秒值
                    time = time + 3600000;//time 是过期时间
                    conFile.expTime = time;//给config文件添加过期时间字段
                    conFile.accessToken = value.data.accessToken;//将accessToken存到config文件
                    fs.writeFile(configJsonFile, JSON.stringify(conFile), function(error){
                        if(error){
                            // console.log("写入失败",error);
                            reject("error,写入失败");
                            return;
                        }
                        // console.log("写入成功");
                        resolve("success");

                    });
                })
                .catch((error)=>{
                    // console.log("失败",error);
                    reject("error,失败");
                });
        });
        return promise;
    }
    init() {

    }
}



module.exports = { Config };