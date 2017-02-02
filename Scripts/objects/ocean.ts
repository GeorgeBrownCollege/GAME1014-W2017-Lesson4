module objects  {
  export class Ocean extends createjs.Bitmap {
      // INSTANCE VARIABLES
      dy:number;

      constructor() {
        super("../../Assets/images/ocean.gif");

        this.Start();
      }

      private _reset():void {
        this.y = -960;
      }

      private _checkBounds():void {
        if(this.y >= 0) {
          this._reset();
        }
      }

      private Start():void {
        this.dy = 5; // speed of the ocean
        this._reset();
      }

      public Update():void {
        this.y += this.dy; // move the ocean down by dy pixels
        this._checkBounds();
      }

  }
}
