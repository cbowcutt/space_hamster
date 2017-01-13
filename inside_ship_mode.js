
  
// //Use Pixi's built-in `loader` object to load an image
// PIXI.loader
//   .add("images/sprites/hamster.gif")
//   .add("images/sprites/tv.jpg")
//   .add("images/sprites/hamster_wheel.png")
//   .add("images/sprites/gamecube.png")
//   .add("images/sprites/imac.gif")
//   .add("images/sprites/control_panel.gif")
//   .add("images/sprites/tile.png")
//   .add("images/sprites/bed.png")
//   .load(inside_ship_setup);


// function inside_ship_setup() {
//   draw_background();
//   draw_hamster();
//   draw_furniture();
//   state = inside_ship;
//   gameLoop();
// }
  
function draw_spaceship_background(){
  var step_x = renderer.width / 8;
  var step_y = renderer.height / 8;
  var tile_texture = PIXI.utils.TextureCache["images/sprites/tile.png"];
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
  
function draw_hamster(){
    // add the hamster
  hamster_texture = PIXI.utils.TextureCache["images/sprites/hamster.png"];
  hamster = new PIXI.Sprite(hamster_texture)
  hamster.width = renderer.width / 4.0;
  hamster.height = renderer.height / 4.0;
  hamster.vx = 0;
  hamster.vy = 0;
  hamster.x = 96;
  hamster.y = 96;
  stage.addChild(hamster);
}
  
function draw_furniture(){
    // add the tv
  tv_texture = PIXI.utils.TextureCache["images/sprites/tv.jpg"];
  tv = new PIXI.Sprite(tv_texture)
  tv.width = renderer.width / 4.0;
  tv.height = renderer.height / 4.0;
  tv.x = 348;
  tv.y = 0;
  stage.addChild(tv);
  
  // add the hamster wheel
  wheel_texture = PIXI.utils.TextureCache["images/sprites/hamster_wheel.png"];
  wheel = new PIXI.Sprite(wheel_texture)
  wheel.width = renderer.width / 3.0;
  wheel.height = renderer.height / 3.0;
  wheel.x = 0;
  wheel.y = 348;
  stage.addChild(wheel);
   
  // add the gamecube
  gamecube_texture = PIXI.utils.TextureCache["images/sprites/gamecube.png"];
  gamecube = new PIXI.Sprite(gamecube_texture)
  gamecube.width = renderer.width / 5.0;
  gamecube.height = renderer.height / 5.0;
  gamecube.x =512 -106;
  gamecube.y = 96;
  stage.addChild(gamecube);
  
  // add the imac
  imac_texture = PIXI.utils.TextureCache["images/sprites/imac.gif"];
  imac = new PIXI.Sprite(imac_texture)
  imac.width = renderer.width / 5.0;
  imac.height = renderer.height / 5.0;
  imac.x =348 - 96;
  imac.y = 0;
  stage.addChild(imac);
  
  //add the control panel
  panel_texture = PIXI.utils.TextureCache["images/sprites/control_panel.gif"];
  control_panel = new PIXI.Sprite(panel_texture)
  control_panel.width = renderer.width / 3.0;
  control_panel.height = renderer.height / 3.0;
  control_panel.x =0;
  control_panel.y = 0;
  stage.addChild(control_panel);
//   draw_control_panel();
  
  // add the bed
  bed_texture = PIXI.utils.TextureCache["images/sprites/bed.png"];
  bed = new PIXI.Sprite(bed_texture)
  bed.width = renderer.width / 3.0;
  bed.height = renderer.height / 3.0;
  bed.x =512 - 96 - 48;
  bed.y = 512 - 96 - 96;
  stage.addChild(bed);
}
  
function load_inside_ship_controls() {
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
      piloting_ship_setup();
  }
}

