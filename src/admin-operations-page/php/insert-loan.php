<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$prenotationId = $data->prenotationId;
$adminId = $data->adminId;

$result = null;

try {

    $query = $pdo->prepare("INSERT INTO tPrestito (idAddetto, idPrenotazione, dataPrestito) VALUES (:adminId, :prenotationId, NOW())");
    $query->execute(['prenotationId' => $prenotationId,  'adminId' => $adminId]);
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
