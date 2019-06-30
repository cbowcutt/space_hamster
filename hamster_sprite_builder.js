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
		let u = new SpriteUtilities(PIXI);
		var hamster_sprite = new PlayableCharacter();
		hamster_sprite.width = this.tile_width;
		hamster_sprite.height = this.tile_height;
		hamster_sprite.add_animation('walking_down', u.sprite(u.filmstrip('hamster_down', 128, 128)));
		hamster_sprite.add_animation('walking_left', u.sprite(u.filmstrip('hamster_left', 128,128)));
		hamster_sprite.add_animation('walking_up', u.sprite(u.filmstrip('hamster_up', 128, 128)));
		hamster_sprite.add_animation('walking_right', u.sprite(u.filmstrip('hamster_right', 128, 128)));
		hamster_sprite.add_animation('walking_down_hurt', u.sprite(u.filmstrip('hamster_down_hurt', 128, 128)));
		hamster_sprite.add_animation('walking_left_hurt', u.sprite(u.filmstrip('hamster_left_hurt', 128,128)));
		hamster_sprite.add_animation('walking_up_hurt', u.sprite(u.filmstrip('hamster_up_hurt', 128, 128)));
		hamster_sprite.add_animation('walking_right_hurt', u.sprite(u.filmstrip('hamster_right_hurt', 128, 128)));
		hamster_sprite.set_current_animation('walking_down');
		hamster_sprite.animate(scene, id);
		Player = hamster_sprite;
	}
	
	this.createRat = function(name, id) {
		let u = new SpriteUtilities(PIXI);
		var sprite = new RatNPC();
		sprite.width = 32;
		sprite.height = 32;
		
		sprite.add_animation('walking_down', u.sprite(u.filmstrip('rat_down', 32, 32)));
		sprite.add_animation('walking_left', u.sprite(u.filmstrip('rat_left', 32,32)));
		sprite.add_animation('walking_up', u.sprite(u.filmstrip('rat_up', 32, 32)));
		sprite.add_animation('walking_right', u.sprite(u.filmstrip('rat_right', 32, 32)));
		sprite.set_current_animation('walking_down');
		sprite.animate(scene, id);
		return sprite;
	}
	
	this.createCoin = function(x, y)
	{
		let u = new SpriteUtilities(PIXI);
		var sprite = new Coin(x, y);
		sprite.width = 32;
		sprite.height = 32;
		let texture = u.frame("coin_1", 0, 0, 32, 32);
		sprite.add_animation("spinningCoin", u.sprite(u.filmstrip("coin_1", 32, 32)));
		sprite.set_current_animation('spinningCoin');
		sprite.animate(scene);
		return sprite;
	}
	
	this.createHealthBar = function(healthCount, name, id) {
		var hearts = [];
		let u = new SpriteUtilities(PIXI);
		for (var i = 0; i < healthCount; i++)
		{
			var sprite = new Heart(i * TILEWIDTH, 32);
			sprite.width = 32;
			sprite.height = 32;
			sprite.add_animation('heart', u.sprite(u.filmstrip('heart', 32, 32)));
			sprite.set_current_animation('heart');
			sprite.current_animation.y = sprite.x;
	    	sprite.current_animation.x = sprite.y;
			sprite.animate(scene);
			hearts.push(sprite);
		}
		return hearts;
	}


}
