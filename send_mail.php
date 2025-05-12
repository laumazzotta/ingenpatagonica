<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
    http_response_code(200); // Respuesta correcta
} else {
    http_response_code(500); // Error en el servidor
}
}
?>
