var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  
  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};


function SetupPlayerController()
{
	window.addEventListener('keydown', function(event) {
    var LEFT = 37;
    var RIGHT = 39;
    var UP = 38;
    var DOWN = 40;
	var SPACE = 32;
    if(event.keyCode == LEFT || event.keyCode == RIGHT || event.keyCode == UP || event.keyCode == DOWN) {
      Player.move(event.keyCode);
    }
	if (event.keyCode == SPACE) {
		sword.move(event.keyCode);
	}
	}, false);
}

function SetupMenuController()
{
	window.addEventListener('keydown', function(event) {
    var LEFT = 37;
    var RIGHT = 39;
    var UP = 38;
    var DOWN = 40;
	var SPACE = 32;
    if(event.keyCode == LEFT || event.keyCode == RIGHT || event.keyCode == UP || event.keyCode == DOWN) {
      Menu.move(event.keyCode);
    }
	if (event.keyCode == SPACE) {
		Menu.move(event.keyCode);
	}
	}, false);
}





