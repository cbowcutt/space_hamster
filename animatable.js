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
	};

	this.animate = function(renderer) {
		renderer.add(this.current_animation);
		this.current_animation.animationSpeed = 0.15;
		this.current_animation.width = 32;
		this.current_animation.height = 32;
		this.current_animation.play();
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
