<?php
$host = "localhost:3306"; /* Host name */
$user = "datasha4_admin"; /* User */
$password = "admin"; /* Password */
$dbname = "datasha4_winelier"; /* Database name */

$connection = mysqli_connect($host, $user, $password, $dbname);
// Check connection
if (!$connection) {
  die("Connection failed: " . mysqli_connect_error());
}
?>