// GLOBAL Variables

// player_sprite can be hamster or spaceship
var player_sprite = null;
var background_sprite;
var state;


stage = new PIXI.Container(),

renderer = PIXI.autoDetectRenderer(640, 640), document.getElementById('myCanvas');
renderer.backgroundColor = 0xFFFFFF;
renderer.view.style.border = "1px dashed black";
document.body.appendChild(renderer.view);

PIXI.loader
  .add("images/sprites/hamster.png")
  .add("images/sprites/tv.jpg")
  .add("images/sprites/hamster_wheel.png")
  .add("images/sprites/gamecube.png")
  .add("images/sprites/imac.gif")
  .add("images/sprites/control_panel.gif")
  .add("images/sprites/tile.png")
  .add("images/sprites/bed.png")
  .add("images/sprites/spaceship.png")
  .add("images/sprites/space_tile.png")
  .add("images/upstairs.png")
  .load(upstairs_setup);


function inside_ship() {
  player_sprite.x += player_sprite.vx;
  player_sprite.y += player_sprite.vy
}

function piloting_ship(){
  player_sprite.x += player_sprite.vx;
  player_sprite.y += player_sprite.vy	
}


function upstairs_setup(){


      // add the hamster
  hamster_texture = PIXI.utils.TextureCache["images/sprites/hamster.png"];
  player_sprite = new PIXI.Sprite(hamster_texture)
  player_sprite.width = renderer.width / 2;
  player_sprite.height = renderer.height /2;
  player_sprite.vx = 0;
  player_sprite.vy = 0;
  player_sprite.x = 96;
  player_sprite.y = 96;

  var texture = spaceship_texture = PIXI.utils.TextureCache["images/upstairs.png"];
  background_sprite = new PIXI.Sprite(texture);
	draw_background();
	draw_player();
	state = inside_ship;
	load_inside_ship_controls();
	gameLoop();
}



function gameLoop(){
      //(0,0) for us is center of the screen

  requestAnimationFrame(gameLoop);
  state();
  renderer.render(stage);
    stage.position.x -= (player_sprite.vx);
  stage.position.y -= (player_sprite.vy);
}

function draw_background(){

stage.addChild(background_sprite);

}

function draw_player(){

  stage.addChild(player_sprite);
}

