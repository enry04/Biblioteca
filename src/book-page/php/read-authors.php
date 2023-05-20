<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$operaId = $data->operaId;

$query = $pdo->prepare('SELECT * FROM tScrittura INNER JOIN tAutore ON idAutore = tAutore.id WHERE idOpera = :operaId');
$query->execute(['operaId' => $operaId]);
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
