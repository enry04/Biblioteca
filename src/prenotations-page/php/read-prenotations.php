<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$userId = $data->userId;

$query = $pdo->prepare('SELECT tPrenotazione.id AS idPrenotazione ,tPrenotazione.*, tUtente.nomeUtente, tOpera.titolo, tOpera.id AS idOpera FROM tPrenotazione INNER JOIN tOpera ON tPrenotazione.idOpera = tOpera.id INNER JOIN tUtente ON tPrenotazione.idUtente = tUtente.id WHERE stato = "Prenotato" AND tPrenotazione.idUtente = :userId ORDER BY dataPrenotazione');
$query->execute(['userId' => $userId]);
$booksData = $query->fetchAll();
$result = null;

if ($booksData != null) {
    $result = array(
        'data' => json_encode($booksData),
        'status' => "success",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "error",
    );
}

echo json_encode($result);
