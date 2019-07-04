<?php
include "config.php";

// Enable local development (EXPOSES API)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

$data = json_decode(file_get_contents("php://input"));
$request = $data->request;

ini_set('display_errors', 0);

// Fetch All records
// echo $request
if ($request == 'getUsers') {
  // echo json_encode([
  //   'status' => 'error',
  //   'content' => array('username' => true, 'password' => false)
  // ]);
  // exit;

  if (isset($data->start_limit)) {
    $userData = mysqli_query($connection, "select * from users order by id limit ".$data->start_limit.", ".$data->end_limit);
  } else {
    $userData = mysqli_query($connection, "select * from users order by id limit ".$data->end_limit);
  }

  $response = array();
  while($row = mysqli_fetch_assoc($userData)){
    $response[] = $row;
  }

  echo json_encode([
      'status' => 'success',
      'content' => json_encode($response)
    ]);
  exit;
}

if ($request == 'editUser') {
  $id = $data->id;
  $first_name = $data->first_name;
  $last_name = $data->last_name;
  $email = $data->email;
  $phone = $data->phone;
  $type = $data->type;
  $description = $data->description;

  mysqli_query($connection,"UPDATE users SET first_name='".$first_name."',last_name='".$last_name."',email='".$email."',phone='".$phone."',type='".$type."',description='".$description."' WHERE id=".$id);
 
  echo json_encode([
    'status' => 'success'
  ]);
  exit;
}
?>