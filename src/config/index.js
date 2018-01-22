#! /usr/bin/env node

"use strict";
/**
 * 
 * 
 */

var auth = require("./../auth/index");

class Config {

    constructor() {

    }

    SetConfig(path) {
        console.log(1);
        console.log(path);
    }

    GetConfig() {

        auth.auth().then()


        return {


        };
    }
    init() {

    }
}



module.exports = { Config };