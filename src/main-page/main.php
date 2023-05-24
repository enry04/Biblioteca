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
    <link rel="stylesheet" href="../common/css/form-style.css">
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0RLgPIM87iDhK6rJww_Wb6VuIMXnjS_U"></script>
    <link rel="icon" href="../common/images/icons/volta-icon.png">
</head>

<body>
    <?php
    require_once("../common/php/token-manager.php");
    TokenManager::setPage("home");
    require_once("../common/php/header.php");
    ?>
    <section class="main-section">
        <div class="custom-shape-divider-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
        </div>
        <?php
        if (TokenManager::isAuthenticated() &&  $_COOKIE['user_type'] == 'addetto') {
        ?>
            <div class="main-description-container">
                <h1 class="extra-bold brown">Benvenuto nell'area riservata agli<br>addetti della biblioteca </h1>
                <h3 class="extra-bold brown">Nell' area riservata agli addetti di ogni biblioteca<br>
                    appartenente alla catena Volta, si gestiscono le prenotazioni, i prestiti<br>
                    e i ritiri di libri enciclopedie e carte geo-politiche</h3>
            </div>
        <?php
        } else {
        ?>
            <div class="main-description-container">
                <h1 class="extra-bold brown">Volta, la catena di biblioteche <br> più ricca</h1>
                <h3 class="extra-bold brown">Le nostre biblioteche, sparse in tutta Italia, dispongono<br>
                    di libri, enciclopedie e carte geo-politiche.<br>
                    Cosa aspetti a prenotare un libro? Fallo subito! </h3>
            </div>
        <?php
        }
        ?>
        <div class="library-container">

        </div>
    </section>
    <section class="prenote-section">
        <?php
        if (TokenManager::isAuthenticated()) {
            if ($_COOKIE['user_type'] == 'utente') {
        ?>
                <div class="book-cover-container">
                    <h2>
                        <a class="aguafina white" href="../prenote-page/prenote.php">Prenota</a>
                    </h2>
                </div>
                <div class="main-description-container">
                    <h1 class="extra-bold white">Prendi in prestito un libro creando <br> un account</h1>
                    <h3 class="extra-bold white">Puoi prenotare un prestito di un libro, di un volume di un’ enciclopedia o di una <br>carta geo-politica effettuando l’accesso al sito.<br>Nel caso se l’ opera è già stata presa in prestito, verrai inserito in una coda<br>di attesa fino al momento di restituzione</h3>
                </div>
            <?php
            } else {
            ?>
                <div class="book-cover-container">
                    <h3>
                        <a class="aguafina white" href="../admin-operations-page/admin-operations.php">Gestione prenotazioni</a>
                    </h3>
                </div>
                <div class="main-description-container">
                    <h1 class="extra-bold white">Gestisci le prenotazioni, i prestiti e le<br>restituzioni di ogni utente</h1>
                    <h3 class="extra-bold white">Gli addetti della biblioteca Volta nella sezione riservata, devono occuparsi nella<br> registrazione di nuove opere, la conferma di prenotazioni, la gestione di prestiti e <br> ritiri.<br>
                    </h3>
                </div>
            <?php
            }
            ?>
        <?php
        } else {
        ?>
            <div class="main-container">
                <form method="post">
                    <input type="text" class="username" placeholder="Nome utente" required>
                    <div class="input-container">
                        <input type="password" class="password" placeholder="Password" required>
                        <h4 class="hide error-text">Credenziali errate</h4>
                    </div>
                    <input type="submit" value="Accedi">
                </form>
            </div>
            <div class="main-description-container">
                <h1 class="extra-bold white">Prendi in prestito un libro creando <br> un account</h1>
                <h3 class="extra-bold white">Puoi prenotare un prestito di un libro, di un volume di un’ enciclopedia o di una <br>carta geo-politica effettuando l’accesso al sito. <br>Se non hai ancora creato un account puoi <a href="../register-page/register.php" class="click-span white extra-bold">cliccare qui</a>.<br>Nel caso se l’ opera è già stata presa in prestito, verrai inserito in una coda<br>di attesa fino al momento di restituzione</h3>
            </div>
        <?php
        }
        ?>

    </section>
    <section class="map-section" id="map">
        <div class="custom-shape-divider-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
            </svg>
        </div>
        <h1 class="extra-bold brown">Le nostre sedi in Italia</h1>
        <div class="map-container"></div>
    </section>
    <script src="./js/main-view.js" type="module"></script>
</body>

</html>