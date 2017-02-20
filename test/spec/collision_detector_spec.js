var fs = require('fs');
eval(fs.readFileSync('../collision_handler.js')+'');

describe('collision_handler.js', function() {
	
	var intersecting_objects = [
		{x: 0, y: 0, width: 32, height: 32 },
		{x: 10, y: 10, width: 32, height: 32 }
	];
	
	var non_intersecting_objects = [
		{x: 0, y: 0, width: 32, height: 32 },
		{x: 33, y: 33, width: 32, height: 32 }
	];
	var detector = new CollisionHandler();
	it("detects when two objects geometrically intersect", function() {
		expect(detector.intersects(intersecting_objects[0], intersecting_objects[1]))
			.toEqual(true);
	});

	it("detects when two objects do not geometrically intersect", function() {
		expect(detector.intersects(non_intersecting_objects[0], non_intersecting_objects[1])).toEqual(false);
	});		


});
