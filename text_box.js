function TextBox(x, y, width, height, text, photo, phototext) {
	Animatable.call(this);

	this.animate = function(scene) {
		var graphics = new PIXI.Graphics()
		graphics.beginFill(0x0FFFF00);
		graphics.lineStyle(5, 0xFF0000);
		graphics.drawRect(x, y, width, height);

		var text_graphic = new PIXI.Text(text);
		text_graphic.x = x;
		text_graphic.y = y;
		text_graphic.width = width;
		text_graphic.height = height;
		scene_graphic.add(graphics);
		scene.add(text_graphic);
	}

	this.update() {
		if(this.text_tree);
	}
}

function OptionsBox(x, y, width, height, text, options) {
	TextBox.call(this);
}