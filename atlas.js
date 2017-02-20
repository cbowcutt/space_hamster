function Atlas(width, height) {
	this.TILEWIDTH = width;
	this.TILEHEIGHT = height;
	this.matrix = undefined;

	this.setMatrix = function(array) { this.matrix = array; }

	this.mapIndexToRectangle = function(x, y) {
		return {
			x: x * this.TILEWIDTH,
			y: y * this.TILEHEIGHT,
			width: this.TILEWIDTH,
			height: this.TILEHEIGHT
		};
	}

	
	this.mapIndexToCoordinates = function(x, y) {
		return {
			x: x * this.TILEWIDTH,
			y: y * this.TILEHEIGHT,
		};
	}
}
