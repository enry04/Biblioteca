<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="../common/css/page-style.css">
    <link rel="stylesheet" href="../common/css/header-style.css">
    <link rel="stylesheet" href="./css/main-style.css">
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0RLgPIM87iDhK6rJww_Wb6VuIMXnjS_U"></script>
</head>

<body>
    <?php
    require_once("../common/php/token-manager.php");
    TokenManager::setPage("home");
    require_once("../common/php/header.php");
    ?>
    <section class="main-section">
        <div class="main-description-container">
            <h1 class="extra-bold white">Volta, la catena di biblioteche <br> più ricca</h1>
            <h3 class="extra-bold white">Le nostre biblioteche, sparse in tutta Italia, dispongono<br>
                di libri, enciclopedie e carte geo-politiche.<br>
                Cosa aspetti a prenotare un libro? Fallo subito! </h3>
        </div>
        <div class="library-container">

        </div>
    </section>
    <section class="map-section">
        <h2 class="extra-bold brown">Le nostre sedi presenti in Italia</h2>
        <div class="map-container"></div>
    </section>
    <script src="./js/main-view.js" type="module"></script>
</body>

</html>