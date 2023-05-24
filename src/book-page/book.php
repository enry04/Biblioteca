<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="../common/css/page-style.css">
    <link rel="stylesheet" href="../common/css/header-style.css">
    <link rel="stylesheet" href="./css/book-style.css">
    <link rel="icon" href="../common/images/icons/volta-icon.png">
</head>

<body>
    <?php
    require_once("../common/php/token-manager.php");
    TokenManager::setPage("");
    require_once("../common/php/header.php");
    ?>
    <div class="main-overlay">
        <div class="main-container">
            <div class="book-container"></div>
            <div class="description-container">
                <h3 class="brown extra-bold">Tipologia: <span class="brown typology"></span></h3>
                <h3 class="brown extra-bold encyclopedia-text">Enciclopedia di riferimento: <span class="brown encyclopedia"></span></h3>
                <h3 class="brown extra-bold number-text">Numero volume: <span class="brown volume"></span></h3>
                <h3 class="brown extra-bold">Titolo: <span class="brown title"></span></h3>
                <h3 class="brown extra-bold">Autori: <span class="brown authors"></span></h3>
                <h3 class="brown extra-bold">Data di pubblicazione: <span class="brown date"></span></h3>
                <h3 class="brown extra-bold">ISBN: <span class="brown isbn"></span></h3>
                <h3 class="brown extra-bold">Casa editrice: <span class="brown home"></span></h3>
                <h3 class="brown extra-bold date-text">Data di riferimento: <span class="brown paper-date"></span></h3>
                <?php
                if (!TokenManager::isAuthenticated() || $_COOKIE['user_type'] == 'utente') {
                ?>

                <?php
                } else {
                ?>
                    <h3 class="brown extra-bold">Stato: <span class="brown state"></span></h3>
                    <h3 class="brown extra-bold">Biblioteca di appartenenza: <span class="brown library"></span></h3>
                <?php
                }
                ?>
            </div>
            <?php
            if (!TokenManager::isAuthenticated() || $_COOKIE['user_type'] == 'utente') {
            ?>
                <input type="button" value="Prenota libro" class="prenote-btn">
                <h3 class="brown info-text hide-info"></h3>
            <?php
            }
            ?>
        </div>
    </div>
    <script src="./js/book-view.js" type="module"></script>
</body>

</html>