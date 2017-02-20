var fs = require('fs');
eval(fs.readFileSync('../state.js')+'');
eval(fs.readFileSync('../animatable.js')+'');
eval(fs.readFileSync('../interface.js')+'');
eval(fs.readFileSync('../character.js')+'');
eval(fs.readFileSync('../atlas.js')+'');

describe("State", function() {
	var state = new State();
	it("has a virtual function onEnter()", function() {
		expect(state.onEnter == Function);
	});
	it("has a virtual function onExit()", function() {
		expect(state.onExit == Function);
	});

	it("has a virtual function for updating this instance's state", function() {
		expect(state.update == Function);
	});

	it("has a virtual function for rendering", function() {
		expect(state.render == Function);
	});

});

describe("LocalMapState", function() {

	var matrix = [	
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]];
	var atlas = new Atlas(5, 5);
	atlas.setMatrix(matrix);

	var player = new PlayableCharacter();
	var local_map_state = new LocalMapState(atlas, player);
	beforeEach(function() {
		atlas.states = [];

	});


	it("has a player", function() {
		expect(local_map_state.player).toEqual(player);
	});

	it("has an atlas", function() {
		expect(local_map_state.atlas).toEqual(atlas);
	});

	it("can identify characters by name", function() {
		var pikachu = new Character();
		expect(Object.keys(local_map_state.characters).length).toEqual(0);
		local_map_state.addCharacter("pikachu", pikachu);
		expect(local_map_state.getCharacter("pikachu")).toEqual(pikachu);
	});

	it("can identify interfaces by name", function() {
		var computer = new Interface();
		expect(Object.keys(local_map_state.interfaces).length).toEqual(0);
		local_map_state.addInterface("computer", computer);
		expect(local_map_state.getInterface("computer")).toEqual(computer);
	});
});

describe("StateStack", function() {
	var stack = new StateStack();
	var local_map_state = new LocalMapState(atlas, player);
	var local_map_state_2 = new LocalMapState(atlas, player);
	var matrix = [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0]		
	];
	var atlas = new Atlas(5, 5);
	atlas.setMatrix(matrix);
	var player = new PlayableCharacter();

	beforeEach(function() {
		stack.states = [];		
		stack.push(local_map_state);
		stack.push(local_map_state_2);
	});

	it("knows the number of states on the stack", function() {
		expect(stack.size()).toEqual(2);
	})

	it("manages states in a 'Last-In-First-Out' fashion", function() {
		stack.pop();
		expect(stack.size()).toEqual(1);
		expect(stack.peek()).toEqual(local_map_state);
		stack.pop();
		expect(stack.size()).toEqual(0);
	});

	it("can have its stack emptied", function() {
		stack.clear();
		expect(stack.size()).toEqual(0);
	});

});
