<?php
require('../../common/php/connection.php');
require('../../common/php/token-manager.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$username = $data->username;
$password = $data->password;

$query = $pdo->prepare('SELECT * FROM tUtente WHERE nomeUtente=:username AND password=:password');
$query->execute(['username' => $username, 'password' => $password]);
$userData = $query->fetch();
$result = null;

if ($userData != null) {
    $result = array(
        'data' => $userData,
        'status' => "already present",
    );

    TokenManager::authenticate($userData['id'], 'utente');
} else {
    $query = $pdo->prepare('SELECT * FROM tAddetto WHERE nomeUtente=:username AND password=:password');
    $query->execute(['username' => $username, 'password' => $password]);
    $userData = $query->fetch();
    if ($userData != null) {
        $result = array(
            'data' => $userData,
            'status' => "already present",
        );

        TokenManager::authenticate($userData['id'], 'addetto');
    } else {
        $result = array(
            'data' => null,
            'status' => "not present",
        );
    }
}

echo json_encode($result);
