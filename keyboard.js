function keyboard(keyCode) {
  var key = {};
  key.code = keyCode;
  key.isDown = false;
  key.isUp = true;
  key.press = undefined;
  key.release = undefined;
  //The `downHandler`
  key.downHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isUp && key.press) key.press();
      key.isDown = true;
      key.isUp = false;
    }
    event.preventDefault();
  };

  //The `upHandler`
  key.upHandler = function(event) {
    if (event.keyCode === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      key.isUp = true;
    }
    event.preventDefault();
  };

  //Attach event listeners
  window.addEventListener(
    "keydown", key.downHandler.bind(key), false
  );
  window.addEventListener(
    "keyup", key.upHandler.bind(key), false
  );
  return key;
}

// define movements  
left = keyboard(37);
up = keyboard(38);
right = keyboard(39);
down = keyboard(40);
spacebar = keyboard(32);


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
  if (state == piloting_ship) {
    inside_ship_setup();
    return;
  }
  else if (state == inside_ship) {
    piloting_ship_setup();
    return;
  }
}