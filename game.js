var doors= [];

var inside_home_tilemap


const TILEWIDTH = 32;
const TILEHEIGHT = 32;


var scene = new Scene(800, 600, 'myCanvas');
var Player = undefined;
var CurrentMap = undefined;

var CurrentGameLoop;

var npcs = []

var coins = [];


var wallet = 0;
var hearts;
var walletIcon;

var sword;
var home;
var Menu;


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
  map_builder.procedural_dungeon(10);

  var hamster_builder = new HamsterSpriteBuilder();
  hamster_builder.createPlayable();
  Player.set_position(5 * TILEWIDTH, 5 * TILEHEIGHT);
  sword = hamster_builder.createSword(Player);
  hearts = hamster_builder.createHealthBar(5);
  var rat = hamster_builder.createRat();
  var coin = hamster_builder.createCoin(3, 3);
  coins.push(coin);
  walletIcon = hamster_builder.createCoin(2, 2);
  rat.set_position(128, 128);
  npcs.push(rat);
  requestAnimationFrame(gameLoop);
}

function neighborhood_1_setup() {
  SetupPlayerController();
  // add the hamster
  scene.reset();
  var map_builder = new MapBuilder();
  map_builder.neighborhood_1();
  var hamster_builder = new HamsterSpriteBuilder();

  hamster_builder.createPlayable();
  Player.set_position(5 * TILEWIDTH, 5 * TILEHEIGHT);
  //   sword = hamster_builder.createSword(Player);
  // hearts = hamster_builder.createHealthBar(5);
  //   walletIcon = hamster_builder.createCoin(2, 2);
  var itemShop = hamster_builder.createHome(7 * TILEWIDTH, 7 * TILEHEIGHT);
  CurrentMap.doors.push(new Door(itemShop.doorRectangle().x, itemShop.doorRectangle().y, () => {
    item_shop_setup();
  }));
  requestAnimationFrame(neighborhoodLoop);
}

function item_shop_setup()
{
  CurrentGameLoop = itemShopLoop;
	SetupMenuController();
	scene.reset();
	var hamster_builder = new HamsterSpriteBuilder();
	Menu = hamster_builder.createItemShop();
	requestAnimationFrame(itemShopLoop);
}

function neighborhoodLoop()
{
    scene.render();
    if (!check_door_activations(Player))
    {
        requestAnimationFrame(neighborhoodLoop);
    }

}

function itemShopLoop()
{
	Menu.animate(scene);
	scene.render();
	requestAnimationFrame(itemShopLoop);
}



function gameLoop(){

  npcs.forEach(npc => npc.move());
  npcs = npcs.map(npc => check_enemy_collision(npc)).filter(npc => npc != null);
  check_coin_collision();
  move_wallet();
  move_hearts();
  check_coin_collision();
  animateCoins();
  scene.render();

  check_door_activations(Player);
  requestAnimationFrame(gameLoop);
};

window.onload = function() {
  CurrentGameLoop = neighborhoodLoop;
      PIXI.loader
      .add('hamster_left', 'images/hamster_left.png')
      .add('hamster_right', 'images/hamster_right.png')
      .add('hamster_up', 'images/hamster_up.png')
      .add('hamster_down', 'images/hamster_down.png')
	  .add('hamster_left_hurt', 'images/hamster_left_hurt.png')
      .add('hamster_right_hurt', 'images/hamster_right_hurt.png')
      .add('hamster_up_hurt', 'images/hamster_up_hurt.png')
      .add('hamster_down_hurt', 'images/hamster_down_hurt.png')
	  .add('rat_left', 'images/rat_left.png')
      .add('rat_right', 'images/rat_right.png')
      .add('rat_up', 'images/rat_up.png')
      .add('rat_down', 'images/rat_down.png')
      .add('neighborhood_1', 'images/neighborhood_1.png')
      .add('inside_home', 'images/inside_home.png')
	  .add('heart', 'images/heart.png')
	  .add('coin_1', 'images/goldCoin1.png')
	  .add('coin_2', 'images/goldCoin2.png')
	  .add('coin_3', 'images/goldCoin3.png')
	  .add('coin_4', 'images/goldCoin4.png')
	  .add('coin_5', 'images/goldCoin5.png')
	  .add('coin_6', 'images/goldCoin6.png')
	  .add('coin_7', 'images/goldCoin7.png')
	  .add('sword', 'images/sword.png')
	  .add('doors', 'images/dungeonHole.png')
      .add('home', 'images/house.png')
	  .add("weaponShop", "images/shop_template_with_creature478x320.png")
	  .add('popgun', 'images/popgun.png')
	  .add('highlight', 'images/highlight_32x32.png')
	  .add('house_taco', 'images/house_taco_81x41.png')
      .load(neighborhood_1_setup);
}

function animateCoins()
{
	for (var i = 0; i < coins.length; i++)
	{
		var sprite = coins[i];
		sprite.current_animation.x = sprite.x;
		sprite.current_animation.y = sprite.y;
		sprite.animate(scene);
	}
}


function move_hearts()
{
    for (var i = 0; i < hearts.length; i++)
    {
      var sprite = hearts[i];
      sprite.x = -scene.stage.position.x + i * 32;
      sprite.y = -scene.stage.position.y;

      sprite.width = 32;
      sprite.height = 32;
      sprite.set_current_animation('heart');
      sprite.current_animation.y = sprite.y;
      sprite.current_animation.x = sprite.x;
      sprite.animate(scene);
    }
}

function move_wallet()
{
	walletIcon.x = -scene.stage.position.x;
	walletIcon.y = -scene.stage.position.y + (TILEHEIGHT);
	walletIcon.width = 64;
	walletIcon.height = 64;
	walletIcon.current_animation.y = walletIcon.y;
	walletIcon.current_animation.x = walletIcon.x;
	walletIcon.animate(scene);
}



function check_door_activations() {
  var flag = true;
  for(var i = 0; i < CurrentMap.doors.length; i++) {
    var current_door = CurrentMap.doors[i];
    if (intersects(Player.current_animation, current_door.rectangle)) {
      current_door.setup_new_state();
      return true;
    }
  }
}

function check_enemy_collision(enemy) {
	if (intersects(Player.current_animation, enemy.current_animation))
	{
		if (Player.CanTakeDamage)
		{
			var s = hearts.pop();
			s.remove_current_animation_from_canvas()
			scene.remove(s);
			Player.MakeInvincible(4000);
		}
	}
	if (sword.current_animation != undefined && intersects(sword.current_animation, enemy.current_animation))
	{
		enemy.remove_current_animation_from_canvas()
		scene.remove(enemy);
		enemy = null;
	}
	return enemy;
}

function check_coin_collision() {
	var removeAtIndex = [];
	for (var i = 0; i < coins.length; i++)
	{
		if (intersects(Player.current_animation, coins[i].current_animation))
		{
			removeAtIndex.push(i);
		}
	}
	for (var i = 0; i < removeAtIndex.length; i++)
	{
		var s = coins[removeAtIndex[i]];
		s.remove_current_animation_from_canvas()
		scene.remove(s);
		coins = coins.filter(c => coins.indexOf(c) != removeAtIndex[i]);
	}
	wallet += removeAtIndex.length;
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

function menuController(event) {
    var LEFT = 37;
    var RIGHT = 39;
    var UP = 38;
    var DOWN = 40;
  var SPACE = 32;
    if(event.keyCode == LEFT) {
      Menu.MoveSelection(-1);
    }
  else if(event.keyCode == RIGHT) {
      Menu.MoveSelection(1);
    }
  }


function SetupMenuController()
{
  window.removeEventListener('keydown', playerController)
	window.addEventListener('keydown', menuController);
}

function playerController(event) {
  var LEFT = 37;
  var RIGHT = 39;
  var UP = 38;
  var DOWN = 40;
  var SPACE = 32;
    if(event.keyCode == LEFT || event.keyCode == RIGHT || event.keyCode == UP || event.keyCode == DOWN) {
      Player.move(event.keyCode);
    }
  if (event.keyCode == SPACE) {
    sword.move(event.keyCode);
  }
  }

function SetupPlayerController()
{
  window.removeEventListener('keydown', menuController)
	window.addEventListener('keydown', playerController);

}
