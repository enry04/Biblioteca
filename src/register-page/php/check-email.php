<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$email = $data->email;

$query = $pdo->prepare('SELECT * FROM tUtente WHERE email=:email');
$query->execute(['email' => $email]);
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
