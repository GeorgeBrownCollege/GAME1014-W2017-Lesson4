module objects  {
  export class Ocean extends objects.GameObject {
      constructor(public stage:createjs.Stage) {
        super("../../Assets/images/ocean.gif", stage);
        this.Start();
      }

      protected _reset():void {
        this.y = -960;
      }

      protected _checkBounds():void {
        if(this.y >= 0) {
          this._reset();
        }
      }

      public Start():void {
        this.dy = 5; // speed of the ocean
        this._reset();
      }

      public Update():void {
        this.y += this.dy; // move the ocean down by dy pixels
        this._checkBounds();
      }

  }
}
