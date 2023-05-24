<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$query = $pdo->query('SELECT tUtente.nomeUtente, tOpera.titolo, tPrestito.dataPrestito, tAddetto.nomeUtente AS nomeAddetto, tBiblioteca.citta FROM tPrestito INNER JOIN tPrenotazione ON tPrenotazione.id = idPrenotazione INNER JOIN tOpera ON tPrenotazione.idOpera = tOpera.id INNER JOIN tUtente ON tPrenotazione.idUtente = tUtente.id INNER JOIN tAddetto ON tPrestito.idAddetto = tAddetto.id INNER JOIN tBiblioteca ON tAddetto.idBiblioteca = tBiblioteca.id WHERE stato = "in prestito" ORDER BY dataPrestito');
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
