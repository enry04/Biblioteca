<?php
require_once("../common/php/token-manager.php");
?>

<header>
    <div class="logo-container">
        <div class="logo"></div>
        <h3 class="extra-bold brown">Biblioteca <br>Volta</h3>
    </div>
    <div class="voices-container">
        <div class="active-container">
        </div>
        <h3>
            <a class="brown extra-bold home" href="../main-page/main.php">Home</a>
        </h3>
        <?php
        if (TokenManager::isAuthenticated()) {
            if ($_COOKIE['user_type'] == 'utente') {
        ?>
                <h3>
                    <a class="brown extra-bold prenote" href="../prenote-page/prenote.php">Prenota</a>
                </h3>
                <h3>
                    <a class="brown extra-bold prenotations" href="../prenotations-page/prenotations.php">Le prenotazioni</a>
                </h3>
                <h3>
                    <a class="brown extra-bold libraries" href="../main-page/main.php#map">Le biblioteche</a>
                </h3>
                <h3>
                    <a class="brown extra-bold logout" href="../common/php/logout.php">Logout</a>
                </h3>
            <?php
            } else if ($_COOKIE['user_type'] == 'addetto') {
            ?>
                <h3>
                    <a href="../admin-operations-page/admin-operations.php" class="brown extra-bold operations-management">Operazioni</a>
                </h3>
                <h3>
                    <a href="../prenote-page/prenote.php" class="brown extra-bold books-management">Ricerca libro</a>
                </h3>
                <h3>
                    <a class="brown extra-bold login" href="../common/php/logout.php">Logout</a>
                </h3>
            <?php
            }
            ?>
        <?php
        } else {
        ?>
            <h3>
                <a class="brown extra-bold prenote" href="../prenote-page/prenote.php">Prenota</a>
            </h3>
            <h3>
                <a class="brown extra-bold libraries" href="../main-page/main.php#map">Le biblioteche</a>
            </h3>
            <h3>
                <a class="brown extra-bold login" href="../login-page/login.php">Accedi</a>
            </h3>
        <?php
        }
        ?>
    </div>
</header>
<script src="../common/js/header-manager.js" type="module"></script>