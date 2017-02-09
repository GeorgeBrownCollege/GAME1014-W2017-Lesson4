var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(imagePath, stage) {
            var _this = _super.call(this, imagePath) || this;
            _this.imagePath = imagePath;
            _this.stage = stage;
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "Name", {
            // Public Properties
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._reset = function () {
        };
        GameObject.prototype._checkBounds = function () {
        };
        GameObject.prototype.Start = function () {
        };
        GameObject.prototype.Update = function () {
        };
        GameObject.prototype._initialize = function () {
            this.height = this.getBounds().height;
            this.width = this.getBounds().width;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map