var doors= [];

var inside_home_tilemap 


const TILEWIDTH = 32;
const TILEHEIGHT = 32;

var controller = new Controller();


var scene = new Scene(800, 600, 'myCanvas');
var Player = undefined;
var CurrentMap = undefined;


function inside_home_setup() {
  controller.loadPlayerInputs();
  var map_builder = new MapBuilder();
  map_builder.inside_home();
  var hamster_builder = new HamsterSpriteBuilder();
  hamster_builder.createPlayable();
  Player.setPosition(212, 212);
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
  check_door_activations(Player);
  scene.render();
  requestAnimationFrame(gameLoop);
};

window.onload = function() {
      PIXI.loader
      .add('hamster_left', 'images/hamster_left.png')
      .add('hamster_right', 'images/hamster_right.png')
      .add('hamster_up', 'images/hamster_up.png')
      .add('hamster_down', 'images/hamster_down.png')
      .add('neighborhood_1', 'images/neighborhood_1.png')
      .add('inside_home', 'images/inside_home.png')
      .load(inside_home_setup);
}




function check_door_activations() {
  var doors = CurrentMap.doors;
  for(var i = 0; i < doors.length; i++) {
    current_door = doors[i];
    if (intersects(Player.current_animation, current_door)) {
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

