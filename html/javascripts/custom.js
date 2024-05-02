jQuery('.tabs-btn').owlCarousel({
    margin:0,
    items:1,
    responsiveClass:true,
    dots: false,
    nav:false,
    autoHeight:false,
    autoplay: false,
    loop: false,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            autoWidth: true,
        },
        576:{
            autoWidth: true,
        },
        768:{
            autoWidth: true,
        },
        992:{
            autoWidth: true,
        },
        1200:{
            items:4
        }
    }
})


jQuery(document).delegate('header a.anchor', 'click', function(event) {
    event.preventDefault();
    var href = jQuery(this).attr('href');
    var header = jQuery('header').height();

    var divPosition = jQuery(href).offset();
    var scrollPosition = divPosition.top;

    jQuery('header nav').removeClass('active');

    jQuery('html, body').animate({scrollTop: scrollPosition}, 400);

});


jQuery(document).delegate('a.modal', 'click', function(event) {
    event.preventDefault();
    jQuery('.modal-contato').addClass('active');
});

jQuery(document).delegate('.close-modal', 'click', function(event) {
    event.preventDefault();
    jQuery('.modal-contato').removeClass('active');
});
jQuery(document).delegate('footer button.to-top', 'click', function(event) {
    event.preventDefault();

    jQuery('html, body').animate({scrollTop: 0}, 400);
});

jQuery(function(){
    var hasBeenTrigged = false;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() >= 100 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
             jQuery('footer button.to-top').addClass('active');
            hasBeenTrigged = true;
        } else if(jQuery(this).scrollTop() < 100 && hasBeenTrigged){
            jQuery('footer button.to-top').removeClass('active');
            hasBeenTrigged = false;

        }
    });
});


jQuery(document).ready(function() {
  
        function tab(n){
            if(n == 5){
                jQuery('.wrap-tabs .tabs-btn a').removeClass('active');
                jQuery('.wrap-tabs .tabs-btn a.tab1').addClass('active');
                
                jQuery('.wrap-tabs .tabs-contents .single-tab').removeClass('active');
                jQuery('.wrap-tabs .tabs-contents .single-tab#tab1').addClass('active');

                jQuery('.tabs-btn').trigger('to.owl.carousel', [0, 500, true]);

                m = 1 + 1;
                //console.log(m);

            } else{

                jQuery('.wrap-tabs .tabs-btn a').removeClass('active');
                jQuery('.wrap-tabs .tabs-btn a.tab' + n).addClass('active');
                
                jQuery('.wrap-tabs .tabs-contents .single-tab').removeClass('active');
                jQuery('.wrap-tabs .tabs-contents .single-tab#tab' + n).addClass('active');

                jQuery('.tabs-btn').trigger('to.owl.carousel', [n-1, 500, true]);

                m = n + 1;
                //console.log(m);
            }

            timeouttab = setTimeout(tab, 10000, m)
        }
        var timeouttab = setTimeout(tab, 10000, 2);
        jQuery(document).delegate('.wrap-tabs .tabs-btn a', 'click', function(event) {
            clearTimeout(timeouttab);
        });


    jQuery('.select2').select2();

        
});



jQuery(document).delegate('.wrap-tabs .tabs-btn a', 'click', function(event) {
    event.preventDefault();
    hash = jQuery(this).attr('href');

    
    jQuery('.wrap-tabs .tabs-btn a').removeClass('active');
    jQuery(this).addClass('active');
    
    jQuery('.wrap-tabs .tabs-contents .single-tab').removeClass('active');
    jQuery('.wrap-tabs .tabs-contents .single-tab' + hash).addClass('active');
    

  var indexb = jQuery('.wrap-tabs .tabs-btn a').index(this);

  jQuery('.tabs-btn').trigger('to.owl.carousel', [indexb, 500, true]);

});


jQuery('.owl-logos').owlCarousel({
    margin:0,
    items:1,
    responsiveClass:true,
    dots: false,
    nav:true,
    autoHeight:false,
    autoplay: true,
    loop: true,
    navText:[ '',''],
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items:3,
            margin: 10
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
})



jQuery(document).delegate('.accordion .single-accord .head-accord', 'click', function(event) {
    event.preventDefault();

    jQuery(this).parent('.single-accord').siblings().removeClass('active');


    jQuery(this).parent('.single-accord').toggleClass('active');
    
});


jQuery(document).delegate('header .menu-toggle', 'click', function(event) {
    event.preventDefault();

    jQuery('header nav').toggleClass('active');
    
});

jQuery(document).ready(function() {
   if( jQuery(window).width() > 991){
        $(function () { // wait for document ready
            // init
            var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                    triggerHook: 'onLeave',
                    duration: "100%" // this works just fine with duration 0 as well
                    // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
                    // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
                }
            });

            // get all slides
            var slides = document.querySelectorAll("section.mgc");

            // create scene for every slide
            for (var i=0; i<slides.length; i++) {
                new ScrollMagic.Scene({
                        triggerElement: slides[i]
                    })
                    .setPin(slides[i], {pushFollowers: false})
                    //.addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
            }
        });
    }
});





var left1 = {
    delay: 100,
    distance: '100px',
    duration: 1000,
    origin: 'left',
    easing: 'ease-in-out',
};
var left2 = {
    delay: 400,
    distance: '100px',
    duration: 1000,
    origin: 'left',
    easing: 'ease-in-out',
};



var right1 = {
    delay: 100,
    distance: '100px',
    duration: 1000,
    origin: 'right',
    easing: 'ease-in-out',
};
var right2 = {
    delay: 400,
    distance: '100px',
    duration: 1000,
    origin: 'right',
    easing: 'ease-in-out',
};




var up1 = {
    delay: 100,
    distance: '100px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease-in-out',
};
var up2 = {
    delay: 400,
    distance: '100px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease-in-out',
};

var up3 = {
    delay: 700,
    distance: '100px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease-in-out',
};

var up4 = {
    delay: 1000,
    distance: '100px',
    duration: 1000,
    origin: 'bottom',
    easing: 'ease-in-out',
};




var down1 = {
    delay: 100,
    distance: '100px',
    duration: 1000,
    origin: 'top',
    easing: 'ease-in-out',
};
var down2 = {
    delay: 400,
    distance: '100px',
    duration: 1000,
    origin: 'top',
    easing: 'ease-in-out',
};





jQuery(document).ready(function(){



    ScrollReveal().reveal('.up1', up1);
    ScrollReveal().reveal('.up2', up2);
    ScrollReveal().reveal('.up3', up3);
    ScrollReveal().reveal('.up4', up4);

    ScrollReveal().reveal('.left1', left1);
    ScrollReveal().reveal('.left2', left2);

    ScrollReveal().reveal('.right1', right1);
    ScrollReveal().reveal('.right2', right2);

    ScrollReveal().reveal('.down1', down1);
    ScrollReveal().reveal('.down2', down2);

});