// MODULE is like a namespace
module objects {
  export class Plane extends createjs.Bitmap {
    stage: createjs.Stage;

    // CONSTRUCTOR +++++++++++++++++++++++++=
    constructor(stage: createjs.Stage) {
      super("../../Assets/images/plane.png");

      this.stage = stage;

      this.Start();
    }

    private Start():void {

/*
      this.regX = this.getBounds().width * 0.5;
      this.regY = this.getBounds().height * 0.5;
      */

      this.regX = 32.5;
      this.regY = 32.5;

      this.y = 430; // plane's fixed vertical position
    }

    private _checkBounds():void {
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
