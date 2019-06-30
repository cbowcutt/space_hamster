function Coin(_x, _y)
{
	Animatable.call(this);
	this.x = _x * TILEWIDTH;
	this.y = _y * TILEHEIGHT;
	this.animations = {
		"spinningCoin": undefined
	};
	this.move = function()
	{
		
	}
}


