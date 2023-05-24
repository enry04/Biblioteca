<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$userId = $data->userId;

$query = $pdo->prepare('SELECT tUtente.nomeUtente, tOpera.titolo, tPrestito.dataPrestito, tAddetto.nomeUtente AS nomeAddetto, tBiblioteca.citta, tPrestito.id AS idPrestito, tPrenotazione.id AS idPrenotazione FROM tPrestito INNER JOIN tPrenotazione ON tPrenotazione.id = idPrenotazione INNER JOIN tOpera ON tPrenotazione.idOpera = tOpera.id INNER JOIN tUtente ON tPrenotazione.idUtente = tUtente.id INNER JOIN tAddetto ON tPrestito.idAddetto = tAddetto.id INNER JOIN tBiblioteca ON tAddetto.idBiblioteca = tBiblioteca.id WHERE stato = "in prestito" AND idUtente = :userId ORDER BY dataPrestito');
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
