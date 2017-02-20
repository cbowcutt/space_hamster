function Interface(_rectangle) {
	this.rectangle = _rectangle;
	this.current_node = undefined;

	Animatable.call(this);
	

	this.setCurrentNode = function(node) {
		this.current_node = node;
	};

	this.selectCurrentOption = function(id) {
		this.current_node = this.current_node.select_option[id];
		this.highlighted_option = this.current_node.highlighted;
	};

	this.setHighlightedOption = function(input) {
		this.current_node.highlight_option
	};

	this.getRectangle = function() {
		return this.rectangle;
	};

	this.animate = function(scene) {
		var graphics = new PIXI.Graphics();
		// draw a rounded rectangle
// graphics.beginFill(0xFF3300);
// graphics.lineStyle(4, 0xffd900, 1);


// // draw a rounded rectangle
		graphics.lineStyle(2, 0xFF00FF, 1);
		graphics.beginFill(0xFF00BB, 0.25);
		graphics.drawRoundedRect(this.rectangle.x, this.rectangle.y, this.rectangle.width, this.rectangle.height, 15);
		graphics.endFill();
		scene.add(graphics);
		scene.render();
	};



}

function InterfaceNode(_text, _options, _children) {
	this.text = _text;
	this.options = _options;
	this.children = _children;
	this.highlighted = undefined;

	this.highlight_option = function(id) {
		this.highlighted = id;
	}

	this.select_option = function(id) {
		return this.children[id];
	}
};
