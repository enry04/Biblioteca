<?php
require('../../common/php/connection.php');


$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$adminId = $data->adminId;

$query = $pdo->prepare('SELECT idBiblioteca FROM tAddetto WHERE id = :adminId ');
$query->execute(['adminId' => $adminId]);
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
