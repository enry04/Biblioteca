<?php
require('../../common/php/connection.php');


$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$operaId = $data->operaId;

$query = $pdo->prepare('SELECT stato FROM tPrenotazione  WHERE tPrenotazione.idOpera = :operaId AND tPrenotazione.stato = "in prestito"');
$query->execute(['operaId' => $operaId]);
$userData = $query->fetch();
$result = null;

if ($userData != null) {
    $result = array(
        'data' => $userData,
        'status' => "already borrowed",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "not borrowed",
    );
}

echo json_encode($result);
