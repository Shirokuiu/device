var pageHeaderTabButton = document.querySelector('.page-header__tab');
var dropdownTab = document.querySelector('.page-header__dropdownTab');

pageHeaderTabButton.addEventListener('click', function () {
  dropdownTab.classList.toggle('page-header__dropdownTab--vissible');
});

$(document).ready(function(){
  $("#slider-header__theme").owlCarousel({
    loop:true,
    margin:0,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $("#services__slider-theme").owlCarousel({
    loop:true,
    margin:0,
    autoplay: false,
    mouseDrag: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});
