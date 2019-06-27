function Heart(_x, _y) {
	Animatable.call(this);
	this.x = _x;
	this.y = _y;
	this.animations = {
		'heart': undefined
	};
}

function HeartDisplay()
{
	Heart.call(this);
}