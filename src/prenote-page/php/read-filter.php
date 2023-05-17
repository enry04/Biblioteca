<?php
require('../../common/php/connection.php');

$connMySQL = new ConnectionMySQL();
$pdo = $connMySQL->getConnection();

$json = file_get_contents('php://input');
$data = json_decode($json);

$filter = $data->filter;

$query = $pdo->prepare("SELECT tOpera.id, tOpera.copertina FROM tOpera INNER JOIN tTipologia ON tOpera.idTipologia = tTipologia.id INNER JOIN tScrittura ON tOPera.id = tScrittura.idOpera INNER JOIN tAutore ON tAutore.id = tScrittura.idAutore INNER JOIN tCasaEditrice ON tOpera.idCasaEditrice = tCasaEditrice.id WHERE titolo LIKE CONCAT('%', :filter ,'%') OR isbn LIKE CONCAT('%', :filter ,'%') OR nomeTipologia LIKE CONCAT('%', :filter ,'%') OR tAutore.nome LIKE CONCAT('%', :filter ,'%') OR tAutore.cognome LIKE CONCAT('%', :filter ,'%') OR nomeCasaEditrice LIKE CONCAT('%', :filter ,'%')");
$query->execute(['filter' => $filter]);
$elementsData = $query->fetchAll();
$result = null;

if ($elementsData != null) {
    $result = array(
        'data' => json_encode($elementsData),
        'status' => "success",
    );
} else {
    $result = array(
        'data' => null,
        'status' => "error",
    );
}

echo json_encode($result);
