module objects {
  export abstract class GameObject extends createjs.Bitmap  {
    // INSTANCE VARIABLES
      protected dy:number;
      protected dx:number;
      protected height:number;
      protected width:number;
      private _name:string;

      // Public Properties
      get Name():string {
        return this._name;
      }

      set Name(name:string) {
        this._name = name;
      }

      constructor(private imagePath:string, public stage:createjs.Stage) {
        super(imagePath);
      }

      protected _reset():void {

      }

      protected _checkBounds():void {

      }

      public Start():void {

      }

      public Update():void {
      }

      protected _initialize():void {
        this.height = this.getBounds().height;
        this.width = this.getBounds().width;
        this.regX = this.width * 0.5;
        this.regY = this.height * 0.5;
      }
  }
}
