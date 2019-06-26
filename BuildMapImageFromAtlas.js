function BuildCanvasFromAtlas(map, tileDictionary, tileWidth, tileHeight)
{
	var mapWidth = Math.max.apply(null, map.map(a => a.length));
	var c = document.createElement("canvas");
	c.width = mapWidth * tileWidth;
	c.height = map.length * tileHeight;
	c.hidden = true;
	c.Id = "mapCanvas";
	var ctx = c.getContext("2d");
	for (var x = 0; x < mapWidth; x++)
	{
		for (var y = 0 ; y < map.length; y++)
		{
			ctx.fillStyle = "blue";
			if (map[y][x] == 1)
			{
				ctx.fillStyle = "red";
			}
			if (map[y][x] == 2)
			{
				ctx.fillStyle = "green";
			}
			ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
		}
	}
	return c;
}

function test(roomCount, tilewidth, tileHeight)
{
	var m = generator.generateMap(roomCount);
	return BuildMapFromAtlas(m, null, tilewidth, tileHeight);
}