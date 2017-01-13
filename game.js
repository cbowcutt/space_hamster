// GLOBAL Variables

// player_sprite can be hamster or spaceship
var player_sprite = null;
var state;

stage = new PIXI.Container(),
renderer = PIXI.autoDetectRenderer(512, 512);
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
  .load(piloting_ship_setup);


function inside_ship() {
  player_sprite.x += player_sprite.vx;
  player_sprite.y += player_sprite.vy
}

function piloting_ship(){
  player_sprite.x += player_sprite.vx;
  player_sprite.y += player_sprite.vy	
}


function inside_ship_setup(){
	draw_spaceship_background();
	draw_hamster();
	draw_furniture();
	player_sprite = hamster
	state = inside_ship;
	load_inside_ship_controls();
	gameLoop();
}

function piloting_ship_setup(){
	draw_space_background();
	draw_spaceship();
	player_sprite = spaceship
	state = piloting_ship;
	load_pilot_mode_controls();
	gameLoop();
}

function gameLoop(){
  requestAnimationFrame(gameLoop);
  state();
  renderer.render(stage);
}


