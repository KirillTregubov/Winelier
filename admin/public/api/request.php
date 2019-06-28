<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;

ini_set('display_errors', 0);

// Fetch All records
if ($request == 'getUsers') {
  // echo json_encode([
  //   'status' => 'error',
  //   'content' => array('username' => true, 'password' => false)
  // ]);
  $userData = mysqli_query($connection, "select * from users order by id desc");

  $response = array();
  while($row = mysqli_fetch_assoc($userData)){
    $response[] = $row;
  }

  echo json_encode([
      'status' => 'success',
      'content' => $response
    ]);
  exit;
}

?>