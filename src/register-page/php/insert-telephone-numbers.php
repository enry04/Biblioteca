<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);


$userId = $data->userId;
$counter = $data->counter;
$phones = $data->telephones;

$result = null;

try {

    for ($i = 0; $i < $counter; $i++) {
        $query = $pdo->prepare("INSERT INTO tNumeroTelefono (idUtente, telefono) VALUES (:userId, :telephone)");
        $query->execute(['userId' => $userId, 'telephone' => $phones[$i]]);
    }
    $result = array(
        'data' => null,
        'status' => "success",
    );
} catch (PDOException $e) {
    $result = array(
        'data' => $e,
        'status' => "error",
    );
}

echo json_encode($result);
