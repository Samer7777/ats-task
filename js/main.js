//instgram pictures slider
$(document).ready(function () {
  $("#lightSlider").lightSlider({
    item: 6,
    auto: true,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 0,
    loop: true,
    easing: "cubic-bezier(0.25, 0, 0.25, 1)",
    speed: 900,
    pager: false,
    control: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });
});

//show and hide cart section
$(document).ready(function () {
  $("#hide").click(function () {
    $(".cart").addClass("hide").removeClass("show");
  });
  $("#show").click(function () {
    $(".cart").show().addClass("show").removeClass("hide");
  });
});

/// filter the product
$(document).ready(function () {
  $(".filter_button button").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".product-item").show("1000");
    } else {
      $(".product-item")
        .not("." + value)
        .hide("1000");
      $(".product-item")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".filter_button button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".pagination li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// add a custom lazy loading
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll("img.lazy");
  const lazyLoad = (image) => {
      image.src = image.dataset.src;
      image.classList.remove("lazy");
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              lazyLoad(entry.target);
              observer.unobserve(entry.target);
          }
      });
  });

  lazyImages.forEach(image => {
      observer.observe(image);
  });
});

/// single product image
var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
  MainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  MainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  MainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  MainImg.src = smallImg[3].src;
};



