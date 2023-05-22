<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$operaId = $data->operaId;
$userId = $data->userId;

$result = null;

try {

    $query = $pdo->prepare("INSERT INTO tPrenotazione (idOpera, idUtente, dataPrenotazione) VALUES (:operaId, :userId, NOW())");
    $query->execute(['operaId' => $operaId,  'userId' => $userId]);
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
