function Controller(_subject) {
  this.subject = _subject;
  this.key = {
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
}
}

function PlayerController(_subject) {
	Controller.call(this, _subject);
    window.addEventListener('keydown', function(event) {
        var LEFT = this.key.LEFT;
        var RIGHT = this.key.RIGHT;
        var UP = this.key.UP;
        var DOWN = this.key.DOWN;
        if(event.keyCode == LEFT || RIGHT || UP || DOWN) {
          this.subject.move(event.keyCode);
        }}, false);
};

function InterfaceController(_subject) {
	Controller.call(this, _subject);
    var LEFT = this.key.LEFT;
    var RIGHT = this.key.RIGHT;
    var UP = this.key.UP;
    var DOWN = this.key.DOWN;
 
    $.keydown(function(e){
      if(e.keyCode == UP) {
        interface.switchHighlightedOption("up");
      }
      else if(e.keyCode == Down) {
        interface.switchHighlightedOption("down");
      }
    });
}





