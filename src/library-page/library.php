<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="../common/css/page-style.css">
    <link rel="stylesheet" href="../common/css/header-style.css">
    <link rel="stylesheet" href="../prenote-page/css/prenote-style.css">
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
    <section class="bookshelf-section filter-section hide">
        <h1 class="aguafina white title-text filter-title">Le opere presenti nella biblioteca di <span class="aguafina white filter-city"></span></h1>
        <div class="filters-container">
            <a class="filter-prev prev"><</a>
            <a class="filter-next next">></a>
        </div>
    </section>
    <h2 class="not-found hide">Nessun risultato trovato</h2>
    <main>
        <section class="bookshelf-section book-section">
        <h1 class="aguafina white title-text">Le opere presenti nella biblioteca di <span class="aguafina white city-text"></span></h1>
            <div class="books-container">
                <a class="prev"><</a>
                <a class="next">></a>
            </div>
        </section>
    </main>
    <script src="./js/library-view.js" type="module"></script>
</body>

</html>