function getRandomPovarInCircle(radius)
{
	var t = 2 * Math.random();
	var u = math.random() + math.random();
	var u = null;
	if (u > 1) {
		r = 2 - u;
	}
	else {
		r = u;
	}
	return [Math.round(radius * r * Math.cos(t)), Math.round(radius * r.math.sin(t)) ];
}

function Cell(x, y)
{
	this.X = x;
	this.Y = y;
	return this;
}

function Wall(cellA, cellB)
{
	this.CellA = cellA;
	this.CellB = cellB;
	return this;
}

function proceduralMap(width, length)
{
	// Start with a grid full of walls.
	// 0 = path, 1 = wall
	var maze = [];
	for (var y = 0; y < length; y ++)
	{
		maze.push([]);
		for (var x = 0; x < width; x++)
		{
			maze[y].push([0, false]);
		}			
	}
	var walls = [];
	// pick a cell
	var currentCell = new Cell(0, 0);
	//Pick a cell, mark it as part of the maze. A
	maze[currentCell.X][currentCell.Y][1] = true;
	// Add the walls of the cell to the wall list.
	var adjacent = adjacentWalls(currentCell, width, length);
	for (i = 0; i <adjacent.length; i++)
	{
		walls.push(adjacent[i]);
	}
	// while there are walls in the list
	while (walls.length > 0)
	{
		var randomIndex = Math.floor((Math.random() * (walls.length -1)));
		var randomWall = walls[randomIndex];
		//If only one of the two cells that the wall divides is visited, then:
		
		var cellA = randomWall.CellA;
		var cellB = randomWall.CellB;
		var visitedA = maze[cellA.X][cellA.Y][1];
		var visitedB = maze[cellB.X][cellB.Y][1];
		if ((visitedA != visitedB) && (visitedA || visitedB))
		{
			currentCell = visitedA ? cellB : cellA;
			maze[currentCell.X][currentCell.Y] = [1, true];
			adjacent = adjacentWalls(currentCell, width, length);
			for (i = 0; i <adjacent.length; i++)
			{
				walls.push(adjacent[i]);
			}
		}
		walls = walls.filter(w => w != randomWall);
	}
	return maze;
}

function hasNorthWall(cell)
{
	return (cell & 0x1) == 1;
}

function hasEastWall(cell)
{
	return (cell & 0x2) == 1;
}
function hasSouthWall(cell)
{
	return (cell & 0x4) == 1;
}
function hasWestWall(cell)
{
	return (cell & 0x8) == 1;
}

function varermediateWall(cellA, cellB)
{
	return [(cellB[0] - cellA[0]) / 2, (cellB[1] - cellA[1]) / 2];
}

function Room(x, y, width, length)
{
	this.X = x;
	this.Y = y;
	this.Width = width;
	this.Length = length;
	return this;
}

function generateMap(numRooms)
{
	var map = [[]]
	var k = 7;
	var rooms = [];

	for(var i = 0; i < numRooms; i++)
	{
		var width = Math.floor(Math.random() * k);
		width += 5;
		var length = Math.floor(Math.random() * k);
		length += 5;
		var x; var y;
		if (i == 0) {
			x = 0; y = 0;
		}
		else {
			var previousRoom = rooms[i - 1];
			var rando = Math.floor(Math.random() * 3);
			x = previousRoom.X;
			y = previousRoom.Y;
			if (rando == 0)
			{
				y += previousRoom.Length;
			}
			if (rando == 1)
			{
				x += previousRoom.Width;
			}
			if (rando >= 2)
			{
				x += previousRoom.Width;
				y += previousRoom.Length;
			}
		}
		rooms.push(new Room(x, y, width, length));

		for (var _y = y; _y < y + length; _y++)
		{
			if (_y >= map.length) map.push([]);
			for(var _x = x; _x < x + width; _x++)
			{
				map[_y][_x] = 1;
			}
		}
	}
	for (var i = 0; i < rooms.length; i++)
	{
		for (var j = 0; j < rooms[i].length; j++);
		{
			if (rooms[i][j] == undefined) rooms[i][j] = 0;
		}
	}
	return map;
}

function adjacentWalls(cell, width, length)
{
	var neighbors = []
	var northCell = new Cell(cell.X, cell.Y - 1);
	var southCell = new Cell(cell.X, cell.Y + 1);
	var eastCell = new Cell(cell.X + 1, cell.Y);
	var westCell = new Cell(cell.X - 1, cell.Y);
	// north
	if (northCell.Y >= 0) neighbors.push(new Wall(cell, northCell));
	if (southCell.Y < length) neighbors.push(new Wall(cell, southCell));
	if (eastCell.X < width) neighbors.push(new Wall(cell, eastCell));
	if (westCell.X >= 0) neighbors.push(new Wall(cell, westCell));
	return neighbors;
}