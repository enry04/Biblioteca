<?php
require('../../common/php/connection.php');
require('../../common/php/token-manager.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$operaId = $data->operaId;

$query = $pdo->prepare('SELECT * FROM tOpera INNER JOIN tPrenotazione ON tPrenotazione.idOpera = tOpera.id WHERE tOpera.id = :operaId');
$query->execute(['operaId' => $operaId]);
$userData = $query->fetchAll();
$result = null;

if ($userData == null) {
    $result = array(
        'data' => json_encode($userData),
        'status' => "libero",
    );
} else {
    $query = $pdo->prepare('SELECT * FROM tOpera INNER JOIN tPrenotazione ON tPrenotazione.idOpera = tOpera.id INNER JOIN tPrestito ON tPrestito.idPrenotazione = tPrenotazione.id INNER JOIN tRitiro ON tRitiro.idPrestito = tPrestito.id WHERE tOpera.id = :operaId');
    $query->execute(['operaId' => $operaId]);
    $userData = $query->fetchAll();
    if ($userData != null) {
        $result = array(
            'data' => json_encode($userData),
            'status' => 'Libero',
        );
    } else {
        $query = $pdo->prepare('SELECT * FROM tOpera INNER JOIN tPrenotazione ON tPrenotazione.idOpera = tOpera.id INNER JOIN tPrestito ON tPrestito.idPrenotazione = tPrenotazione.id WHERE tOpera.id = :operaId');
        $query->execute(['operaId' => $operaId]);
        $userData = $query->fetchAll();
        if ($userData != null) {
            $result = array(
                'data' => json_encode($userData),
                'status' => "In prestito",
            );
        } else {
            $query = $pdo->prepare('SELECT * FROM tOpera INNER JOIN tPrenotazione ON tPrenotazione.idOpera = tOpera.id WHERE tOpera.id = :operaId');
            $query->execute(['operaId' => $operaId]);
            $userData = $query->fetchAll();
            if ($userData != null) {
                $result = array(
                    'data' => json_encode($userData),
                    'status' => "Prenotato",
                );
            } else {
                $result = array(
                    'data' => null,
                    'status' => "error",
                );
            }
        }
    }
}

echo json_encode($result);
