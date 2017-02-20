var fs = require('fs');
eval(fs.readFileSync('../lib/jquery-3.1.1.min.js')+'');
eval(fs.readFileSync('../animatable.js')+'');
eval(fs.readFileSync('../character.js')+'');
eval(fs.readFileSync('../interface.js')+'');
eval(fs.readFileSync('../controller.js')+'');

eval(fs.readFileSync('mock/mock_window.js')+'');
eval(fs.readFileSync('mock/mock_document.js')+'');



describe("Controller", function() {

	window = new MockWindow();
	$ = new MockDocument();
	var player = new PlayableCharacter();
	var controller = new Controller(player);

	it("listens for keyboard inputs", function() {
		expect(controller.key.constructor).toEqual(Object);
	});
	it("is associated with an instance", function() {
		expect(controller.subject == player).toEqual(true);
	});
	it("notifies its associated instance when a keyboard input is received", function() {
	});
 
});

describe("PlayerController", function() {
	window = new MockWindow();
	$ = new MockDocument();
	var player = new PlayableCharacter();
	var controller = new PlayerController(player);
	
	it("listens for keyboard inputs", function() {
		expect(controller.key.constructor).toEqual(Object);
	});
	
	it("is associated with an instance", function() {
		expect(controller.subject == player).toEqual(true);
	});
	it("notifies its associated instance when a keyboard input is received", function() {
	});
 
});

describe("InterfaceController", function() {
	var window = new MockWindow();
	$ = new MockDocument();
	var _interface = new Interface();
	var controller = new InterfaceController(_interface);
	
	it("listens for keyboard inputs", function() {
		expect(controller.key.constructor).toEqual(Object);
	});
	
	it("is associated with an instance", function() {
		expect(controller.subject == _interface).toEqual(true);
	});
	it("notifies its associated instance when a keyboard input is received", function() {
	});
 
});
