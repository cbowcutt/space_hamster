function WeaponShop()
{
	Animatable.Call(this);
	this.Items = [];
	this.x = 478;
	this.y = 320;
	this.SetupDisplay = function()
	{

	}
	
	this.CalculateImageCoordinateForItem = function(itemIndex)
	{
		var _x = 64 + ((itemIndex % 3) * 64);
		var _y = 96 + (Math.floor(itemIndex / 3) * 96);
		return { x: _x, y: _y};
	}
	
	this.Animate = function(renderer)
	{
		var itemCount = thisItems.Length;
		for (var i = 0; i < itemCount; i++)
		{
			var coordinates = this.CalculateImageCoordinateForItem(itemIndex);
			this.Items[i].Animate(coordinates.x, coordinates.y);
			
		}
	}
	
	this.CreateImage = function()
	{
		
	}
}

function ForSale(_name, _cost, _description)
{
	Animatable.Call(this);
	this.name = name;
	this.cost = cost;
	this.description = description;
	
	this.add_animation("forSale", u.sprite(u.filmstrip("forSale", 128, 96)));
	
	this.ItemPreview = itemPreview;
	
	
	
	this.AnimateSign = function(x, y, renderer)
	{
		this.current_animation.width = 256;
		this.current_animation.height = 256;
		this.current_animation.x = x;
		this.current_animation.y = y;
		this.current_animation.play();
	}
}
