<?php
class ConnectionMySQL
{
    private const host = '127.0.0.1:3306';
    private const db = 'bibliotecavisentin';
    private const user = 'root';
    private const pass = '';
    private const charset = 'utf8mb4';
    private $dsn = "mysql:host=" . ConnectionMySQL::host . ";dbname=" . ConnectionMySQL::db . ";charset=" . ConnectionMySQL::charset;
    private $connection = null;

    function __construct()
    {
        try {
            $this->connection = new PDO($this->dsn, ConnectionMySQL::user, ConnectionMySQL::pass);
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int) $e->getCode());
        }
    }

    function getConnection()
    {
        if ($this->connection) {
            return $this->connection;
        }
    }
}
