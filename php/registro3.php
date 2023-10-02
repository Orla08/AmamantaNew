<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "amamanta";

file_put_contents('debug.txt', print_r($data, true));

// Permitir solicitudes desde cualquier origen
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

// Obtener los datos enviados por la solicitud
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Datos a insertar en la tabla "usuarios"
$nombre = $conn->real_escape_string($data["nombre"]);
$email = $conn->real_escape_string($data["email"]);
$contrasena = $conn->real_escape_string($data["contrasena"]);
$edad = $conn->real_escape_string($data["edad"]);

// Verificar si el email ya existe en la base de datos
$sqlCheckEmail = "SELECT * FROM usuarios WHERE email = '$email'";
$resultCheckEmail = $conn->query($sqlCheckEmail);

if ($resultCheckEmail->num_rows > 0) {
    // El email ya existe, devolver un error
    $response = array('result' => 'error', 'message' => 'El email ya está en uso.');
} else {
    // Insertar datos en la tabla "usuarios"
    $insertUserSql = "INSERT INTO usuarios (nombre, email, contrasena, edad) VALUES ('$nombre', '$email', '$contrasena', '$edad')";
    if ($conn->query($insertUserSql) === TRUE) {
        // Los datos se insertaron correctamente
        $response = array('result' => 'success', 'message' => 'Registro exitoso.');
    } else {
        // Ocurrió un error al insertar los datos en la tabla "usuarios"
        $response = array('result' => 'error', 'message' => 'Error al insertar datos en la tabla "usuarios": ' . $conn->error);
    }
}

// Devolver la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);

// Cerrar la conexión
$conn->close();
?>
