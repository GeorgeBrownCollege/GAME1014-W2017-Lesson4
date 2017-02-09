var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        function Cloud(stage) {
            var _this = _super.call(this, "../../Assets/images/cloud.png", stage) || this;
            _this.stage = stage;
            _this.Start();
            return _this;
        }
        Cloud.prototype._reset = function () {
            this.dy = (Math.random() * 5) + 5; // random speedY of the cloud
            this.dx = (Math.random() * -4) + 2; // random speedX of the cloud
            this.x = (Math.random() * (640 - this.width)) + this.width * 0.5;
            this.y = -this.height;
        };
        Cloud.prototype._checkBounds = function () {
            if (this.y >= (480 + this.height)) {
                this._reset();
            }
        };
        Cloud.prototype.Start = function () {
            this._initialize();
            this._reset();
        };
        Cloud.prototype.Update = function () {
            this.y += this.dy; // move the cloud down by dy pixels
            this.x += this.dx; // move the cloud across by dx pixels
            this._checkBounds();
        };
        return Cloud;
    }(objects.GameObject));
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map