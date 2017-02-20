var canvas_width = 800;
var canvas_height = 600;
var window_margin = 10;

var scene = new Scene(canvas_width, canvas_height, "myCanvas");

var rectangle = new Rectangle(0 + window_margin, (canvas_height / 2) + 32, canvas_width - (window_margin * 2), (canvas_height / 2) - 32 - window_margin, 15);
var interface = new Interface(rectangle);
interface.animate(scene);




// var canvas_width = 800;
// var canvas_height = 600;
// var window_margin = 10;
// var stage = new PIXI.Container();
// var renderer = PIXI.autoDetectRenderer();
// renderer.backgroundColor = 0xFFFFFF;
// renderer.view.style.border = "1px dashed black";
// document.body.appendChild(renderer.view);

// var graphics = new PIXI.Graphics();

// // set a fill and line style
// graphics.beginFill(0xFF3300);
// graphics.lineStyle(4, 0xffd900, 1);


// // draw a rounded rectangle
// graphics.lineStyle(2, 0xFF00FF, 1);
// graphics.beginFill(0xFF00BB, 0.25);
// graphics.drawRoundedRect(0 + window_margin, (canvas_height / 2) + 32, canvas_width - (window_margin * 2), (canvas_height / 2) - 32 - window_margin, 15);
// graphics.endFill();

// stage.addChild(graphics);
// renderer.render(stage);
