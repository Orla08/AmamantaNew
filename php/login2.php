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

$json = file_get_contents("php://input");
$data = json_decode($json, true);


$email = $data['email']; // Escapar datos de entrada
$contrasena = $data['contrasena']; // Escapar datos de entrada

// Proceder a obtener los campos necesarios del usuario
$sqlUsuarios = "SELECT * FROM users WHERE email = '$email' && contrasena = '$contrasena' ";
// $stmt = $conn->prepare($sqlUsuarios);
// if (!$stmt) {
//     die(json_encode(array("result" => "error", "message" => "Error en la consulta SQL: " . $conn->error)));
// }

// $stmt->bind_param("s", $email);
// if (!$stmt->execute()) {
//     die(json_encode(array("result" => "error", "message" => "Error al ejecutar la consulta: " . $stmt->error)));
// }

// $resultUsuarios = $stmt->get_result();

$result = $conn->query($sqlUsuarios);
 
// $response = array();

if($result->num_rows > 0){ //Si hay algun usuario
    while($response[] = $result->fetch_assoc()){ //Dentro del array de response atraparemos todos los datos que trae la consulta
        $tem = $response; 
    }
    echo json_encode("Ok");
}else{
    echo json_encode("Error jejeje");

}


// Verificar si se obtuvieron resultados válidos
/* if ($resultUsuarios->num_rows > 0) {
    $row = $resultUsuarios->fetch_assoc();
    if (password_verify($contrasena, $row['contrasena'])) {
        $response = array(
            "result" => "success",
            "identificacion" => $row["identificacion"],
            "nombre" => $row["nombre"],
            "edad" => $row["edad"],
            "email" => $row["email"]
        );
    } else {
        $response = array("result" => "error", "message" => "Credenciales incorrectas");
    }
} else {
    $response = array("result" => "error", "message" => "Credenciales incorrectas");
} */

http_response_code(200);
header('Content-Type: application/json');
echo json_encode($result);

$stmt->close();
$conn->close();
?>
