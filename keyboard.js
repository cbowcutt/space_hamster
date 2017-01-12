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


up.press = function() {
  hamster.vy = -5;
  hamster.vx = 0;
};
up.release = function() {
  if (!down.isDown && hamster.vx === 0) {
    hamster.vy = 0;
  }
};
down.press = function() {
  hamster.vy = 5;
  hamster.vx = 0;
};
down.release = function() {
  if (!up.isDown && hamster.vx === 0) {
    hamster.vy = 0;
  }
};
  //Left arrow key `press` method
left.press = function() {

  //Change the cat's velocity when the key is pressed
  hamster.vx = -5;
  hamster.vy = 0;
};
left.release = function() {

  //If the left arrow has been released, and the right arrow isn't down,
  //and the cat isn't moving vertically:
  //Stop the cat
  if (!right.isDown && hamster.vy === 0) {
    hamster.vx = 0;
  }
};
right.press = function() {
  hamster.vx = 5;
  hamster.vy = 0;
};
right.release = function() {
  if (!left.isDown && hamster.vy === 0) {
    hamster.vx = 0;
  }
};