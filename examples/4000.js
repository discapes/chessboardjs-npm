var cfg = {
  draggable: true,
  position: 'start',
  onChange: function(oldPosObj, newPosObj, oldPosFEN, newPosFEN) {
    console.log("Position changed!");
    console.log("Old position: " + oldPosFEN);
    console.log("New position: " + newPosFEN);
  }
};
var board = new ChessBoard('board', cfg);

$('#startPositionBtn').on('click', board.start);