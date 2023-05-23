<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$prenotationId = $data->prenotationId;
$state = $data->state;

$result = null;

try {

    $query = $pdo->prepare("UPDATE tPrenotazione SET stato=:state WHERE id =:prenotationId");
    $query->execute(['prenotationId' => $prenotationId,  'state' => $state]);
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
