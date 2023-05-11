<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="../common/css/page-style.css">
    <link rel="stylesheet" href="../common/css/header-style.css">
    <link rel="stylesheet" href="./css/prenote-style.css">
    <link rel="icon" href="../common/images/icons/volta-icon.png">
</head>

<body>
    <?php
    require_once("../common/php/token-manager.php");
    TokenManager::setPage("prenote");
    require_once("../common/php/header.php");
    ?>
    <section class="search-bar-section">
        <form method="post">
            <input type="text" class="filter" placeholder="Ricerca libro per autore, titolo, tipologia...">
            <input type="submit" value="Cerca" class="submit-btn">
        </form>
    </section>
    <main>
        <section class="bookshelf-section"></section>
        <section class="bookshelf-section"></section>
        <section class="bookshelf-section"></section>
        </main>
</body>

</html>