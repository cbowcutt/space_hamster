var Scene = function(_width, _height) {
	this.width = _width;
	this.height = _height;
	this.stage = new PIXI.Container();
	this.renderer = PIXI.autoDetectRenderer();
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

	this.remove = function(sprite) {
		this.stage.removeChild(sprite);
	}
}

