/// <reference path="./_reference.ts" />


// IIFE - Immediately Invoked Function Expression
(function(){

// Game Specific Variables
  let canvas:HTMLElement;
  let stage:createjs.Stage;

// Game Object Variables
  let plane:objects.Plane;
  let ocean:objects.Ocean;
  let island:objects.Island;
  //let cloud:objects.Cloud;

  let cloudCount:number = 3;
  let clouds:objects.Cloud[]; // cloud array

  function Start() {
    // reference to the canvas element on the index.html
    canvas = document.getElementById("canvas");

    // setup the createjs stage container
    stage = new createjs.Stage(canvas);

    // set the framerate to 60fps
    createjs.Ticker.framerate = 60;

    // call the Update function every frame
    createjs.Ticker.on("tick", Update);

    // instantiate clouds array
    clouds = new Array<objects.Cloud>();

    // Start the game
    Game();
  }

  // called every frame
  function Update() {

    ocean.Update();
    island.Update();
    plane.Update();

    clouds.forEach(cloud => {
      cloud.Update();
    });


    stage.update();
  }

  function Game() {
  console.log("Game Started");

  // add ocean to the stage
  ocean = new objects.Ocean(stage);
  stage.addChild(ocean);

  // add island to the stage
  island = new objects.Island(stage);
  stage.addChild(island);

  // add plane to stage
  plane = new objects.Plane(stage);
  stage.addChild(plane);


  // add clouds to stage
  for(let count:number = 0; count < cloudCount; count++) {
    clouds[count] = new objects.Cloud(stage);
    stage.addChild(clouds[count]);
  }



}


  window.onload = Start;


})();
