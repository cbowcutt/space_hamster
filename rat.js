function Rat()
{
	this.dx = 1;
	this.dy = 1
	Animatable.Call(this);
	this.animations = {
		'walking_left': undefined,
		'walking_right': undefined,
		'walking_up': undefined,
		'walking_down': undefined
	};

	this.move = function()
	{
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
	    	dy = -dy;
	    	dx = -dx;
	    	this.animate(scene);
	    }
	}
}

function Walkable()
{
	this.speed = 2
	this.animations = {
		'walking_left': undefined,
		'walking_right': undefined,
		'walking_up': undefined,
		'walking_down': undefined
	};
}