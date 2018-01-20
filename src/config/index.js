#! /usr/bin/env node

"use strict";
/**
 * 
 * 
 */
var fs = require("fs"),
    path = require("path"),
    auth = require("./../auth/index"),
    configPath = path.resolve(__dirname, "config.json");

class WtConfig {

    SaveConfig(json) {
        var org;
        if (fs.existsSync(configPath)) {

            org = JSON.parse(this.readConfig());

            for (var key in json) {
                org[key] = json[key];
            }
        }

        fs.writeFileSync(configPath, JSON.stringify(org ? org : json));

    }

    GetConfig() {
        console.log(configPath);
        return fs.existsSync(configPath) ? JSON.parse(this.readConfig()) : null;
    }
    ShowInfo() {
        var json = this.GetConfig();
        console.log(json);
        console.log(json.name);
    }
    readConfig() {
        var data = fs.readFileSync(configPath);
        if (data[0] === 0xEF && data[1] === 0xBB && data[2] === 0xBF) {
            data = data.slice(3);
        }
        return data.toString("utf-8");
    }
    updateAuthInfo() {

    }
}
module.exports = new WtConfig();