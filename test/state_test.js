var fs = require('fs');
eval(fs.readFileSync('../state.js'));
eval(fs.readFileSync('../animatable.js'));
eval(fs.readFileSync('../character.js'));

describe("State", function() {
	var state = new State();
	it("has a virtual function onEnter()", function() {
		expect(state.onEnter).toEqual('function');
	}
	it("has a virtual function onExit()", function() {
		expect(state.onExit).toEqual('function');
	});

	it("has a virtual function for updating this instance's state", function() {
		expect(state.update).toEqual('function');
	});

	it("has a virtual function for rendering", function() {
		expect(state.render).toEqual('function');
	});

});

describe("LocalMapState", function() {
	var matrix = new matrix[
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],		
	];
	var atlas = new Atlas(5, 5);
	atlas.set(matrix);

	var player = new PlayableCharacter();
	var local_map_state = new LocalMapState(atlas, player);

	it("has a player", function() {
		expect(local_map_state.player).toEqual(player);
	});

	it("has an atlas", function() {
		expect(local_map_state.atlas).toEqual(atlas);
	});

	it("can identify characters by name", function() {
		var pikachu = new Character();
		expect(local_map_state.characters.size).toEqual(0);
		local_map_state.addCharacter("pikachu", pikachu);
		expect(local_map_state.getCharacter("pikachu")).toEqual(pikachu);
	});

	it("can identify interfaces by name", function() {
		var computer = new Interface();
		expect(local_map_state.interfaces.size).toEqual(0);
		local_map_state.addInterface("computer", computer);
		expect(local_map_interface.getInterface("computer")).toEqual(computer);
	});
});

describe("StateStack", function() {
	var stack = new StateStack();

	var matrix = new matrix[
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],		
	];
	var atlas = new Atlas(5, 5);
	atlas.set(matrix);

	var player = new PlayableCharacter();
	var local_map_state = new LocalMapState(atlas, player);
	var local_map_state_2 = neew LocalMapState(atlas, player);

	it("knows the number of states on the stack", function() {
		expect(stack.size).toEqual(0);
	})

	it("manages states in a 'Last-In-First-Out' fashion", function() {
		stack.push(local_map_state);
		expect(stack.size).toEqual(1);
		expect(stack.peek()).toEqual(local_map_state);

		stack.push(local_map_state_2);
		expect(stack.size).toEqual(2);

		stack.pop();
		expect(stack.size).toEqual(1);
	});
});