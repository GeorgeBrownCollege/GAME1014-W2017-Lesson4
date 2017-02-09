module objects {
  export class Island extends objects.GameObject {
      constructor(public stage:createjs.Stage) {
        super("../../Assets/images/island.png", stage);
        this.Start();
      }

      protected _reset():void {
        this.x = (Math.random() * (640 - this.width)) + this.width * 0.5;
        this.y = -this.height;
      }

      protected _checkBounds():void {
        if(this.y >= (480 + this.height)) {
          this._reset();
        }
      }

      public Start():void {
        this._initialize();

        this.dy = 5; // speed of the ocean
        this._reset();
      }

      public Update():void {
        this.y += this.dy; // move the ocean down by dy pixels
        this._checkBounds();
      }
  }
}
