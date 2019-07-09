function WeaponShop()
{
	Animatable.call(this);
	this.Items = [];
	this.width = 478;
	this.height = 320;
	
	this.CalculateImageCoordinateForItem = function(itemIndex)
	{
		var _x = 96 + ((itemIndex % 3) * 64);
		var _y = 64 + (Math.floor(itemIndex / 3) * 96);
		return { x: _x, y: _y};
	}
	
	this.animate = function(renderer)
	{
		this.current_animation.x = 0;
		this.current_animation.y = 0;
		this.current_animation.width = 478;
		this.current_animation.height = 320;
		renderer.add(this.current_animation);
		this.current_animation.play()
		var itemCount = this.Items.length;
		for (var i = 0; i < itemCount; i++)
		{
			var coordinates = this.CalculateImageCoordinateForItem(i);
			var itemSprite = this.Items[i];
			itemSprite.set_current_animation("static");
			itemSprite.current_animation.x = coordinates.x;
			itemSprite.current_animation.y = coordinates.y;
			itemSprite.current_animation.width = itemSprite.width;
			itemSprite.current_animation.height = itemSprite.height;
			renderer.add(itemSprite.current_animation);
			itemSprite.current_animation.play();
			
		}
	}
	
}

// function ForSale(_name, _cost, _description, u)
// {
	// Animatable.call(this);
	// this.name = _name;
	// this.cost = _cost;
	// this.description = _description;
	
	// this.add_animation("popgun", u.sprite(u.filmstrip("popgun", 128, 96)));
	
	
	
	
	// this.AnimateSign = function(x, y, renderer)
	// {
		// renderer.add(this.current_animation);
		// this.current_animation.width = 32;
		// this.current_animation.height = 32;
		// this.current_animation.x = x;
		// this.current_animation.y = y;
		// this.current_animation.play();
	// }
// }
