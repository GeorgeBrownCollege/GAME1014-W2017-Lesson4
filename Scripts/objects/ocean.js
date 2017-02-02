var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean() {
            var _this = _super.call(this, "../../Assets/images/ocean.gif") || this;
            _this.Start();
            return _this;
        }
        Ocean.prototype._reset = function () {
            this.y = -960;
        };
        Ocean.prototype._checkBounds = function () {
            if (this.y >= 0) {
                this._reset();
            }
        };
        Ocean.prototype.Start = function () {
            this.dy = 5; // speed of the ocean
            this._reset();
        };
        Ocean.prototype.Update = function () {
            this.y += this.dy; // move the ocean down by dy pixels
            this._checkBounds();
        };
        return Ocean;
    }(createjs.Bitmap));
    objects.Ocean = Ocean;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map