stage = new PIXI.Container(),
renderer = PIXI.autoDetectRenderer(512, 512);
renderer.backgroundColor = 0xFFFFFF;
renderer.view.style.border = "1px dashed black";
document.body.appendChild(renderer.view);
  
//Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add("images/sprites/hamster.gif")
  .add("images/sprites/tv.jpg")
  .add("images/sprites/hamster_wheel.png")
  .add("images/sprites/gamecube.png")
  .add("images/sprites/imac.gif")
  .add("images/sprites/control_panel.gif")
  .add("images/tile.jpg")
  .add("images/sprites/bed.png")
  .load(setup);


function setup() {
  draw_background();
  draw_hamster();
  draw_furniture();
  
  state = inside_ship;

  
  gameLoop();
}
  
function draw_background(){
  var step_x = renderer.width / 8;
  var step_y = renderer.height / 8;
  var tile_texture = PIXI.utils.TextureCache["images/tile.jpg"];
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
  hamster_texture = PIXI.utils.TextureCache["images/sprites/hamster.gif"];
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
  
function gameLoop(){
  requestAnimationFrame(gameLoop);
  state();
  renderer.render(stage);
}

function inside_ship() {
  hamster.x += hamster.vx;
  hamster.y += hamster.vy
}