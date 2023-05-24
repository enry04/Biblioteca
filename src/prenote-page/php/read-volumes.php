<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$query = $pdo->query('SELECT * FROM tOpera WHERE idTipologia = 2');
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
