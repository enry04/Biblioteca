<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

switch ($data->counter) {
    case 1:
        $firstNumber = $data->firstNumber;
        $query = $pdo->prepare('SELECT * FROM tNumeroTelefono WHERE telefono=:firstNumber');
        $query->execute(['firstNumber' => $firstNumber]);
        break;
    case 2:
        $firstNumber = $data->firstNumber;
        $secondNumber = $data->secondNumber;
        $query = $pdo->prepare('SELECT * FROM tNumeroTelefono WHERE telefono=:firstNumber OR telefono=:secondNumber');
        $query->execute(['firstNumber' => $firstNumber, 'secondNumber' => $secondNumber]);
        break;
    case 3:
        $firstNumber = $data->firstNumber;
        $secondNumber = $data->secondNumber;
        $thirdNumber = $data->thirdNumber;
        $query = $pdo->prepare('SELECT * FROM tNumeroTelefono WHERE telefono=:firstNumber OR telefono=:secondNumber OR telefono=:thirdNumber');
        $query->execute(['firstNumber' => $firstNumber, 'secondNumber' => $secondNumber, 'thirdNumber' => $thirdNumber]);
        break;
}

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
