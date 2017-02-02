function draw_upstairs_background(sprite){
    stage.addChild(sprite);
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
    player_sprite.vy = -10;
    player_sprite.vx = 0;
  };
  up.release = function() {
    if (!down.isDown && player_sprite.vx === 0) {
      player_sprite.vy = 0;
    }
  };
  down.press = function() {
    player_sprite.vy = 10;
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
    player_sprite.vx = -10;
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
    player_sprite.vx = 10;
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
