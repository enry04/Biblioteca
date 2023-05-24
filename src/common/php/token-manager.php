<?php
class TokenManager
{
    function __construct()
    {
        @session_start();

        if (!TokenManager::isLogged()) {
            $_SESSION['session_id'] = @session_id();
            setcookie('session_id', @session_id(), (time() + (60 * 60 * 24 * 10)), '/');
        }
    }
    static function logout()
    {
        TokenManager::unauthenticate();
        unset($_SESSION['user_id']);
        unset($_SESSION['user_type']);
        setcookie("user_id", "", time() - (60 * 10), '/');
        setcookie('user_type', "", time() - (60 * 10), '/');
        header("Location: ../../../index.php");
        exit;
    }

    static function authenticate($userId, $userType)
    {
        setcookie('user_id', $userId, time() + (60 * 60), '/');
        setcookie('user_type', $userType, time() + (60 * 60), '/');
    }

    static function unauthenticate()
    {
        setcookie("user_id", "", time() - (60 * 10), '/');
        setcookie('user_type', "", time() - (60 * 10), '/');
    }

    static function isAuthenticated()
    {
        return isset($_COOKIE['user_id']);
    }
    static function isLogged()
    {
        if (isset($_SESSION['user_id']) && !isset($_COOKIE['user_id'])) {
            $_COOKIE['user_id'] = $_SESSION['user_id'];
        }
        return isset($_COOKIE['user_id']);
    }
    static function setPage($page)
    {
        setcookie("current_page", $page, time() + (60 * 60), '/');
    }
}
