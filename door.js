function Door(_x, _y, transition_callback) {
  this.x = _x;
  this.y = _y;
  this.width = TILEWIDTH;
  this.height = TILEHEIGHT;
  // this.new_map
  this.rectangle = {x: _x * TILEWIDTH, y: _y * TILEHEIGHT, width: TILEWIDTH, height: TILEHEIGHT};
  // returns boolean 
  this.intersects_player = function()
  {
    if(intersects(player_sprite, this.rectangle))
    {
      return true;
    }
    return false;
  }

  this.setupNewState = function() { transition_callback(); }
}