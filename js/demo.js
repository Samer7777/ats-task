'use strict';

var demo = function () {
  // Smooth scrolling
  // ---------------------------------------------------------------------------------------
  function handleSmoothScroll() {
    $('.nav-item.smooth a, .footer_content .links a, .navbar-brand').click(function () {
      if ($(this).hasClass('control')) {
        // Control behavior if needed
      } else {
        var headerH = 60;
        $('.nav-item a').removeClass('active');
        $(this).addClass('active');

        // Smooth scrolling animation
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - headerH + 'px'
        }, {
          duration: 1200,
          easing: 'easeInOutExpo'
        });

        // Collapse the navbar if it's expanded
        var navbarCollapse = $('#navbarSupportedContent');
        if (navbarCollapse.hasClass('show')) {
          navbarCollapse.collapse('hide');
        }
        // Collapse the navbar if it's expanded
        var navbarCollapse = $('.dropdown-menu');
        if (navbarCollapse.hasClass('show')) {
          navbarCollapse.removeClass('show');
          $(".dropdown-toggle").attr('aria-expanded', 'false'); // Correctly set the aria-expanded attribute
          $(".dropdown-toggle").removeClass('show'); // Correctly set the aria-expanded attribute
        }


        return false;
      }
    });
  }

  // preloader
  // ---------------------------------------------------------------------------------------
  // Hide the content initially when the document is ready
  $(document).ready(function () {
    $('#content').hide(); // Hide content initially
  });

  $(window).on('load', function () {
    $('#status').fadeOut(); // Fade out the loader status
    $('#preloader').delay(200).fadeOut(100, function () {
      $('#content').fadeIn(); // Fade in the content after preloader is hidden
    });
  });


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
        });
      }
      // Refresh Waypoints on tab click / animation
      $('#tabs-lv1 li a[data-toggle="tab"]').on('shown.bs.tab', function () {
        $.waypoints('refresh');
      });
      $('#tabs-lv2 li a[data-toggle="tab"]').on('shown.bs.tab', function () {
        $.waypoints('refresh');
      });
    },
  };
}();
