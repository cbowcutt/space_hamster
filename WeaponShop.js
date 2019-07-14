function WeaponShop(createSprite)
{
	this.Domains = {
		ITEM_SELECT: 0,
		EXIT: 1
	}
	Animatable.call(this);
	this.Items = [];
	this.width = 478;
	this.height = 320;

	this.SelectedIndex = 0;

	this.CurrentDomain = this.Domains.ITEM_SELECT;

	this.Arrow = new Arrow(createSprite, 64, 400);

	this.CalculateImageCoordinateForItem = function(itemIndex)
	{
		var _x = 96 + ((itemIndex % 3) * 64);
		var _y = 64 + (Math.floor(itemIndex / 3) * 96);
		return { x: _x, y: _y};
	}

	this.SetHighlightAnimation = function(sprite)
	{
		this.Highlight = sprite;
	}

	this.SwitchSelectionDomain = function()
	{
		if (this.CurrentDomain == this.Domains.ITEM_SELECT)
		{
			this.CurrentDomain = this.Domains.EXIT;
		}
		else {
			this.CurrentDomain = this.Domains.ITEM_SELECT;
		}
	}


	this.animate = function(renderer)
	{
		this.current_animation.x = 0;
		this.current_animation.y = 0;
		this.current_animation.width = 478;
		this.current_animation.height = 320;
		renderer.add(this.current_animation);
		this.current_animation.play();
		var itemCount = this.Items.length;
		this.Arrow.animate(renderer);

		for (var i = 0; i < itemCount; i++)
		{
			var itemSprite = this.Items[i];
			var coordinates = this.CalculateImageCoordinateForItem(i);
			if (i == this.SelectedIndex && this.CurrentDomain == this.Domains.ITEM_SELECT)
			{
				this.Highlight.current_animation.x = coordinates.x;
				this.Highlight.current_animation.y = coordinates.y;
				this.Highlight.current_animation.width = itemSprite.width;
				this.Highlight.current_animation.height = itemSprite.height;

			}

			itemSprite.set_current_animation("static");
			itemSprite.current_animation.x = coordinates.x;
			itemSprite.current_animation.y = coordinates.y;
			itemSprite.current_animation.width = itemSprite.width;
			itemSprite.current_animation.height = itemSprite.height;
			renderer.add(itemSprite.current_animation);
			itemSprite.current_animation.play();

		}

		if (this.CurrentDomain == this.Domains.EXIT)
		{
			this.Highlight.current_animation.x = this.Arrow.x;
			this.Highlight.current_animation.y = this.Arrow.y;
			this.Highlight.current_animation.width = this.Arrow.width;
			this.Highlight.current_animation.height = this.Arrow.height;
		}
		renderer.add(this.Highlight.current_animation);
		this.Highlight.current_animation.play();
	}

	this.MoveSelection = function(delta)
	{
		this.SelectedIndex += delta;
		if (this.SelectedIndex < 0 )
		{
			this.SelectedIndex = this.Items.length - 1;
		}
		else if (this.SelectedIndex > this.Items.length - 1)
		{
			this.SelectedIndex = 0;
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
