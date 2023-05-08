<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);


$name = $data->name;
$surname = $data->surname;
$email = $data->email;
$taxCode = $data->taxCode;
$username = $data->username;
$password = $data->password;

$result = null;

try {

    $query = $pdo->prepare("INSERT INTO tUtente (nome, cognome, codiceFiscale, email, password, nomeUtente ) VALUES (:name, :surname, :taxCode,:email, :password, :username)");
    $query->execute(['name]);
    $result = array(
        'data' => null,
        'status' => "success",
    );
} catch (PDOException $e) {
    $result = array(
        'data' => $e,
        'status' => "error",
    );
}

echo json_encode($result);
