<?php
include "config.php";

// Enable local development (EXPOSES API)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = json_decode(file_get_contents("php://input"));
$request = $data->request;

ini_set('display_errors', 0);
mysqli_query($connection,"SET time_zone='+00:00'");

if ($request == 'getMeta') {
  echo json_encode([
    'title' => 'Title',
    'tags' => json_encode(array(['description' => 'Description']))
  ]);
  exit;
}

if ($request == 'getRow') {
  $table = $data->table;
  $name = $data->name;

  $userData = mysqli_query($connection, "SELECT * FROM ".$table." WHERE name = '".$name."' LIMIT 1");
  $response = mysqli_fetch_assoc($userData);

  if ($userData->num_rows === 1) {
    echo json_encode([
      'status' => 'success',
      'content' => json_encode($response)
    ]);
  } else {
    echo json_encode([
      'status' => 'error'
    ]);
  }
  exit;
}
?>