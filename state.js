function StateStack() {
	this.states = [];

	this.push = function(state) {
		this.states.push(state);
		state.onEnter();
	}

	this.peek = function() {
		if(this.size == 0) { return null; }
		return this.states[this.size() - 1];
	}
	this.pop = function() {
		var state = this.peek();
		state.onExit();
		this.states.pop();

	}

	this.render = function() {
		this.peek().render();
	}

	this.size = function() {
		return this.states.length;
	}

	this.clear = function() {
		this.states = [];
	}
}

function State() {
	this.onEnter = function() {};
	this.onExit = function() {};
	this.update = function() {};
	this.render = function() {};
}

function LocalMapState(_atlas, _player) {
	State.call(this);
	this.atlas = _atlas;
	this.characters = {};
	this.interfaces = {};
	this.player = _player;
	this.active_interface = null;

	this.addCharacter= function(name, character){ this.characters[name] = character; }
	this.addInterface = function(name, _interface) { this.interfaces[name] = _interface; }

	this.getCharacter = function(name) { return this.characters[name]; }
	this.getInterface = function(name) { return this.interfaces[name]; }

	this.removeCharacter = function(name) { this.characters[name] = null; }
	this.removeInterface = function(name) { this.interfaces[name] = null; }

	this.render = function(stage) {
		this.atlas.animate(stage);
		this.player.animate(stage);
		for(var character in this.characters) { character.animate(stage); }
		if(active_interface != null ) {
			this.active_interface.animate(stage);
		}
	}

	this.update = function() {
	}

	this.checkInterfaces = function() {
		var collision_handler = new CollisionHandler();
		for(var interface in this.interfaces) {
			if(collision_handler.intersects(interface.rectangle, player.rectangle)) {
				if(player.isFacing() == interface.activation_face) {
					this.active_interface = interface;
					return;
				}		
			}

		}
	}
}

function WorldMapState(_atlas, _player) {
	State.call(this);
}

function MenuState() {
	State.call(this);
}

function BattleState() {
	State.call(this);
}
