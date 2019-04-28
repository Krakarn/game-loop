"use strict";
exports.__esModule = true;
exports.bootstrap = function (container) {
    container = container || document.createElement('div');
    document.body.appendChild(container);
    container.id = 'container';
    var canvas = document.createElement('canvas');
    container.appendChild(canvas);
    canvas.id = 'canvas';
};
