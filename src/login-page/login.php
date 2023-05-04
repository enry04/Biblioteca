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
                <input type="text" class="username" required>
                <input type="password" class="password" required>
                <input type="submit" value="Conferma">
            </form>
        </div>
    </div>
</body>

</html>