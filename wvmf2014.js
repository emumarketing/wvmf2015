var circle = $(".circle");
var circleCenterX = circle.width()/2;
var circleCenterY = circle.height()/2;
var offset = circle.offset();

function mouse(e) {
	var center_x = (offset.left) + ( circleCenterX );
    var center_y = (offset.top) + ( circleCenterY );
    var mouse_x = e.pageX; 
    var mouse_y = e.pageY;

    var radians = Math.atan2(mouse_x - center_x, center_y - mouse_y);

    circle.css('-moz-transform', 'rotate('+radians+'rad)');
    circle.css('-webkit-transform', 'rotate('+radians+'rad)');
    circle.css('-o-transform', 'rotate('+radians+'rad)');
    circle.css('-ms-transform', 'rotate('+radians+'rad)');
}