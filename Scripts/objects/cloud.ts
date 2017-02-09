module objects {
  export class Cloud extends createjs.Bitmap {
    // INSTANCE VARIABLES
      private dy:number;
      private dx:number;
      private height:number;
      private width:number;

      constructor() {
        super("../../Assets/images/cloud.png");

        this.Start();
      }

      private _reset():void {
        this.dy = (Math.random() * 5) + 5; // random speedY of the cloud
        this.dx = (Math.random() * -4) + 2; // random speedX of the cloud
        this.x = (Math.random() * (640 - this.width)) + this.width * 0.5;
        this.y = -this.height;
      }

      private _checkBounds():void {
        if(this.y >= (480 + this.height)) {
          this._reset();
        }
      }

      private Start():void {
        this.height = 86.5 // this.getBounds().height;
        this.width = 113 // this.getBounds().width;
        this.regX = this.width * 0.5;
        this.regY = this.height * 0.5;


        this._reset();
      }

      public Update():void {
        this.y += this.dy; // move the cloud down by dy pixels
        this.x += this.dx; // move the cloud across by dx pixels
        this._checkBounds();
      }
  }
}
