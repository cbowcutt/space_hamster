function draw_space_background(){
  var step_x = renderer.width / 8;
  var step_y = renderer.height / 8;
  var tile_texture = PIXI.utils.TextureCache["images/sprites/space_tile.png"];
  for(x = 0; x < renderer.width; x += step_x){
    for(y = 0; y < renderer.height; y += step_y){
        tile = new PIXI.Sprite(tile_texture)
        tile.width = renderer.width / 8.0;
        tile.height = renderer.height / 8.0;
        tile.x = x;
        tile.y = y;
        stage.addChild(tile);
    }
  }
}

function draw_spaceship(){
  spaceship_texture = PIXI.utils.TextureCache["images/sprites/spaceship.png"];
  spaceship = new PIXI.Sprite(spaceship_texture)
  spaceship.vx = 0;
  spaceship.vy = 0;
  spaceship.x = 96;
  spaceship.y = 96;
  stage.addChild(spaceship);
}


function load_pilot_mode_controls(){
    up.press = function() {
    player_sprite.vy = -5;
    player_sprite.vx = 0;
  };
  up.release = function() {
    if (!down.isDown && player_sprite.vx === 0) {
      player_sprite.vy = 0;
    }
  };
  down.press = function() {
    player_sprite.vy = 5;
    player_sprite.vx = 0;
  };
  down.release = function() {
    if (!up.isDown && player_sprite.vx === 0) {
      player_sprite.vy = 0;
    }
  };
    //Left arrow key `press` method
  left.press = function() {

    //Change the cat's velocity when the key is pressed
    player_sprite.vx = -5;
    player_sprite.vy = 0;
  };
  left.release = function() {

    //If the left arrow has been released, and the right arrow isn't down,
    //and the cat isn't moving vertically:
    //Stop the cat
    if (!right.isDown && player_sprite.vy === 0) {
      player_sprite.vx = 0;
    }
  };
  right.press = function() {
    player_sprite.vx = 5;
    player_sprite.vy = 0;
  };
  right.release = function() {
    if (!left.isDown && player_sprite.vy === 0) {
      player_sprite.vx = 0;
    }
  };
  spacebar.release = function() {
      inside_ship_setup();
  }
}
