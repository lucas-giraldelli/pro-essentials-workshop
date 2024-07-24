"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var CanvasNode = /** @class */ (function () {
    function CanvasNode(x, y) {
        this.x = x;
        this.y = y;
    }
    CanvasNode.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Object.defineProperty(CanvasNode.prototype, "position", {
        get: function () {
            return { x: this.x, y: this.y };
        },
        enumerable: false,
        configurable: true
    });
    return CanvasNode;
}());
(0, vitest_1.it)("Should start in the given position", function () {
    var node = new CanvasNode(10, 20);
    (0, vitest_1.expect)(node.position).toEqual({ x: 10, y: 20 });
});
