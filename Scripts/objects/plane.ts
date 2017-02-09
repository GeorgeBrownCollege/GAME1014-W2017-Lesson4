// MODULE is like a namespace
module objects {

  /**
   * The plane class represents the player's avatar.
   *
   * @class Plane
   */
  export class Plane extends objects.GameObject {
    // CONSTRUCTOR +++++++++++++++++++++++++=

    /**
     * This constructor requires a reference to the stage object
     *
     * @constructor
     * @param {createjs.Stage} stage
     */
    constructor(public stage: createjs.Stage) {
      super("../../Assets/images/plane.png", stage);
      this.Start();
    }

    /**
     * This method initializes variables and other class objects
     *
     * @method Start
     * @returns {void}
     */
    public Start():void {
      this._initialize();
      this.y = 430; // plane's fixed vertical position
    }

    protected _checkBounds():void {
      // clamp the right side
      if(this.x > (640 - (this.getBounds().width * 0.5) )) {
        this.x = (640 - (this.getBounds().width * 0.5));
      }

      // clamp the left side
      if(this.x < this.getBounds().width * 0.5) {
        this.x = this.getBounds().width * 0.5;
      }
    }

    public Update():void {
      this.x = this.stage.mouseX;
      this._checkBounds();
    }
  }
}
