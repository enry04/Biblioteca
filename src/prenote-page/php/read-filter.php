<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$filter = $data->filter;

$query = $pdo->prepare('SELECT * FROM tOpera WHERE titolo LIKE CONCAT('%',:filter,'%') OR LIKE CONCAT('%',:filter,'%')');
$query->execute([]);
$elementsData = $query->fetchAll();
$result = null;

if ($elementsData != null) {
    $result = array(
        'data' => json_encode($elementsData),
        'status' => "already present",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "not present",
    );
}

echo json_encode($result);
