"use strict";
var PointX = /** @class */ (function () {
    function PointX(x, y) {
        var _this = this;
        this.drawPoint = function () {
            console.log(_this.x, _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this.x, 2) + Math.pow(p.y - _this.y, 2);
        };
        this.x = x;
        this.y = y;
    }
    return PointX;
}());
var point = new PointX(100, 100);
point.drawPoint();
