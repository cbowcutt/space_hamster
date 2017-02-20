function InterfaceBuilder() {
	this.window_margin = 10;
	this.canvas_height = 600;
	this.canvas_width = 800;
	this.tile_width = 32;

	this.bottomInterfaceWindow = function() {

		var rectangle = new Rectangle(
								0 + this.window_margin,
								(this.canvas_height / 2) + this.tile_width,
								this.canvas_width - (this.window_margin * 2),
								(canvas_height / 2) - this.ile_width - window_margin,
								15);
		var interface = new Interface(rectangle);
	}
}