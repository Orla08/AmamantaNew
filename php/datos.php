<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "amamanta";

// Permitir solicitudes desde cualquier origen
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

// Obtener los datos enviados por la solicitud en formato JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    error_log("Error de conexión: " . $conn->connect_error);
    echo json_encode(array('result' => 'error', 'message' => 'Error de conexión a la base de datos.'));
    exit();
}

// Verificar si los datos requeridos están presentes en la solicitud
if (empty($data["seno"]) || empty($data["tiempo"]) || empty($data["idUser"])) {
    $response = array('result' => 'error', 'message' => 'Faltan campos requeridos.');
} else {
    // Datos a insertar en la tabla "usuarios"
    $seno = $conn->real_escape_string($data["seno"]);
    $tiempo = $conn->real_escape_string($data["tiempo"]);
    $idUser = $conn->real_escape_string($data["idUser"]);
    //$fecha_actual = date("Y-m-d H:i:s"); // Obtiene la fecha y hora actual en el formato MySQL

        // Insertar datos en la tabla "usuarios" utilizando consultas preparadas
        $sqlInsertDatos = "INSERT INTO datos (seno, tiempo, idUser, fecha) VALUES (?, ?, ?, CURRENT_TIMESTAMP)";
        $sqlInsertDatos2 = $conn->prepare($sqlInsertDatos);
        $sqlInsertDatos2->bind_param("sss", $seno, $tiempo, $idUser); // Solo tres variables para coincidir con la consulta SQL
        
        if ($sqlInsertDatos2->execute()) {
            // Los datos se insertaron correctamente
            $response = array('result' => 'success', 'message' => 'Registro exitoso.');
        } else {
            // Ocurrió un error al insertar los datos en la tabla "usuarios"
            $response = array('result' => 'error', 'message' => 'Error al insertar datos en la tabla "usuarios": ' . $stmtInsertUser->error);
        }
}

// Devolver la respuesta como JSON
header('Content-Type: application/json');
echo json_encode($response);

// Cerrar la conexión
$conn->close();
?>
