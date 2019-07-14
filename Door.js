function Door(_x, _y, _setup, _transition)
{
	Animatable.call(this);
	this.x = _x;
	this.y = _y;
	this.animations = {
		"door": undefined
	};
	this.move = function()
	{

	}

	this.Transition =
	{
		setup: setup,
		transition: _transition
	}
}
