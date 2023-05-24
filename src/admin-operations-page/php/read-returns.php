<?php
require('../../common/php/connection.php');


$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$libraryId = $data->libraryId;

$query = $pdo->prepare('SELECT tUtente.nomeUtente, tOpera.titolo, tPrenotazione.id AS idPrenotazione, tPrestito.id AS idPrestito FROM tBiblioteca INNER JOIN tStanza ON idBiblioteca = tBiblioteca.id INNER JOIN tArmadio ON idStanza = tStanza.id INNER JOIN tScaffale ON idArmadio = tArmadio.id INNER JOIN tOpera ON idScaffale = tScaffale.id INNER JOIN tPrenotazione ON tOpera.id = tPrenotazione.idOpera INNER JOIN tUtente ON tPrenotazione.idUtente = tUtente.id INNER JOIN tPrestito ON tPrenotazione.id = tPrestito.idPrenotazione WHERE tBiblioteca.id = :libraryId AND tPrenotazione.stato = "Restituito"');
$query->execute(['libraryId' => $libraryId]);
$userData = $query->fetchAll();
$result = null;

if ($userData != null) {
    $result = array(
        'data' => json_encode($userData),
        'status' => "success",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "error",
    );
}

echo json_encode($result);
