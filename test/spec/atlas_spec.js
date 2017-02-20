var fs = require('fs');
eval(fs.readFileSync('../atlas.js')+'');

describe("atlas", function() {
	var test_atlas = new Atlas(32, 32) ;
	var test_matrix = [
		[0, 0, 1],
		[1, 0, 0],
		[0, 1, 1]
	];
	test_atlas.setMatrix(test_matrix);
	it("stores the tile width and height in units of pixels", function() {
		expect(test_atlas.TILEWIDTH).toEqual(32);
		expect(test_atlas.TILEHEIGHT).toEqual(32);
	});

	it("should have a function that map a 2D array index to coordinates", function() {
		var actual = test_atlas.mapIndexToCoordinates(2, 5);
		expect(actual.x).toEqual(2 * 32);
		expect(actual.y).toEqual(5 * 32);
	});
});
