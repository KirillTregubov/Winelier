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

if ($request == 'startEdit') {
  $table = $data->table;
  $id = $data->id;

  $userData = mysqli_query($connection,"SELECT * FROM ".$table." WHERE id = ".$id);
  $response = mysqli_fetch_assoc($userData);

  if ($response['is_being_edited'] == "0") {
    $userData = mysqli_query($connection,"UPDATE ".$table." SET is_being_edited='1' WHERE id = ".$id);

    if (mysqli_affected_rows($connection) == 1 ) {
      // get newsletter, winery managed, article count

      echo json_encode([
        'status' => 'success',
        'content' => json_encode($response)
      ]);
    } else {
      echo json_encode([
        'status' => 'error'
      ]);
    }
  } else {
    echo json_encode([
      'status' => 'editing'
    ]);
  }
  exit;
}

if ($request == 'startDelete') {
  $table = $data->table;
  $id = $data->id;

  $userData = mysqli_query($connection,"SELECT * FROM ".$table." WHERE id = ".$id);
  $response = mysqli_fetch_assoc($userData);

  if ($response['is_being_edited'] == "0") {
    $userData = mysqli_query($connection,"DELETE FROM ".$table." WHERE id = ".$id);

    if (mysqli_affected_rows($connection) == 1 ) {
      echo json_encode([
        'status' => 'success'
      ]);
    } else {
      echo json_encode([
        'status' => 'error'
      ]);
    }
  } else {
    echo json_encode([
      'status' => 'editing'
    ]);
  }
  exit;
}

if ($request == 'getRowAmount') {
  $table = $data->table;
  if ($data->filter) $table .= " WHERE ".$data->filter;

  $userData = mysqli_query($connection, "SELECT COUNT(1) FROM ".$table);
  $row = mysqli_fetch_array($userData);
  $response = $row[0];

  echo json_encode([
      'status' => 'success',
      'content' => $response
    ]);
  exit;
}

if ($request == 'getRows') {
  $table = $data->table;
  $index = $data->index;
  $amount = $data->amount;
  if ($data->filter) $table .= " WHERE ".$data->filter;

  // if (isset($data->start_limit))
  $userData = mysqli_query($connection, "SELECT * FROM ".$table." ORDER BY id LIMIT ".$index.", ".$amount);
  $response = array();
  while($row = mysqli_fetch_assoc($userData)){
    // get newsletter, winery managed, article count
    $response[] = $row;
  }

  echo json_encode([
      'status' => 'success',
      'content' => json_encode($response)
    ]);
  exit;
}

// if ($request == 'getUser') {
//   $userData = mysqli_query($connection, "SELECT * FROM users WHERE id = ".$data->id);
//   $response = mysqli_fetch_assoc($userData);

//   echo json_encode([
//       'status' => 'success',
//       'content' => json_encode($response)
//     ]);
//   exit;
// }

if ($request == 'updateUser') {
  $id = $data->id;
  $first_name = $data->first_name;
  $last_name = $data->last_name;
  $email = $data->email;
  $phone = $data->phone;
  $password = $data->password;
  $type = $data->type;
  $description = $data->description;

  $condition = '';
  if ($phone != null) {
    $condition .= ",phone='".$phone."'";
  }
  if ($password != null) {
    $condition .= ",password='".md5($password)."'";
  }
  if ($description != null) {
    $condition .= ",description='".$description."'";
  }

  mysqli_query($connection,"UPDATE users SET first_name='".$first_name."',last_name='".$last_name."',email='".$email."',type='".$type."'".$condition.",is_being_edited='0' WHERE id=".$id);
  if (mysqli_affected_rows($connection) == 1) {
    echo json_encode([
      'status' => 'success',
      'content' => $condition
    ]);
  } else {
    echo json_encode([
      'status' => 'error'
    ]);
  }
  exit;
}

if ($request == 'createUser') {
  $first_name = $data->first_name;
  $last_name = $data->last_name;
  $email = $data->email;
  $phone = $data->phone;
  $password = md5($data->password);
  $type = $data->type;
  $description = $data->description;

  $userData = mysqli_query($connection,"SELECT * FROM users WHERE email='".$email."'");
  if(mysqli_num_rows($userData) == 0){
    mysqli_query($connection,"INSERT INTO users(first_name,last_name,email,phone,password,is_verified,type,description) VALUES('".$first_name."','".$last_name."','".$email."','".$phone."','".$password."',1,'".$type."','".$description."')");
    
    if (mysqli_affected_rows($connection) == 1) {
      echo json_encode([
        'status' => 'success'
      ]);
    } else {
      echo json_encode([
        'status' => 'error'
      ]);
    }
  } else {
    echo json_encode([
      'status' => 'email'
    ]);
  }
  exit;
}
?>