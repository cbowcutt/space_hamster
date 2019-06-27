function Heart(_x, _y) {
	Animatable.call(this);
	this.x = _x;
	this.y = _y;
	this.animations = {
		'heart': undefined
	};
	
	this.move = function() {}
}

function HeartDisplay()
{
	Heart.call(this);
}