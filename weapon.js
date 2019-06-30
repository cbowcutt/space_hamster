function Weapon(_character)
{
	Animatable.call(this);
	this.animations = {
		"swing": undefined
	}
	this.character = _character;
	this.x = this.character.current_animation.x;
	this.y = this.character.current_animation.y + TILEHEIGHT;
	
	this.move = function(keyCode) {
		var SPACE = 32;
		var new_animation_id = undefined;
		if (keyCode == SPACE)
		{
			var characterOrientation = this.character.current_animation_id;
			
			new_animation_id = "swing";
			this.set_current_animation(new_animation_id);
			this.current_animation.x = this.character.current_animation.x;
			this.current_animation.y = this.character.current_animation.y;
			if (characterOrientation.indexOf("down") > -1)
			{
				this.current_animation.y += TILEHEIGHT;
			}
			if (characterOrientation.indexOf("left") > -1)
			{
				this.current_animation.x -= TILEHEIGHT;
			}
			if (characterOrientation.indexOf("right") > -1)
			{
				this.current_animation.x += TILEHEIGHT;
			}
			if (characterOrientation.indexOf("up") > -1)
			{
				this.current_animation.y -= TILEHEIGHT;
			}
			this.animate(scene);
			
			setTimeout(() => {
				if (this.current_animation != undefined) {
				this.remove_current_animation_from_canvas();
				scene.remove(this);
			}}, 250);
		}
	}
}