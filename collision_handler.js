function CollisionHandler() {
	this.intersects = function(rect1, rect2) {
  		if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y)
  		{
    		return true;
  		}
  		return false;
	};

	this.checkDoorActivations = function(player_sprite, doors) {
		for(var door in doors) {
			if(this.intersects(player_sprite.rectangle, door.rectangle)) {
				return door;
			}
		}
		return null;
	}

	this.checkWallCollisions = function(player_sprite, atlas) {
		for(var y = 0; y < atlas.length; y++) {
			for(var x = 0; x < atlas[y].length; x++) {
				var current_tile = atlas[y][x];
				var current_rectangle = {
					x: x * 32,
					y: y * 32,
					width: 32,
					height: 32
				};
				if(this.intersects(player_sprite.rectangle, current_rectangle)) {
					return true;
				}
			}
		}
		return false;
	}

	this.checkInterfaceActivations = function(player_sprite, interfaces) {
		for(var interface in interfaces) {
			if(this.intersects(player_sprite.rectangle, interface.rectangle)) {
				return door;
			}
		}
		return null;
	}
};
