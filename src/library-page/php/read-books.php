<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$libraryId = $data->libraryId;

$query = $pdo->prepare("SELECT * FROM tOpera INNER JOIN tScaffale ON tOpera.idScaffale = tScaffale.id INNER JOIN tArmadio ON tScaffale.idArmadio = tArmadio.id INNER JOIN tStanza ON tArmadio.idStanza = tStanza.id INNER JOIN tBiblioteca ON tStanza.idBiblioteca = tBiblioteca.id WHERE tBiblioteca.id = :libraryId");
$query->execute(['libraryId' => $libraryId]);
$elementsData = $query->fetchAll();
$result = null;

if ($elementsData != null) {
    $result = array(
        'data' => json_encode($elementsData),
        'status' => "success",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "error",
    );
}

echo json_encode($result);
