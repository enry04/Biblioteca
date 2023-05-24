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
    <link rel="stylesheet" href="./css/login-style.css">
    <link rel="icon" href="../common/images/icons/volta-icon.png">
</head>

<body>
    <?php
    require_once("../common/php/token-manager.php");
    TokenManager::setPage("login");
    require_once("../common/php/header.php");
    ?>
    <div class="main-overlay">
        <div class="main-container">
            <h2 class="brown extra-bold">Accedi</h2>
            <form method="post">
                <input type="text" class="username" placeholder="Nome utente" required>
                <div class="input-container">
                    <input type="password" class="password" placeholder="Password" required>
                    <h4 class="error-text hide">Credenziali errate</h4>
                </div>
                <input type="submit" value="Conferma">
            </form>
            <h4>
                <a href="../register-page/register.php" class="brown">Non sei registrato? Crea un account</a>
            </h4>
        </div>
    </div>
    <script src="./js/login-view.js" type="module"></script>
</body>

</html>