<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Aplicativo_Vale2";

// Permitir solicitudes desde cualquier origen
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

// Obtener los datos enviados por la solicitud
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Verificar si se recibieron datos válidos
if (empty($data) || !is_array($data)) {
    $response = array('result' => 'error', 'message' => 'No se recibieron datos válidos.');
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}

// Crear una conexión utilizando consultas preparadas (prepared statements)
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    $response = array('result' => 'error', 'message' => 'Error de conexión a la base de datos: ' . $conn->connect_error);
    header('Content-Type: application/json');
    echo json_encode($response);
    exit();
}
/* // Datos a insertar en la tabla "personas"
$nombres = isset($data["nombres"]) ? $conn->real_escape_string($data["nombres"]) : '';
$numeroDocumento = isset($data["numeroDocumento"]) ? $conn->real_escape_string($data["numeroDocumento"]) : '';
$edad = isset($data["edad"]) && is_numeric($data["edad"]) ? intval($data["edad"]) : 0;
$direccion = isset($data["direccion"]) ? $conn->real_escape_string($data["direccion"]) : '';
$barrio = isset($data["barrio"]) ? $conn->real_escape_string($data["barrio"]) : '';
$tipoUsuario = "usuario"; // Tipo de usuario siempre será "usuario"
$estado = "pendiente"; // Estado siempre será "pendiente"
$verificationCode = rand(1000, 9999); // Genera un número aleatorio de 4 dígitos */

$nombre = $data['nombre'];
$edad = $data['edad'];
$email = $data['email'];
$contrasena = $data['contrasena'];



$sqlRegistro = " INSERT INTO users (nombre, edad, email, contrasena) VALUES (?,?,?,?)";
$stmt = $conn->prepare($sqlRegistro);
$stmt->bind_param("ssisssss", $nombre, $edad, $email, $contrasena);
/* // Insertar datos en la tabla "personas" utilizando consultas preparadas
$insertPersonasSql = "INSERT INTO personas (nombres, numero_documento, edad, direccion, barrio, tipo_usuario, estado, verification_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($insertPersonasSql);
$stmt->bind_param("ssisssss", $nombres, $numeroDocumento, $edad, $direccion, $barrio, $tipoUsuario, $estado, $verificationCode);
 */

if (!$stmt->execute()) {
    // Ocurrió un error al insertar los datos en la tabla "personas"
    $response = array('result' => 'error', 'message' => 'Error al insertar datos en la tabla "Users": ' . $stmt->error);
    header('Content-Type: application/json');
    echo json_encode($response);
    $stmt->close();
    $conn->close();
    exit();
}


// Cerrar la consulta preparada y la conexión
$stmt->close();
$conn->close();

// Devolver la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);
?>