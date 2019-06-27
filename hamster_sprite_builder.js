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


}
