module objects {
  export class Island extends createjs.Bitmap {
    // INSTANCE VARIABLES
      private dy:number;
      private height:number;
      private width:number;

      constructor() {
        super("../../Assets/images/island.png");

        this.Start();
      }

      private _reset():void {
        this.x = (Math.random() * (640 - this.width)) + this.width * 0.5;
        this.y = -this.height;
      }

      private _checkBounds():void {
        if(this.y >= (480 + this.height)) {
          this._reset();
        }
      }

      private Start():void {
        this.height = this.getBounds().height;
        this.width = this.getBounds().width;
        this.regX = this.width * 0.5;
        this.regY = this.height * 0.5;

        this.dy = 5; // speed of the ocean
        this._reset();
      }

      public Update():void {
        this.y += this.dy; // move the ocean down by dy pixels
        this._checkBounds();
      }
  }
}
