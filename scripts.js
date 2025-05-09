jQuery(function($) {

    $(window).scroll(function(a, b, c) {
        const offset = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
        $('body').css('--scroll', offset);

        
    });

});

$('#openNav').on('click', function() {
    $('#myNav').css("height", "100%");
});

$('#closeNav').on('click', function() {
    $('#myNav').css("height", "0%");
});

$('.nav-link').on('click', function() {
    $('#myNav').css("height", "0%");
});

var $plusButton = $('.plus-button'); 

      $plusButton.click(function(){
        $(this).removeClass('d-block');
        $(this).addClass('d-none');
    });