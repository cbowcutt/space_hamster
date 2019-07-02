


function MapBuilder() {
	function Map() {
		// sprite
		this.background = undefined;
		// for detecting collisions/ objects
		this.atlas = undefined;
		this.doors = [];

	}



	this.neighborhood_1 = function() {
		var map = new Map();
		map.atlas = [];
		for( var i = 0; i < 20; i++)
		{
			map.atlas.push([])
			for (var j = 0; j < 20; j++)
			{
				map.atlas[i].push(0);
			}
			for (var j = 8; j < 12; j++)
			{
				map.atlas[i][j] = 1;
			}
		}
		var tileDictionary = {
			1: "gray",
			0: "green"
		}
		
		map.background = new PIXI.Sprite(PIXI.Texture.fromCanvas(BuildCanvas(map.atlas, tileDictionary, TILEWIDTH, TILEHEIGHT)));
		scene.add(map.background);
		CurrentMap = map;
	}

	this.inside_home = function() {
		var map = new Map();
		map.background = new PIXI.Sprite(PIXI.loader.resources.inside_home.texture);
		map.background.width /= 2.0;
		map.background.height /= 2.0;

		map.atlas = [
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		  [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0,],
		  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,],
		  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,],
		  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
		  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
		  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]

		];

		map.doors.push(new Door(9, 8, neighborhood_1_setup));
  		map.doors.push(new Door(10, 8, neighborhood_1_setup));

		scene.add(map.background);
		CurrentMap = map;
	}
	
	this.procedural_dungeon = function(roomCount)
	{
		var map = new Map();
		var tuple = generator.generateMap(roomCount);
		map.atlas = tuple.atlas;
		map.atlas[2][2] = 2;
		var doorCoordinates = tuple.doorCoordinates
		map.background = new PIXI.Sprite(PIXI.Texture.fromCanvas(BuildCanvasFromAtlas(map.atlas, null, TILEWIDTH, TILEHEIGHT)));
		// map.background.width /= 2.0;
		// map.background.height /= 2.0;
		map.doors.push(new Door(doorCoordinates[0], doorCoordinates[1], procedural_dungeon_setup));

		map.doors.push(new Door(2, 2, neighborhood_1_setup));
		scene.add(map.background);
		CurrentMap = map;
	}
}

function Door(_x, _y, transition_callback) {
  this.x = _x;
  this.y = _y;
  this.width = TILEWIDTH;
  this.height = TILEHEIGHT;
  // this.new_map
  this.rectangle = {x: _x * TILEWIDTH, y: _y * TILEHEIGHT, width: TILEWIDTH, height: TILEHEIGHT};
  // returns boolean 
  this.intersects_player = function()
  {
    if(intersects(player_sprite, this.rectangle))
    {
      return true;
    }
    return false;
  }

  this.setup_new_state = function() { transition_callback(); }
}




