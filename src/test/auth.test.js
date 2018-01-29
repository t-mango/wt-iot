#! /usr/local/bin/mocha node

"use strict";



var assert = require("assert");



describe("认证", function() {
    describe("auth.Http()", function() {
        it("should return -1 when the value is not present", function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});