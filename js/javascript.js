/* Rotates compass logo to follow the mouse */
var img = $('.logo');
if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 90; 
        img.css('-moz-transform', 'rotate('+degree+'deg)');
        img.css('-webkit-transform', 'rotate('+degree+'deg)');
        img.css('-o-transform', 'rotate('+degree+'deg)');
        img.css('-ms-transform', 'rotate('+degree+'deg)');
    }
    $(document).mousemove(mouse);
}

/* Makes hamburger lines in place of menu bar when window is resized */
$("header").addClass("js");
$("header").addClass("js").before('<div id="hamLines"><i class="fa fa-navicon"></i></div>');
$("#hamLines").click(function() {
    $("header").slideToggle();
});

$(window).resize(function(){
	if(window.innerWidth > 600) {
		$("header").removeAttr("style");
	}
});

/* Enables tab features for artists & activities pages */
jQuery(document).ready(function() {

    jQuery('.sidebar a').on('click', function(e) {
        //get value of tab link
        var currentAttrValue = jQuery(this).attr('href');
        
        //show/hide tabs
        //jQuery('.artist-container ' + currentAttrValue).show().siblings().hide();
        
        jQuery('.artist-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        
        //change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        
        e.preventDefault();
        
    });
});

/* Enables smooth scrolling with anchor tags */
function scrollNav() {
    $('#nav a').click(function() {
        $("a.active").removeClass("active");      
        $(this).closest('a').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('a').addClass('active');

        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 0 }, 400);
        
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();