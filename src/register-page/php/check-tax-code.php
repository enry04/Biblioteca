<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$taxCode = $data->taxCode;

$query = $pdo->prepare('SELECT * FROM tUtente WHERE codiceFiscale=:taxCode');
$query->execute(['taxCode' => $taxCode]);
$userData = $query->fetch();
$result = null;

if ($userData != null) {
    $result = array(
        'data' => $userData,
        'status' => "already present",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "not present",
    );
}

echo json_encode($result);
