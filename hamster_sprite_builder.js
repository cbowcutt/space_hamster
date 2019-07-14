function CreatePIXISprite(id, width, height) {
	let spriteUtilities = new SpriteUtilities(PIXI);
	return spriteUtilities.sprite(spriteUtilities.filmstrip(id, width, height));
}

function HamsterSpriteBuilder() {

	this.width = TILEWIDTH;
	this.height = TILEHEIGHT;

	this.create = function(name, id) {

		let u = new SpriteUtilities(PIXI);
		var hamster_sprite = new Character();
		hamster_sprite.width = this.tile_width;
		hamster_sprite.height = this.tile_height;
		hamster_sprite.add_animation('walking_down', u.sprite(u.filmstrip('hamster_down', 128, 128)));
		hamster_sprite.add_animation('walking_left', u.sprite(u.filmstrip('hamster_left', 128,128)));
		hamster_sprite.add_animation('walking_up', u.sprite(u.filmstrip('hamster_up', 128, 128)));
		hamster_sprite.add_animation('walking_right', u.sprite(u.filmstrip('hamster_right', 128, 128)));
		hamster_sprite.set_current_animation('walking_down');
		hamster_sprite.animate(scene, id);

	}

	this.createPlayable = function(name, id) {
		var hamster_sprite = new Character(CreatePIXISprite);
		hamster_sprite.width = this.tile_width;
		hamster_sprite.height = this.tile_height;
		hamster_sprite.set_current_animation('walking_left');
		hamster_sprite.animate(scene);
		Player = hamster_sprite;
	}

	this.createRat = function(name, id) {
		let u = new SpriteUtilities(PIXI);
		var sprite = new Rat(u);
		sprite.set_current_animation("walking_down");
		sprite.animate(scene);
		return sprite;
	}

	this.createHome = function(x, y)
	{
		var sprite = new Home(CreatePIXISprite, x, y);
		sprite.animate(scene);
		return sprite;
	}


	this.createCoin = function(x, y)
	{
		let u = new SpriteUtilities(PIXI);
		var sprite = new Coin(x, y);
		let texture = u.frame("coin_1", 0, 0, 32, 32);
		sprite = configAnimatable(sprite, 32, 32, {"spinningCoin": u.sprite(u.filmstrip("coin_1", 32, 32))}, "spinningCoin")
		return sprite;
	}

	this.createSword = function(character)
	{
		let u = new SpriteUtilities(PIXI);
		var sprite = new Weapon(character);
		sprite = configAnimatable(sprite, 32, 32,  {"swing": u.sprite(u.filmstrip("sword", 32, 32))}, "swing");
		return sprite;
	}

	this.createHealthBar = function(healthCount, name, id) {
		var hearts = [];
		let u = new SpriteUtilities(PIXI);
		for (var i = 0; i < healthCount; i++)
		{
			var sprite = new Heart(i * TILEWIDTH, 32);
			hearts.push(configAnimatable(sprite, 32, 32, {"heart": u.sprite(u.filmstrip("heart", 32, 32))}, "heart"));
		}
		return hearts;
	}

	this.createDoor = function(x, y, transition)
	{
		let u = new SpriteUtilities(PIXI);
		var sprite = new Door(x, y, transition);
		var animations = {"door": u.sprite(u.filmstrip("doors", 32, 32))};
		sprite = configAnimatable(sprite, 32, 32, animations, "door");
		return sprite;
	}


	function configAnimatable(sprite, width, height, animations, currentAnimation)
	{
		sprite.width = width;
		sprite.height = height;
		Object.keys(animations).forEach(key => sprite.add_animation(key, animations[key]));
		sprite.set_current_animation(currentAnimation);

		sprite.animate(scene);
		return sprite;
	}
	this.createItemShop = function()
	{
		let u = new SpriteUtilities(PIXI);
		var weaponShopSprite = new WeaponShop(CreatePIXISprite);

		var highlightSprite = new Animatable();
		highlightSprite.add_animation("static", u.sprite(u.filmstrip("highlight", 32, 32)));
		highlightSprite.set_current_animation("static");
		weaponShopSprite.SetHighlightAnimation(highlightSprite);
		configAnimatable(weaponShopSprite, 0, 0, {"static": u.sprite(u.filmstrip("weaponShop", 478, 320)) }, "static");

		var popgunSprite = new Animatable();
		popgunSprite.add_animation("static", u.sprite(u.filmstrip("popgun", 32, 32)));
		popgunSprite.width = 32;
		popgunSprite.height = 32;
		weaponShopSprite.Items.push(popgunSprite);
		var dagger = new Animatable();
		dagger.add_animation("static", u.sprite(u.filmstrip("sword", 32, 32)));
		dagger.width = 32;
		dagger.height = 32;
		weaponShopSprite.Items.push(dagger);
		var heart = new Animatable();
		heart.add_animation("static", u.sprite(u.filmstrip("heart", 32, 32)));
		heart.width = 32;
		heart.height = 32;
		weaponShopSprite.Items.push(heart);

		weaponShopSprite.animate(scene);

		return weaponShopSprite;

	}




}
