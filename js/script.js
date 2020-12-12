$('.main .slider-nav1').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  dots: false,
  focusOnSelect: true,
});
$('.main .slider-nav2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  dots: false,
  focusOnSelect: true,
});
$('.main .slider-nav3').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  dots: false,
  focusOnSelect: true,
});
$('.main .slider-nav4').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  dots: false,
  focusOnSelect: true,
});

$('.sliderall').slick({
  dots: false,
  autoplay:true,
  fade: true,
  autoplaySpeed:5000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

AOS.init();

$(function(){
  $(window).on("scroll",function(){
      if($(window).scrollTop()>50){
        $('.counter').each(function(){
          var $this=$(this),
          countTo=$this.attr('data-count');
          $({countNum: $this.text()}).animate({
              countNum: countTo
          },
        
          {
              duration:2000,
              easing: 'linear',
              step: function() {
                  $this.text(Math.floor(this.countNum));          
              },
              complete: function() {
                  $this.text(this.countNum);          
              },
          });
        });
      }
  })
})

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['section1', 'section2','section3','section4',],
    showActiveTooltip: true,
    slidesNavigation: true,
      slidesNavPosition: 'bottom',
    controlArrows:false,
  });
});



const $body = window.opera
    ? document.compatMode == "CSS1Compat"
      ? $("html")
      : $("body")
    : $("html,body"),
  $section = $(".section");

var numOfPages = $section.length - 1,
  curPage = 0,
  scrollLock = false;

function scrollPage() {
  $(".section").on("mousewheel DOMMouseScroll", function (e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
      navigateUp();
    else navigateDown();
  });

  $(document).on("keydown", function (e) {
    if (scrollLock) return;
    if (e.which === 38) navigateUp();
    else if (e.which === 40) navigateDown();
  });
}

function pagination() {
  scrollLock = true;
  $body.stop().animate(
    {
      scrollTop: $section.eq(curPage).offset().top
    },
    1000,
    "swing",
    function () {
      scrollLock = false;
    }
  );
}

function navigateUp() {
  if (curPage === 0) return;
  curPage--;
  pagination();
}

function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
}

$(function () {
  scrollPage();
});




























$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
   });
});




function Myfunction(Language) {
  var programming = document.getElementsByClassName("opentext");
  for (i = 0; i < programming.length; i++) {
    programming[i].style.display = "none";
  }
  document.getElementById(Language).style.display = "block";
}


$(document).ready(function(){
  let contents = $(".button1");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button3').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button4').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})


$(document).ready(function(){
  let contents = $(".button2");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button3').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button4').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})


$(document).ready(function(){
  let contents = $(".button3");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button2').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button4').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})



$(document).ready(function(){
  let contents = $(".button4");
    $(contents).click(function(){
      $(contents).css({
        'color':'black',
        'background-color':'white',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button3').css({
        'color':'white',
        'background-color':'#fca700',
      });
      $('.button1').css({
        'color':'white',
        'background-color':'#fca700',
      });
    })
})




$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})



