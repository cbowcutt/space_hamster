var doors= [];

var inside_home_tilemap 


const TILEWIDTH = 32;
const TILEHEIGHT = 32;


var scene = new Scene(800, 600, 'myCanvas');
var Player = undefined;
var CurrentMap = undefined;

var npcs = []



// function upstairs_setup() {

//   tile_map = inside_home_tilemap;
//       // add the hamster
//   hamster_texture = PIXI.utils.TextureCache["images/pikachu.png"];
//   player_sprite = new PIXI.Sprite(hamster_texture);
//   player_sprite.height = 16 * 4;
//   player_sprite.width = 16 * 4;
//   player_sprite.vx = 0;
//   player_sprite.vy = 0;
//   player_sprite.x = 384;
//   player_sprite.y = 384;

//   var background_texture = PIXI.utils.TextureCache["images/inside_home.png"];

// 	scene.add(new PIXI.Sprite(background_texture));
// 	scene.add(player_sprite);


//   var neighborhood_door = new Door(9 * TILEHEIGHT, 8 * TILEWIDTH);
//   var neighborhood_door = new Door(10 * TILEHEIGHT, 8 * TILEWIDTH);
//   neighborhood_door.setup_new_state = function() { neighborhood_1_setup(); }

//   doors.push(neighborhood_door);
//   // doors.add(neighborhood_door);
// 	gameLoop();
// }

function inside_home_setup() {
  var map_builder = new MapBuilder();
  map_builder.inside_home();
  var hamster_builder = new HamsterSpriteBuilder();
  hamster_builder.createPlayable();
  Player.set_position(212, 212);
  requestAnimationFrame(gameLoop);
}

function procedural_dungeon_setup() {
  // var stage = scene.stage;
  // for (var i = stage.children.length - 1; i >= 0; i--) {	stage.removeChild(stage.children[i]);};
 // // scene.stage = new stage();
  scene.reset();
  var map_builder = new MapBuilder();
  map_builder.procedural_dungeon();
  var hamster_builder = new HamsterSpriteBuilder();
  hamster_builder.createPlayable();
  Player.set_position(212, 212);
  var hearts = hamster_builder.createHealthBar(5);
  var rat = hamster_builder.createRat();
  rat.set_position(128, 128);
  npcs.push(rat);
  requestAnimationFrame(gameLoop);
}

function neighborhood_1_setup() {
  // add the hamster
  var map_builder = new MapBuilder();
  map_builder.neighborhood_1();
  var hamster_builder = new HamsterSpriteBuilder();
  hamster_builder.createPlayable();

  requestAnimationFrame(gameLoop);
}



function gameLoop(){
  npcs.forEach(npc => npc.move());
  scene.render();
  
  check_door_activations(Player);
  requestAnimationFrame(gameLoop);
};

window.onload = function() {
      PIXI.loader
      .add('hamster_left', 'images/hamster_left.png')
      .add('hamster_right', 'images/hamster_right.png')
      .add('hamster_up', 'images/hamster_up.png')
      .add('hamster_down', 'images/hamster_down.png')
	  .add('rat_left', 'images/rat_left.png')
      .add('rat_right', 'images/rat_right.png')
      .add('rat_up', 'images/rat_up.png')
      .add('rat_down', 'images/rat_down.png')
      .add('neighborhood_1', 'images/neighborhood_1.png')
      .add('inside_home', 'images/inside_home.png')
	  .add('heart', 'images/heart.png')
      .load(procedural_dungeon_setup);
}




function check_door_activations() {
  var doors = CurrentMap.doors;
  for(var i = 0; i < doors.length; i++) {
    current_door = doors[i];
    if (intersects(Player.current_animation, current_door.rectangle)) {
      current_door.setup_new_state();
    }
  }
}


function intersects(rect1, rect2) {
  if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y)
  {
    return true;
  }
  return false;
}

function detect_collisions(subject_sprite) {
  var tile_map = CurrentMap.atlas;
  for(var _y = 0; _y < tile_map.length; _y++) {
    for(var _x = 0; _x < tile_map[_y].length; _x++) {
      var key = tile_map[_y][_x]
      if(key == 0) // wall
      {
        var tile = {x: _x * TILEWIDTH, y: _y * TILEHEIGHT, width: TILEWIDTH, height: TILEHEIGHT};
        if(intersects(subject_sprite, tile))
        {
          return true;
        }
      }
    }
  }
  return false;
};

