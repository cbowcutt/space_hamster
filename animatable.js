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
		this.current_animation.x = this.x;
		this.current_animation.y = this.y;
		this.current_animation.width = this.width;
		this.current_animation.height = this.height;
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

function SunScion(CreateSprite, _x0, _y0) {
	Animatable.call(this);
	this.width = 96;
	this.height = 96;
	this.x = _x0;
	this.y = _y0;
	this.animations = {
		'walking_left': CreateSprite('sun_scion', 96, 96),
		'walking_right': CreateSprite('sun_scion', 96, 96),
		'walking_up': CreateSprite('sun_scion', 96, 96),
		'walking_down': CreateSprite('sun_scion', 96, 96),
	};
	this.set_current_animation("walking_left");

	this.x0 = _x0;
	this.y0 = _y0;
	this.t = 0;
	this.period = 50;
	this.Move = function() {
		
		this.amplitude = -200;
		this.t++;
		this.dx = this.amplitude * Math.sin(this.t/this.period);
		this.dy = this.amplitude * Math.cos(this.t/this.period);
		var newY = this.y0 + this.dy;
		var newX = (this.x0 + this.dx);
		this.x = newX < this.x0 ? newX : this.x0;
		this.y = newY < this.y0 ? this.y0 : newY;
	}
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

	this.width = 64;
	this.height = 64;

	this.CanTakeDamage = true;
	this.animations = {
		'walking_left': this.createSprite('hamster_left', 87, 100),
		'walking_right': this.createSprite('hamster_right', 87, 100),
		'walking_up': this.createSprite('hamster_right', 87, 100),
		'walking_down': this.createSprite('hamster_right', 87, 100),
		'walking_left_hurt': this.createSprite('hamster_left', 87, 100),
		'walking_right_hurt': this.createSprite('hamster_right', 87, 100),
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

			var sceneCoord = {x: scene.stage.position.x * -1 , y: (scene.stage.position.y) * -1 }

			var yDifference = Math.abs(this.current_animation.y  - sceneCoord.y);
			var xDifference = Math.abs(this.current_animation.x - sceneCoord.x);
			var sceneTranslation = { x: 0, y: 0 };
			if (yDifference > scene.stage.height * .75)
			{
				sceneTranslation.y = this.speed;
				//scene.stage.position.y -= dy;
			}
			if (yDifference < scene.stage.height * .25)
			{
				sceneTranslation.y = -this.speed;
			}
			if (xDifference > (scene.stage.width * .75))
			{
				sceneTranslation.x = this.speed;
			}
			if (xDifference < scene.stage.width * .25)
			{
				sceneTranslation.x = -this.speed;
			}
			sceneCoord.x += sceneTranslation.x;
			sceneCoord.y += sceneTranslation.y;
			scene.stage.position.x = sceneCoord.x * -1;
			scene.stage.position.y = sceneCoord.y * -1;
	    	this.animate(scene);
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
	this.width = 32;
	this.height = 32;
	Animatable.call(this);

	this.move = function() {
	for (var i = 0; i < hearts.length; i++)
    {
      var sprite = hearts[i];
      sprite.x = -scene.stage.position.x + i * 32;
      sprite.y = -scene.stage.position.y;

      sprite.width = this.width;
      sprite.height = this.height;
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
