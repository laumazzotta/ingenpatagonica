jQuery(function($) {

    $(window).scroll(function(a, b, c) {
        const offset = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        $('body').css('--scroll', offset);

        
    });

});

// let navButton = document.getElementById('nav-icon3');
// let navMobile = document.getElementById('myNav');
// let brand = document.getElementById('brand');
// let navLinks = document.getElementById('navLinks');

// navButton.onclick = function() {
//     this.classList.toggle('open');
//     navMobile.classList.toggle('h-100');
//     brand.classList.toggle('width-100px');

// }

$('#openNav').on('click', function() {
    $('#myNav').css("height", "100%");
});

$('#closeNav').on('click', function() {
    $('#myNav').css("height", "0%");
});

$('.nav-link').on('click', function() {
    $('#myNav').css("height", "0%");
});


gsap.registerPlugin(ScrollTrigger) 

gsap.to('.imagen-mision-vision', {
    scrollTrigger: {
        trigger: '.imagen-mision-vision',
        // start:  "top ",
        scrub: true
    },
    x: "0",
    duration: 1,
    // ease: "power3.in"
});

var $plusButton = $('.plus-button'); 

      $plusButton.click(function(){
        $(this).removeClass('d-block');
        $(this).addClass('d-none');
    });