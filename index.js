jQuery(document).ready(function () {
    jQuery('.nav-menu').hide();
    

    
    if (window.matchMedia("(max-width:600px)").matches) {
        jQuery('.navigation').hide();
        jQuery('.scroll-menu-options').find('img').attr("src", "images/logo.png");
        jQuery('.menu-item').after('<div class="nav-menu"></div>');
        jQuery('.menu-item').hide();
        jQuery('.nav-menu').show();
        console.log('This is Mobile');
    }
    else {
      jQuery('.scroll-menu-options').hide();
        $(document).scroll(function() {
            var scroll_counter = $(this).scrollTop();
            if (scroll_counter > 90) {
              jQuery('.scroll-menu-options').fadeIn();
            } else {
              jQuery('.scroll-menu-options').fadeOut();
            }
          });
    }
    jQuery('.nav-menu').click(function () {
        jQuery('.nav-menu').toggleClass("active");
    
    });
    jQuery(document).on('click', '.nav-menu', function () {
        jQuery('.navigation').slideToggle();
    });

    jQuery('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 450,
      itemMargin: 5
    });

});