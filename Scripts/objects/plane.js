var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MODULE is like a namespace
var objects;
(function (objects) {
    /**
     * The plane class represents the player's avatar.
     *
     * @class Plane
     */
    var Plane = (function (_super) {
        __extends(Plane, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++=
        /**
         * This constructor requires a reference to the stage object
         *
         * @constructor
         * @param {createjs.Stage} stage
         */
        function Plane(stage) {
            var _this = _super.call(this, "../../Assets/images/plane.png", stage) || this;
            _this.stage = stage;
            _this.Start();
            return _this;
        }
        /**
         * This method initializes variables and other class objects
         *
         * @method Start
         * @returns {void}
         */
        Plane.prototype.Start = function () {
            this._initialize();
            this.y = 430; // plane's fixed vertical position
        };
        Plane.prototype._checkBounds = function () {
            // clamp the right side
            if (this.x > (640 - (this.getBounds().width * 0.5))) {
                this.x = (640 - (this.getBounds().width * 0.5));
            }
            // clamp the left side
            if (this.x < this.getBounds().width * 0.5) {
                this.x = this.getBounds().width * 0.5;
            }
        };
        Plane.prototype.Update = function () {
            this.x = this.stage.mouseX;
            this._checkBounds();
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map