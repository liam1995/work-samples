<?php
require('connect.php');

$JS = json_decode(file_get_contents('php://input'));
$RDY = 0;

foreach($JS as $key => $val) {
switch($key) {
case 'email': $JS->$key = trim(filter_var($JS->$key, FILTER_SANITIZE_EMAIL)); break;
case 'uname': $JS->$key = trim(filter_var($JS->$key, FILTER_SANITIZE_STRING)); break; }
}

if(empty($JS->email)) { echo 'Email is empty!' . "\n"; } else {  
if(empty(filter_var($JS->email, FILTER_VALIDATE_EMAIL))) { echo 'Email contains illegal characters!' . "\n"; } else { $RDY += 1; } }

if(empty($JS->uname)) { echo 'Username is empty!' . "\n"; } else {  
if(!ctype_alnum($JS->uname)) { echo 'Username only allows alphabetic characters!' . "\n"; } else { $RDY += 1; } }

if(empty($JS->fpword)) { echo 'Password is empty!' . "\n"; } else {
if(!preg_match('/[0-9]/', $JS->fpword) || !preg_match('/[A-Z]/', $JS->fpword)) { echo 'Password must contain at least one digit and uppercase character!' . "\n"; } else { $RDY += 1; } }	
if(empty($JS->lpword)) { echo 'Password is empty!' . "\n"; } else {
if(!preg_match('/[0-9]/', $JS->lpword) || !preg_match('/[A-Z]/', $JS->lpword)) { echo 'Password must contain at least one digit and uppercase character!' . "\n"; } else { $RDY += 1; } }	
if($JS->fpword !== $JS->lpword) { echo 'Passwords do not match, please repeat your above entered password!' . "\n"; } else { $RDY += 1; }

if($RDY !== 5) { $RDY = 0; echo 'ERROR: Could not register account!' . "\n"; } else {

$CMD = 'INSERT INTO WebAccounts (real_email, real_user, real_pass, real_date) VALUES (?, ? ,? ,?)';

$EMAIL = $JS->email;
$USER = $JS->uname;
$PASS = password_hash($JS->fpword, PASSWORD_DEFAULT);
$DATE = date('Y/m/d h:i:sa');

$EXEC = $CONN->prepare($CMD);
$EXEC->bindParam(1, $EMAIL, PDO::PARAM_STR);
$EXEC->bindParam(2, $USER, PDO::PARAM_STR);
$EXEC->bindParam(3, $PASS, PDO::PARAM_STR);
$EXEC->bindParam(4, $DATE, PDO::PARAM_STR);
$EXEC->execute();

if(!$EXEC) { var_dump($EXEC); } else { echo 'Successfully registered!'; } }
?>