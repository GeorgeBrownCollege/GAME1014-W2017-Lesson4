/// <reference path="../objects/plane.ts" />


// IIFE - Immediately Invoked Function Expression
(function(){

// Game Specific Variables
  let canvas:HTMLElement;
  let stage:createjs.Stage;

// Game Object Variables
  let plane:objects.Plane;

  function Start() {
    // reference to the canvas element on the index.html
    canvas = document.getElementById("canvas");

    // setup the createjs stage container
    stage = new createjs.Stage(canvas);

    // set the framerate to 60fps
    createjs.Ticker.framerate = 60;

    // call the Update function every frame
    createjs.Ticker.on("tick", Update);

    // Start the game
    Game();
  }

  // called every frame
  function Update() {

    plane.Update();

    stage.update();
  }

  function Game() {
  console.log("Game Started");

  plane = new objects.Plane(stage);

  stage.addChild(plane);



}


  window.onload = Start;


})();
