function Character() {
	Animatable.call(this);
	this.speed = 5;

	this.animations = {
		'walking_left': undefined,
		'walking_right': undefined,
		'walking_up': undefined,
		'walking_down': undefined
	};

	this.move = function(keyCode) {
		var LEFT = 37;
	    var RIGHT = 39;
	    var UP = 38;
	    var DOWN = 40;

	    var new_animation_id = undefined;

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
	    	new_animation_id = 'walking_up';
	    }
	    else if(keyCode == DOWN) {
	    	dy = this.speed;
	    	new_animation_id = 'walking_down';
	    }

	    var new_boundary = {
	    	x: current_x + dx,
	    	y: current_y + dy,
	    	width: this.current_animation.width,
	    	height: this.current_animation.height
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

}

function PlayableCharacter(){
	Character.call(this);
}




	// this.moveLeft = function() { 
	// 	var current_x = this.current_animation.x;
	// 	var current_y = this.current_animation.y;
	// 	this.remove_current_animation_from_canvas();
	// 	this.set_current_animation('walking_left');
	// 	this.current_animation.y =  current_y;
	// 	this.current_animation.x =  current_x - this.speed;
	// 	scene.stage.position.x += Player.speed;
	// 	if(detect_collisions()) {
	// 		this.current_animation.x = current_x;
	// 		scene.stage.position.x -= Player.speed;
	// 	}
	// 	this.animate(scene);
	// }
	// this.moveRight = function() { 
	// 	var current_x = this.current_animation.x;
	// 	var current_y = this.current_animation.y;
	// 	this.remove_current_animation_from_canvas();
	// 	this.set_current_animation('walking_right');
	// 	this.current_animation.y =  current_y;
	// 	this.current_animation.x =  current_x + this.speed;
	// 	scene.stage.position.x -= Player.speed;
	// 	if(detect_collisions()) {
	// 		this.current_animation.x = current_x;
	// 		scene.stage.position.x += Player.speed;
	// 	}
	// 	this.animate(scene);
	// }
	// this.moveUp = function(){
	// 	var current_x = this.current_animation.x;
	// 	var current_y = this.current_animation.y;
	// 	this.remove_current_animation_from_canvas();
	// 	this.set_current_animation('walking_up');
	// 	this.current_animation.y =  current_y - this.speed;
	// 	this.current_animation.x =  current_x;
	// 	scene.stage.position.y += Player.speed;
	// 	if(detect_collisions()) {
	// 		this.current_animation.y = current_y;
	// 		scene.stage.position.y -= Player.speed;
	// 	}
	// 	this.animate(scene);
	// }
	// this.moveDown = function(){
	// 	var current_x = this.current_animation.x;
	// 	var current_y = this.current_animation.y;
	// 	this.remove_current_animation_from_canvas();
	// 	this.set_current_animation('walking_down');
	// 	this.current_animation.y =  current_y + this.speed;
	// 	this.current_animation.x =  current_x;
	// 	scene.stage.position.y -= Player.speed;
	// 	if(detect_collisions()) {
	// 		this.current_animation.y = current_y;
	// 		scene.stage.position.y += Player.speed;
	// 	}
	// 	this.animate(scene);
	// }