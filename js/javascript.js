/* Rotates compass logo to follow the mouse */
var img = $('.logo');
if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.clientX; 
        var mouse_y = evt.clientY;
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

/* Enables tab features for artists pages */
jQuery(document).ready(function() {

    jQuery('#artist-sidebar a').on('click', function(e) {
        //get value of tab link
        var currentAttrValue = jQuery(this).attr('href');
        
        jQuery('.artist-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        
        //change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        
        e.preventDefault();
    });
});

/* Enables tab features for activities pages */
jQuery(document).ready(function() {

    jQuery('#activities-sidebar a').on('click', function(e) {
        //get value of tab link
        var currentAttrValue = jQuery(this).attr('href');
        
        jQuery('.activities-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        
        //change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        
        e.preventDefault();
    });
});


/* Enables tab features for artists via dropdown menu */
jQuery(document).ready(function() {

    jQuery('#artist-form').on('change', function() {
        //console.log("changed");
        //get value of tab link
        var currentAttrValue = $("#artist-form").val();
        //console.log(currentAttrValue);
        
        jQuery('.artist-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

    });
});

/* Enables tab features for activities via dropdown menu */
jQuery(document).ready(function() {

    jQuery('#activities-form').on('change', function() {
        //console.log("changed");
        //get value of tab link
        var currentAttrValue = $("#activities-form").val();
        //console.log(currentAttrValue);
        
        jQuery('.activities-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

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