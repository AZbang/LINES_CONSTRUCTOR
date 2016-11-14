var type = 'cross';
var paper = Snap(window.innerWidth, window.innerHeight);
var gui = new GUI(paper, 'constructor/icons.svg', [
  {
    icon: 'cross',
    action: function() {
      type = 'cross';
    }
  }, {
    icon: 'uncross',
    action: function() {
      type = 'uncross';
    }
  }, {
    icon: 'hint',
    action: function() {
      type = 'hint';
    }
  }, {
    icon: 'touch',
    action: function() {
      type = 'touch';
    }
  }, {
    icon: 'untouch',
    action: function() {
      type = 'untouch';
    }
  }
]);

var addBody = function(e) {
  paper.circle(e.clientX, e.clientY, 25).attr({fill: 'white'});
}
document.oncontextmenu = function () {
  return false 
};
window.addEventListener('resize', function() {
  paper.attr({
    width: window.innerWidth,
    height: window.innerHeight
  });
});
paper.node.addEventListener('mousedown', function(e) {
  if(e.which === 1) addBody(e);
  if(e.which === 2) gui.nav.show(e);
});
paper.node.addEventListener('mouseup', function(e) {
  if(e.which === 2) gui.nav.hide(e);
});