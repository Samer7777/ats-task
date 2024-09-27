'use strict';
var demo = function () {    // Smooth scrolling
    // ---------------------------------------------------------------------------------------
    function handleSmoothScroll() {
        $('.nav-item a, .footer_content .links a, .navbar-brand').click(function () {

            if ($(this).hasClass('control')) { }
            else {

                //var headerH = $('header').outerHeight();
                var headerH = 60;
                $('.nav-item a').removeClass('active');
                $(this).addClass('active');
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - headerH + 'px'
                }, {
                    duration: 1200,
                    easing: 'easeInOutExpo'
                });
                return false;

            }
        });
    }

    // INIT FUNCTIONS
    // ---------------------------------------------------------------------------------------
    return {
        init: function () {
            handleSmoothScroll();
        },
        // Animation on Scroll
        initAnimation: function () {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function (down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset: $.waypoints('viewportHeight')
                    //offset: 'bottom-in-view'
                    //offset: '95%'
                });
            }
            // Refresh Waypoints on tab click / animation
            // $('#tabs-lv1 li a[data-toggle="tab"]').on('shown.bs.tab', function () { $.waypoints('refresh'); });
            // $('#tabs-lv2 li a[data-toggle="tab"]').on('shown.bs.tab', function () { $.waypoints('refresh'); });
        },

    };

}();
