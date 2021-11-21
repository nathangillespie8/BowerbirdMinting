// console.log('Custom.js loaded');
// const el = document.querySelector("header")
// const observer = new IntersectionObserver( 
// 	([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
// 	{ threshold: [1] }
// );

// observer.observe(el);


const breakpoint = window.matchMedia( '(min-width:1000px)' );

let swiperAbout;
const breakpointChecker = function() {
   if ( breakpoint.matches === true ) {
        $('.about-swiper').addClass('destroyed');
      if ( swiperAbout !== undefined ) swiperAbout.destroy( true, true );
      return;
   } else if ( breakpoint.matches === false ) {
    console.log('enable');
      return enableAboutSwiper();
   }
};



const enableAboutSwiper = function() {
    const swiperAbout = new Swiper('.about-swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoHeight: true
    });
};

breakpointChecker();


const swiperValue = new Swiper('.value-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoHeight: true
});

$('.value-swiper .swiperReadMore').click(function(){
    swiperValue.slideNext();
});

// const swiperToFish = new Swiper('.tofish-swiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   }
// });

// $('.tofish-swiper .swiperReadMore').click(function(){
//     swiperToFish.slideNext();
// });

const swiperStory = new Swiper('.story-swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoHeight: true
});

$('.story-swiper .swiperReadMore').click(function(){
    swiperStory.slideNext();
});


$('header nav a').click(function(e){
    e.preventDefault;
    var destination = $(this).attr('href');
    destination = destination.replace('#', '');
    var elem = '.' + destination;
    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 500);
}); 

$('.tm-bio-link').click(function(){
    $(this).parent().next('.tm-bio-hidden').slideToggle(150);
});

$('.tm-bh-close').click(function(){
    $(this).parent().slideUp(150);
});

$(document).mouseup(function(e) {
    var container = $(".tm-bio-hidden");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.slideUp(150);
    }
});

$('.faq-qa').click(function(){
    $(this).toggleClass('active').find('p').slideToggle(150);
});

function isElementInViewport(elem) {

    var $elem = $(elem);

    // Get the position of the element on the page.
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elemBottom > viewportTop && elemTop < viewportBottom;
}

function scrolledPastTopSection() {
    var topofDiv = $('.intro-wrap').offset().top; //gets offset of header
    var height = $('.intro-wrap').outerHeight(); //gets height of header
    $(window).scrollTop() > (topofDiv + height) ? $('header').addClass('fixed') : $('header').removeClass('fixed')
}

function checkAnimation() {
    var $elem = $('.v-spbirds-wrap');

    // If the animation has already been started
    if ($elem.hasClass('in-view')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('in-view');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
    scrolledPastTopSection();
});



// $("#infographic article").click(function () {
//    $(this).toggleClass("active");
// });
// $("#infographic article .controls .btn").on("click", function (e) {
//    e.preventDefault();
//    e.stopPropagation();
//    var currentEl = $(this).closest("article");
//    var currentI = currentEl.data("step");
//    currentEl.removeClass("active");
//    var nextI = $(this).is(":first-child") ? currentI - 1 : currentI + 1;
//    var nextEl = $("article[data-step='" + nextI + "']");
//    nextEl.click();
//    var y = document
//       .querySelector("article[data-step='" + nextI + "'")
//       .getBoundingClientRect().top;
//    var supportsNativeSmoothScroll =
//       "scrollBehavior" in document.documentElement.style;

//    if (supportsNativeSmoothScroll) {
//       window.scrollTo({
//          top: y + window.pageYOffset - 300,
//          behavior: "smooth"
//       });
//    } else {
//       window.scrollTo(0, y + window.pageYOffset - 300);
//    }
// });
// $(document).mouseup(function (e) {
//    var tgt = $("#infographic article.active");
//    if (!tgt.is(e.target) && tgt.has(e.target).length === 0)
//       tgt.removeClass("active");
// });
