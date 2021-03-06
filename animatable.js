function Animatable() {
	this.x = undefined;
	this.y = undefined;
	this.width = undefined;
	this.height = undefined;
	this.animations = {};
	this.current_animation = undefined;

	this.stop_animation = function() {
		this.current_animation.stop();
	}

	this.remove_current_animation_from_canvas = function() {
		this.current_animation.stop();
		scene.remove(this.current_animation);
	}

	this.add_animation = function(name, animation) {

		this.animations[name] = animation
	}

	this.set_current_animation = function(key) {
		this.current_animation = this.animations[key];
		this.current_animation_id = key;
	};

	this.animate = function(renderer) {
	if (this.current_animation != undefined)
	{
		renderer.add(this.current_animation);
		this.current_animation.animationSpeed = 0.15;
		this.current_animation.width = 32;
		this.current_animation.height = 32;
		this.current_animation.play();
	}

	}

	this.set_position = function(_x, _y) {
		this.current_animation.x = _x;
		this.current_animation.y = _y;
	}

	this.set_size = function(_width, _height) {
		this.current_animation = _width;
		this.current_height = _height;
	}
}

function Building()
{
	Animatable.call(this);
	this.animations = {
		"static": null
	}
}

function Home(CreateSprite, _x, _y)
{
	Animatable.call(this);
	this.scale = 4;
	this.width = 81;
	this.height = 41;

	this.door_offset = {x: 18, y: 31};
	this.x = _x;
	this.y = _y;
	this.animations["static"] = CreateSprite('house_taco', this.width, this.height);
	this.set_current_animation("static");
	this.animate = function(renderer) {
		if (this.current_animation != undefined)
		{
			renderer.add(this.current_animation);
			this.current_animation.x = this.x;
			this.current_animation.y = this.y;
			this.current_animation.animationSpeed = 0.15;
			this.current_animation.width = this.width * this.scale;
			this.current_animation.height = this.height * this.scale;
			this.current_animation.play();
		}
	}

	this.doorRectangle = function(){
		return {
			x: this.x + (this.door_offset.x * this.scale),
			y: this.x + (this.door_offset.y * this.scale),
			width: 32 * this.scale,
			height: 32 * this.scale
		}

	}
}

function ItemShop(CreateSprite)
{

}

function Rat(CreateSprite) {
	Fiend.call(this);
	this.speed = 5;
	this.dx = 1;
	this.dy = 1

	this.animations = {
		'walking_left': CreateSprite('rat_left', 32, 32),
		'walking_right': CreateSprite('rat_right', 32, 32),
		'walking_up': CreateSprite('rat_up', 32, 32),
		'walking_down': CreateSprite('rat_down', 32, 32),
	}
}

function SunScion(spriteUtilities) {
	Fiend.call(this);
	this.animations = {
		'walking_left': CreateSprite('sun_scion', 96, 96),
		'walking_right': CreateSprite('sun_scion', 96, 96),
		'walking_up': CreateSprite('sun_scion', 96, 96),
		'walking_down': CreateSprite('sun_scion', 96, 96),
	};
}

function Fiend()
{
	Animatable.call(this);
	this.speed = 5;
	this.dx = 1;
	this.dy = 1

	this.animations = {
		'walking_left': undefined,
		'walking_right': undefined,
		'walking_up': undefined,
		'walking_down': undefined
	};

	this.move = function() {


	    var current_x = this.current_animation.x;
	    var current_y = this.current_animation.y;

	    var new_boundary = {
	    	x: current_x + this.dx,
	    	y: current_y + this.dy,
	    	width: this.current_animation.width,
	    	height: this.current_animation.height
	    };

	    if(detect_collisions(new_boundary)) {
			this.dy = -this.dy;
			this.dx = -this.dx;

	    	this.animate(scene);
	    }
		this.current_animation.y = current_y + this.dy;
		this.current_animation.x = current_x + this.dx;

	}
}


function Character(_createSprite) {
	Animatable.call(this);
	this.createSprite = _createSprite;
	this.speed = 5;

	this.CanTakeDamage = true;
	this.animations = {
		'walking_left': this.createSprite('hamster_left', 700, 700),
		'walking_right': this.createSprite('hamster_right', 700, 700),
		'walking_up': this.createSprite('hamster_right', 700, 700),
		'walking_down': this.createSprite('hamster_right', 700, 700),
		'walking_left_hurt': this.createSprite('hamster_left', 700, 700),
		'walking_right_hurt': this.createSprite('hamster_right', 700, 700)
	}

	this.MakeInvincible = function(time) {
		this.CanTakeDamage = false;
		setTimeout(() => {
			this.CanTakeDamage = true;
		}, time);
	};

	this.current_animation_id;

	this.move = function(keyCode) {
		var LEFT = 37;
	    var RIGHT = 39;
	    var UP = 38;
	    var DOWN = 40;

	    var new_animation_id = this.current_animation_id;

	    var current_x = this.current_animation.x;
	    var current_y = this.current_animation.y;

	    var dx = 0;
	    var dy = 0;

	    if(keyCode == LEFT) {
	    	dx = -this.speed;
	    	new_animation_id = 'walking_left';
	    }
	    else if(keyCode == RIGHT) {
	    	dx = this.speed;
	    	new_animation_id = 'walking_right';
	    }
	    else if(keyCode == UP) {
	    	dy = -this.speed;
	    	//new_animation_id = 'walking_up';
	    }
	    else if(keyCode == DOWN) {
	    	dy = this.speed;
	    	//new_animation_id = 'walking_down';
	    }
		if (this.CanTakeDamage == false)
		{
			new_animation_id += "_hurt";
		}

		this.current_animation_id = new_animation_id;


	    var new_boundary = {
	    	x: current_x + dx,
	    	y: current_y + dy,
	    	width: 64,
	    	height:64
	    };

	    if(!detect_collisions(new_boundary)) {
	    	this.remove_current_animation_from_canvas();
	    	this.set_current_animation(new_animation_id);
	    	this.current_animation.y = current_y + dy;
	    	this.current_animation.x = current_x + dx;
	    	scene.stage.position.y -= dy;
	    	scene.stage.position.x -= dx;
	    	this.animate(scene);
	    }
  }

  	this.animate = function(renderer) {
	if (this.current_animation != undefined)
	{
		renderer.add(this.current_animation);
		this.current_animation.animationSpeed = 0.15;
		this.current_animation.width = 64;
		this.current_animation.height = 64;
		this.current_animation.play();
	}
	}
}

function PlayableCharacter(){
	Character.call(this);
}

function Health(maxHearts)
{
	this.MaxHearts = maxHearts;
	this.HeldHearts = maxHearts;

	Animatable.call(this);

	this.move = function() {
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
}


function Arrow(createSprite, _x, _y)
{
	Animatable.call(this);
	this.width = 32;
	this.height = 32;
	this.x = _x;
	this.y = _y;
	this.animations = {
		"static": createSprite("arrow", 100, 100)
	}

	this.animate = function(renderer)
	{
			if (this.current_animation != undefined)
			{
				renderer.add(this.current_animation);
				this.current_animation.animationSpeed = 0.15;
				this.current_animation.x = this.x;
				this.current_animation.y = this.y;
				this.current_animation.width = 32;
				this.current_animation.height = 32;
				this.current_animation.play();
			}
	}
	this.set_current_animation("static")
}
