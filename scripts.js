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


    const form = document.getElementById('contactForm');
    const loader = document.getElementById('loader');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Evita el refresh de la página
      loader.style.display = 'block';
  
      // Capturar datos del formulario
      const formData = new FormData(form);
  
      // Enviar datos al PHP
      fetch('send_mail.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        loader.style.display = 'none';
        alert("¡Mensaje enviado exitosamente!");
        form.reset(); // Limpia el formulario
      })
      .catch(error => {
        loader.style.display = 'none';
        alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
        console.error("Error:", error);
      });
    });
  