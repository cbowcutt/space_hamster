function Character() {
	Animatable.call(this);
	this.speed = 5;
	
	this.CanTakeDamage = true;

	this.animations = {
		'walking_left': undefined,
		'walking_right': undefined,
		'walking_up': undefined,
		'walking_down': undefined
	};
	
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