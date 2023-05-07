<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="../common/css/page-style.css">
    <link rel="stylesheet" href="../common/css/header-style.css">
    <link rel="stylesheet" href="../common/css/form-style.css">
    <link rel="stylesheet" href="./css/register-style.css">
</head>

<body>
    <?php
    require_once("../common/php/token-manager.php");
    TokenManager::setPage("");
    require_once("../common/php/header.php");
    ?>
    <div class="main-overlay">
        <div class="main-container">
            <h2 class="brown extra-bold">Registrati</h2>
            <form method="post">
                <div class="row">
                    <input type="text" class="name" placeholder="Nome" required>
                    <input type="text" class="surname" placeholder="Cognome" required>
                    <input type="email" class="email" placeholder="Email" required>
                </div>
                <div class="row">
                    <input type="text" class="tax-code" placeholder="Codice fiscale" required>
                    <input type="text" class="username" placeholder="Nome utente" required>
                    <input type="password" class="password" placeholder="Password" required>
                </div>
                <div class="start-row">
                    <input type="number" class="phone-number" placeholder="Numero di telefono (opzionale)">
                </div>
                <div class="start-row">
                    <h4 class="brown plus-btn">Aggiungi un ulteriore numero</h4>
                </div>
                <input type="submit" value="Conferma">
            </form>
        </div>
    </div>
    <script src="./js/register-view.js" type="module"></script>
</body>

</html>