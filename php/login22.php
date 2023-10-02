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
$data = json_decode(file_get_contents("php://input"));

$email = $conn->real_escape_string($data["email"]);
$contrasena = $conn->real_escape_string($data["contrasena"]);

// Verificar la conexión
if ($conn->connect_error) {
    die(json_encode(array("result" => "error", "message" => "Conexión fallida: " . $conn->connect_error)));
}

// Proceder a obtener los campos necesarios del usuario
$sqlUsuarios = "SELECT *FROM users WHERE email = ? AND contrasena = ?";

// Utilizar una sentencia preparada para prevenir ataques de inyección SQL
$stmt = $conn->prepare($sqlUsuarios);
if (!$stmt) {
    die(json_encode(array("result" => "error", "message" => "Error en la consulta SQL: " . $conn->error)));
}

// Enlazar parámetros
$stmt->bind_param("ss", $email, $contrasena);

// Ejecutar la consulta
if (!$stmt->execute()) {
    die(json_encode(array("result" => "error", "message" => "Error al ejecutar la consulta: " . $stmt->error)));
}

// Obtener los resultados de la consulta preparada
$resultUsuarios = $stmt->get_result();

$response = array();

// Verificar si se obtuvieron resultados válidos
if ($resultUsuarios->num_rows > 0) {
    // Obtener los datos del usuario
    $row = $resultUsuarios->fetch_assoc();
    $response = array(
        "result" => "success",
        "identificacion" => $row["id"],
        "nombre" => $row["nombre"],
        "edad" => $row["edad"],
        "email" => $row["email"]
    );
} else {
    // No se encontró el usuario
    $response = array("result" => "error", "message" => "Credenciales incorrectas");
}

// Enviar la respuesta como JSON con código de estado 200 (OK)
http_response_code(200);
header('Content-Type: application/json');
echo json_encode($response);

$stmt->close();
$conn->close();
?>
