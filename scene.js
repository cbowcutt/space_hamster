var Scene = function(_width, _height, canvasId) {
	this.width = _width;
	this.height = _height;
	this.stage = new PIXI.Container();
	this.renderer = PIXI.autoDetectRenderer((_width, _height), document.getElementById(canvasId));
	this.renderer.backgroundColor = 0xFFFFFF;
	this.renderer.view.style.border = "1px dashed black";

	this.sprites = {};

	document.body.appendChild(this.renderer.view);


	this.render = function() {
		this.renderer.render(this.stage);
	}

	this.add = function(sprite) {
		this.stage.addChild(sprite);
	}

	// this.update_camera = function() {
 //  		this.stage.position.x = Player.current_animation.x + (this.width / 2.0);
 //  		this.stage.position.y = Player.current_animation.y + (this.height / 2.0);
	// }

	this.remove = function(sprite) {
		this.stage.removeChild(sprite);
	}
}

