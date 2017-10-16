<?php
$SRV = '';
$DB = '';
$USER = '';
$PASS = '';

try {
$CONN = new PDO("sqlsrv:server=$SRV;database=$DB,$USER,$PASS"); }
catch(Exception $ex) {
die(print_r($ex->getMessage())); }
?>