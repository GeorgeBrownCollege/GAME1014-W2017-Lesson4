/// <reference path="./_reference.ts" />
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Specific Variables
    var canvas;
    var stage;
    // Game Object Variables
    var plane;
    var ocean;
    var island;
    //let cloud:objects.Cloud;
    var cloudCount = 3;
    var clouds; // cloud array
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
        clouds = new Array();
        // Start the game
        Game();
    }
    // called every frame
    function Update() {
        ocean.Update();
        island.Update();
        plane.Update();
        clouds.forEach(function (cloud) {
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
        for (var count = 0; count < cloudCount; count++) {
            clouds[count] = new objects.Cloud(stage);
            stage.addChild(clouds[count]);
        }
    }
    window.onload = Start;
})();
//# sourceMappingURL=game.js.map