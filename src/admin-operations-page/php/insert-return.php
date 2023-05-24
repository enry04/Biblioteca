<?php

require("../../common/php/connection.php");

$connection = new ConnectionMySQL();
$pdo = $connection->getConnection();

$json = file_get_contents("php://input");
$data = json_decode($json);

$loanId = $data->loanId;
$adminId = $data->adminId;

$result = null;

try {

    $query = $pdo->prepare("INSERT INTO tRitiro (idAddetto, idPrestito, dataRitiro) VALUES (:adminId, :loanId, NOW())");
    $query->execute(['loanId' => $loanId,  'adminId' => $adminId]);
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
