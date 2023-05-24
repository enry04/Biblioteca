<?php
require_once("./src/common/php/token-manager.php");
$tokenManager = new TokenManager();
header("Location: ./src/main-page/main.php");
die();
