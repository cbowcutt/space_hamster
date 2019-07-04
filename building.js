function Building()
{
	Animatable.call(this);
	this.animations = {
		"static": null
	}
}

function Home(spriteUtilities, _x, _y)
{

	Animatable.call(this);
	this.x = _x * TILEWIDTH;
	this.y = _y * TILEHEIGHT;
	this.animations["static"] = spriteUtilities.sprite(spriteUtilities.filmstrip('home', 96, 96));

	this.animate = function(renderer) {
	if (this.current_animation != undefined)
	{
		renderer.add(this.current_animation);
		this.current_animation.x = this.x;
		this.current_animation.y = this.y;
		this.current_animation.animationSpeed = 0.15;
		this.current_animation.width = 256;
		this.current_animation.height = 256;
		this.current_animation.play();
	}
}
}