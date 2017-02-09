module objects {
  export class Cloud extends objects.GameObject{
      constructor(public stage:createjs.Stage) {
        super("../../Assets/images/cloud.png", stage);
        this.Start();
      }

      protected _reset():void {
        this.dy = (Math.random() * 5) + 5; // random speedY of the cloud
        this.dx = (Math.random() * -4) + 2; // random speedX of the cloud
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
        this._reset();
      }

      public Update():void {
        this.y += this.dy; // move the cloud down by dy pixels
        this.x += this.dx; // move the cloud across by dx pixels
        this._checkBounds();
      }
  }
}
