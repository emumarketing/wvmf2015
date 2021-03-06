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
$("header").addClass("js").before('<div id="hamLines"><div class="uo-sig"><a href="http://uoregon.edu"><img src="images/uosignature.png"></a></div><i class="fa fa-navicon"></i></div>');
$("#hamLines .fa").click(function() {
    $("header").slideToggle();    
    
    /* hides dropdown nav after a menu item has been clicked */ 
    
    if($(window).width() < 900) { 
        $('#nav a').click(function() {
            $("header").hide();
            $("header").removeAttr("style");
        });
    }
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
        
        jQuery('.schedule-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        
        //change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        
        e.preventDefault();
    });
});


/* Enables tab features for schedule page */
jQuery(document).ready(function() {

    jQuery('#schedule-sidebar a').on('click', function(e) {
        //get value of tab link
        var currentAttrValue = jQuery(this).attr('href');
        
        jQuery('.schedule-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        
        //change/remove current tab to active
        jQuery(this).children('li').addClass('active');
        jQuery(this).siblings().children('li').removeClass('active');
        
        e.preventDefault();
    });
});


/* Enables tab features for schedule via dropdown menu */
jQuery(document).ready(function() {

    jQuery('#schedule-form').on('change', function() {
        //console.log("changed");
        //get value of tab link
        var currentAttrValue = $("#schedule-form").val();
        //console.log(currentAttrValue);
        
        jQuery('.schedule-container ' + currentAttrValue).slideDown(400).siblings().slideUp(400);

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



/* For FAQ accordion */
$(document).ready(function() {
    function close_accordion_section() {
        $('.faq-container .faq-title').removeClass('active');
        $('.faq-container .faq-content').slideUp(300).removeClass('open');
    }
 
    $('.faq-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.faq-container ' + currentAttrValue).slideDown(300).addClass('open');
        }
 
        e.preventDefault();
    });
});

/* Enables smooth scrolling with anchor tags */

function scrollNav() {
    $('#nav a').click(function() {
        
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 0 }, 400);
        
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();


/* For menu bar, makes 'active' when on the corresponding page */ 
var sections = $('section')
  , nav = $('#nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      $("#nav").find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    
    }

  });
    
});