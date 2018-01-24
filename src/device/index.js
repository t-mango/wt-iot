#! /usr/bin/env node

"use strict";
/**
 * 
 * 
 */
var config = require("../config/index"),
    fs = require("fs"),
    path = require("path"),
    configJsonFile = path.resolve(__dirname, "../config/config.json"),
    https = require("./../http/index");
class Devices {

    addDevice(){
        var Data = JSON.parse(fs.readFileSync(configJsonFile));//获得config.json内容
        var time = new Date().getTime();
        var url = `https://180.101.149.140:8743/iocm/app/reg/v1.2.0/devices?appId={${Data.data.appId}}`,
            data = {
                "nodeId":"AE10-12424-12414",//设备唯一标识SIM卡号 必填
                "timeout":300//单位秒，不填使用默认值(180s), 填写0则永不过期，非0表示在指定时间内设备进行绑定，超过时间验证码无效
            },
            header = {
                "app_key":`${Data.data.appId}`,
                "Authorization":`Bearer ${Data.accessToken}`,
                "Content-Type":"application/json"
            };
        if(Data.expTime && time<Data.expTime){
            //存在过期时间expTime属性,并且当前的时间在有效期内
            //不用重新获取accessToken

            https.post(url,data,header)
                .then((value)=>{
                    console.log("成功123",value);
                })
                .catch((error)=>{
                    console.log("错误123",error);
                });


        }else {
            //没有该属性说明是第一次调用，
            //或者是过期了，重新获取accessToken进行请求
            (new config.Config()).GetConfig()
                .then((value)=>{
                    if(value === "success"){
                        //写入新的accesstoken和时间成功，重新调用添加设备接口
                        // console.log(https);

                        Data = JSON.parse(fs.readFileSync(configJsonFile));//重新获得config.json内容
                        //重新获取新的accessToken值
                        header = {
                            "app_key":`{${Data.data.appId}}`,
                            "Authorization":`Bearer {${Data.accessToken}}`,
                            "Content-Type":"application/json"
                        };

                    }
                })
                .catch((error)=>{
                    console.log("失败",error);
                });
        }
    }
}

module.exports = {Devices};