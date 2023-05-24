<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="../common/css/page-style.css">
    <link rel="stylesheet" href="../common/css/header-style.css">
    <link rel="stylesheet" href="../admin-operations-page/css/operations-style.css">
    <link rel="icon" href="../common/images/icons/volta-icon.png">
</head>

<body>
    <?php
    require_once("../common/php/token-manager.php");
    TokenManager::setPage("prenotations");
    require_once("../common/php/header.php");
    ?>
    <main>
        <section class="table-section">
            <h2 class="brown extra-bold">Le prenotazioni in attesa di conferma</h2>
            <h2 class="no-data-text hide no-prenotation-text">Non ci sono prenotazioni da confermare</h2>
            <table class="prenotations-table">

            </table>
        </section>
        <section class="table-section">
            <h2 class="brown extra-bold">Le opere in tuo possesso</h2>
            <h2 class="no-data-text hide no-loan-text">Non hai nessun prestito</h2>
            <table class="loans-table">

            </table>
        </section>
    </main>
    <script src="./js/prenotations-view.js" type="module"></script>
</body>

</html>