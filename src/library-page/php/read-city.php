<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$libraryId = $data->libraryId;

$query = $pdo->prepare("SELECT * FROM tBiblioteca WHERE id = :libraryId");
$query->execute(['libraryId' => $libraryId]);
$elementsData = $query->fetch();
$result = null;

if ($elementsData != null) {
    $result = array(
        'data' => $elementsData,
        'status' => "success",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "error",
    );
}

echo json_encode($result);
