function Door(_x, _y, transition)
{
	Animatable.call(this);
	this.x = _x * TILEWIDTH;
	this.y = _y * TILEHEIGHT;
	this.animations = {
		"door": undefined
	};
	this.move = function()
	{
		
	}
	this.Transition = transition;
}