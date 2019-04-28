"use strict";
exports.__esModule = true;
var game_1 = require("../src/game");
var startGame = game_1.createGame(function (canvas, ctx, t) {
    return true;
});
startGame(0);
