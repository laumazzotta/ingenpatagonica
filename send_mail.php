<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    error_log(print_r($_POST, true));
    error_log(print_r($_SERVER, true));
    
    // Recogemos los datos del formulario
    $nombre   = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email    = $_POST['email'];
    $empresa  = $_POST['empresa'];
    $mensaje  = $_POST['mensaje'];

    // Configuración del correo
    $destino = "contacto@ingenpatagonica.com.ar"; 
    $asunto = "Nuevo mensaje de contacto de $nombre";

    // Cuerpo del mensaje
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Empresa: $empresa\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Encabezados (para evitar que llegue a spam)
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($destino, $asunto, $contenido, $headers)) {
        echo "<script>alert('¡Mensaje enviado exitosamente!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Hubo un error al enviar el mensaje.'); window.location.href='index.html';</script>";
    }
}
?>
