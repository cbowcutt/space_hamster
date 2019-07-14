function Rat(CreateSprite) {
	Fiend.call(this);
	this.speed = 5;
	this.dx = 1;
	this.dy = 1

	this.animations = {
		'walking_left': CreateSprite('rat_left', 32, 32)),
		'walking_right': CreateSprite('rat_right', 32, 32)),
		'walking_up': CreateSprite('rat_up', 32, 32)),
		'walking_down': CreateSprite('rat_down', 32, 32)),
	};
}

function SunScion(spriteUtilities) {
	Fiend.call(this);
	this.animations = {
		'walking_left': CreateSprite('sun_scion', 96, 96)),
		'walking_right': CreateSprite('sun_scion', 96, 96)),
		'walking_up': CreateSprite('sun_scion', 96, 96)),
		'walking_down': CreateSprite('sun_scion', 96, 96)),
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
