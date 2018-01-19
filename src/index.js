#! /usr/bin/env node

function getConfig(path) {

    console.log(path);
}

function testInterval(val) {
    console.log(val)
    val++;
}

var program = require('commander'),
    chalk = require("chalk");

program
    .version("1.0.0")
    .option('-c,--config <path>', '配置文件', getConfig);

//设备
program
    .command("device")
    .description("设备命令包括了设备添加/删除/查询信息/列表")
    .option("-a,--add [value]", "添加设备")
    .option("-d,--delete [value]", "删除设备")
    .option("-i,--info [value]", "查看设备信息")
    .option("-l,--list", "查看当前配置注册所有信息");
//通讯命令
program
    .command('cmd')
    .description("命令")
    .option("-l--list", "查看所有命令");
//执行命令
program
    .command('exec [cmds...] [smn...]')
    .option('-i,--interval <n>', "多少毫秒执行")
    .option('-f,--frequency <n>', "执行次数")
    .option("-s,--sort [value]", " 1 顺序执行，0 同时执行")
    .action(function(cmd, options) {
        console.log('exec "%s" using %s mode', cmd, options.interval);
        var i = 0;
        (function(index) {
            var timeout = function() {
                console.log(index);
                index++;
                if (index == 3) {

                } else {
                    setTimeout(timeout, options.interval);
                }
            }
            setTimeout(timeout, options.interval);

        })(i)
    });
//查询结果
program
    .command('result [npms...]')
    .option("-s,--statistics", "附带统计结果")
    .action(function(npms, options) {
        if (npms) {
            npms.forEach(element => {
                console.log("elecmt $s", element);
            });
        }

    });

program
    .parse(process.argv);