var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Island = (function (_super) {
        __extends(Island, _super);
        function Island() {
            var _this = _super.call(this, "../../Assets/images/island.png") || this;
            _this.Start();
            return _this;
        }
        Island.prototype._reset = function () {
            this.x = (Math.random() * (640 - this.width)) + this.width * 0.5;
            this.y = -this.height;
        };
        Island.prototype._checkBounds = function () {
            if (this.y >= (480 + this.height)) {
                this._reset();
            }
        };
        Island.prototype.Start = function () {
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.dy = 5; // speed of the ocean
            this._reset();
        };
        Island.prototype.Update = function () {
            this.y += this.dy; // move the ocean down by dy pixels
            this._checkBounds();
        };
        return Island;
    }(createjs.Bitmap));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map