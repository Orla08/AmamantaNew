<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "amamanta";

// Permitir solicitudes desde cualquier origen
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: *');

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(array("result" => "error", "message" => "Conexión fallida: " . $conn->connect_error)));
}

// Proceder a obtener solo los campos "nombres", "tipo_usuario" y "telefono" de los usuarios con estado "inactivo"
$sqlUsuarios = "SELECT * FROM users";

//statement
// Utilizar una sentencia preparada para prevenir ataques de inyección SQL
$stmt = $conn->prepare($sqlUsuarios);
if (!$stmt) {
    die(json_encode(array("result" => "error", "message" => "Error en la consulta SQL: " . $conn->error)));
}

// Ejecutar la consulta
if (!$stmt->execute()) {
    die(json_encode(array("result" => "error", "message" => "Error al ejecutar la consulta: " . $stmt->error)));
}

// Obtener los resultados de la consulta preparada
$resultUsuarios = $stmt->get_result();

$response = array();//Creamos un array

// Verificar si se obtuvieron resultados válidos
if ($resultUsuarios->num_rows > 0) {// Mientras haya datos en la consulta ejecutelos
    // Obtener los datos de los usuarios con estado "inactivo" y los campos requeridos
    while ($row = $resultUsuarios->fetch_assoc()) { // y metalos dentro del array
        $response[] = $row;
    }
} else {
    // No se encontraron usuarios inactivos
    $response = array("message" => "No se encontraron usuarios ");
}

// Enviar la respuesta como JSON con código de estado 200 (OK)
http_response_code(200);
header('Content-Type: application/json');
echo json_encode(array("result" => "success", "users" => $response));

$stmt->close();
$conn->close();
?>