<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$operaId = $data->operaId;

$query = $pdo->prepare('SELECT * FROM tOpera INNER JOIN tCasaEditrice ON idCasaEditrice = tCasaEditrice.id INNER JOIN tTipologia ON tOpera.idTipologia = tTipologia.id INNER JOIN tScaffale ON tOpera.idScaffale = tScaffale.id INNER JOIN tArmadio ON tArmadio.id = tScaffale.idArmadio INNER JOIN tStanza ON tStanza.id = tArmadio.idStanza INNER JOIN tBiblioteca ON tStanza.idBiblioteca = tBiblioteca.id WHERE tOpera.id = :operaId');
$query->execute(['operaId' => $operaId]);
$userData = $query->fetch();
$result = null;

if ($userData != null) {
    $result = array(
        'data' => $userData,
        'status' => "success",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "error",
    );
}

echo json_encode($result);
