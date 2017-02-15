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

window.addEventListener('keydown', function(event) {
    var LEFT = 37;
    var RIGHT = 39;
    var UP = 38;
    var DOWN = 40;
    if(event.keyCode == LEFT || RIGHT || UP || DOWN) {
      Player.move(event.keyCode);
    }}, false);



