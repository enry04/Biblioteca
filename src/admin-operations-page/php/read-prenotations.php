<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$query = $pdo->query('SELECT tPrenotazione.id AS idPrenotazione ,tPrenotazione.*, tUtente.nomeUtente, tOpera.titolo, tOpera.id AS idOpera FROM tPrenotazione INNER JOIN tOpera ON tPrenotazione.idOpera = tOpera.id INNER JOIN tUtente ON tPrenotazione.idUtente = tUtente.id WHERE stato = "prenotato" ORDER BY dataPrenotazione');
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
