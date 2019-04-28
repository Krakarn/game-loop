"use strict";
exports.__esModule = true;
var bootstrap_1 = require("./bootstrap");
var loop_1 = require("./loop");
exports.createGame = function (initialize, update, container) {
    bootstrap_1.bootstrap(container);
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    initialize(canvas, ctx);
    var loop = loop_1.createLoop(function (t) { return update(canvas, ctx, t); });
    loop(0);
};
