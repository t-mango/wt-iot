#! /usr/bin/env node

"use strict";

// function getConfig(path) {

//     //console.log(path);
// }

// function testInterval(val) {
//     // console.log(val);
//     val++;
// }

var https = require("./http/index");
import config from "./config/index";

var program = require("commander"),
    chalk = require("chalk");

program
    .version("1.0.0")
    .option("-c,--config <path>", "配置文件")
    .option("-s,--show", "打印cli信息");


//设备
program.command("device")
    .description("设备命令包括了设备添加/删除/查询信息/列表")
    .option("-a,--add [value]", "添加设备")
    .option("-d,--delete [value]", "删除设备")
    .option("-i,--info [value]", "查看设备信息")
    .option("-l,--list", "查看当前配置注册所有信息")
    .action((options) => {
        if (options.add) {

        }

    });
//通讯命令
program
    .command("cmd")
    .description("命令")
    .option("-l--list", "查看所有命令");
//执行命令
program
    .command("exec <cmd> [smn...]")
    .description("执行通信命令")
    .option("-i,--interval <n>", "多少毫秒执行")
    .option("-f,--frequency <n>", "执行次数")
    .option("-s,--sort [value]", " 1 顺序执行，0 同时执行")
    .action(function (cmd, smn, options) {
        console.log("exec 命令:\"%s\" 设备id: %s  using %s mode", cmd, smn, options.interval);
        (new https()).post();
    });
//查询结果
program
    .command("result [npms...]")
    .description("查询结果")
    .option("-s,--statistics", "附带统计结果")
// .action(function (npms, options) {
//     if (npms) {
//         npms.forEach(element => {
//             console.log("elecmt $s", element);
//         });
//     }
// });

program
    .parse(process.argv);


if (program.config && program.show) {

    if (program.config) {

    }

    if (program.show) {

        (new config()).GetConfig();

    }

}
// console.log(" %s", program.config)
// console.log(" %s", program.show)
