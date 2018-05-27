class Game{
    constructor(){
        console.log(`Welcome to the game. Version ${this.Version()}`);

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        createjs.Ticker.setFPS(60);

        //keep redrawing the stage on every tick
        createjs.Ticker.on("tick", this.stage);
        
        var circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0,0,40);
        circle.x = circle.y = 100;
        this.stage.addChild(circle);        
    
    }

    Version()
    {
        return '1.0.0';
    }
}

//Start the game
var game = new Game();