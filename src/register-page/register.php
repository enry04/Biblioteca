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
            <h2 class="brown extra-bold">Registrati</h2>
            <form method="post">
                <div class="row">
                    <input type="text" class="name" placeholder="Nome" required>
                    <input type="text" class="surname" placeholder="Cognome" required>
                    <div class="input-container">
                        <input type="email" class="email" placeholder="Email" required>
                        <h4 class="hide email-error">Email già in uso</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="input-container">
                        <input type="text" class="tax-code" placeholder="Codice fiscale" required>
                        <h4 class="hide tax-code-error">Codice fiscale già in uso</h4>
                    </div>
                    <div class="input-container">
                        <input type="text" class="username" placeholder="Nome utente" required>
                        <h4 class="hide username-error">Nome utente già in uso</h4>
                    </div>
                    <input type="password" class="password" placeholder="Password" required>
                </div>
                <div class="start-row">
                    <div class="input-container">
                        <input type="number" class="phone-number" placeholder="Numero di telefono (opzionale)">
                        <h4 class="hide first-telephone-error">Numero di telefono già in uso</h4>
                    </div>
                </div>
                <input type="submit" value="Conferma">
            </form>
            <h4 class="brown plus-btn">Aggiungi un ulteriore numero di telefono</h4>
        </div>
    </div>
    <script src="./js/register-view.js" type="module"></script>
</body>

</html>