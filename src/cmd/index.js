#! /usr/bin/env node

"use strict";
/**
 *
 *
 */

class Cmd {

    ShowAllCommands(){
        console.log(
            "\n  1  wtopen\t平台向设备发送 wtopen (开启)\n" +
            "\n  2  wtclse\t平台向设备发送 wtclse (关闭)\n" +
            "\n  3  wtbrut\t平台向设备发送 wtbrut (蜂鸣)\n" +
            "\n  4  wtkz(xx)\t平台向设备发送平台向设备发送 wtkz00 至 wtkz99 (下发扩展)\n" +
            "\n  5  wtztcx\t平台向设备发送 wtztcx (状态查询)\n" +
            "\n  6  wtdlcx\t平台向设备发送 wtdlcx (电量查询)\n" +
            "\n  7  wtxwcx\t平台向设备发送 wtxwcx (线位查询)\n" +
            "\n  8  wthbov\t平台向设备发送 wthbov (心跳返回)\n" +
            "\n  9  wthblv\t设备向平台上报 wthbov (心跳)\n" +
            "\n  10  wtrest\t设备向平台上报 wtrest (复位)\n" +
            "\n  11  wtopov\t设备向平台上报 wtopov (开启完成)\n" +
            "\n  12  wtclov\t设备向平台上报 wtclov (关闭完成)\n" +
            "\n  13  wtbrov\t设备向平台上报 wtbrov (蜂鸣返回)\n" +
            "\n  14  wtsc(xx)\t设备向平台上报 wtsc00 至 wtsc99 (上传扩展)\n" +
            "\n  15  wtdl(xx)\t设备向平台上报 wtdl00 至 wtdl99 (电量上传)\n" +
            "\n  16  wtxw(xx)\t设备向平台上报wtxw01/wtxw02/wtxw03/wtxw04 (线位状态)\n" +
            "\n  17  wtzt0180\t设备向平台上报wtzt0180 (电量+线位 上传)\n"
        );
    }
}

module.exports = { Cmd };