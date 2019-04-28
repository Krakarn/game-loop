"use strict";
exports.__esModule = true;
exports.createLoop = function (update) {
    var loop = function (t) { return update(t) && requestAnimationFrame(loop); };
    return loop;
};
