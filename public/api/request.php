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
  $page = $data->page;

  if ($page == 'winery-page') {
    $name = $data->params;

    $userData = mysqli_query($connection, "SELECT * FROM wineries WHERE name = '".$name."'");
    $response = mysqli_fetch_assoc($userData);
  
    if ($userData->num_rows == 1) {
      echo json_encode([
        'status' => 'success',
        'data' => json_encode($response)
      ]);
    } else {
      echo json_encode([
        'status' => 'database error',
        'req' => "SELECT * FROM wineries WHERE name = '".$name."'"
      ]);
    }
  } else {
    $userData = mysqli_query($connection, "SELECT * FROM meta_tags WHERE page = '".$page."'");
    $response = mysqli_fetch_assoc($userData);
  
    if ($userData->num_rows == 1) {
      echo json_encode([
        'status' => 'success',
        'data' => json_encode($response)
      ]);
    } else {
      echo json_encode([
        'status' => 'database error',
        'req' => "SELECT * FROM meta_tags WHERE page = '".$page."'"
      ]);
    }
  }
  exit;
}

if ($request == 'getRow') {
  $table = $data->table;
  $name = $data->name;

  $userData = mysqli_query($connection, "SELECT * FROM ".$table." WHERE name = '".$name."' LIMIT 1");
  $response = mysqli_fetch_assoc($userData);

  if ($userData->num_rows == 1) {
    if ($table == 'wineries') {
      $userData2 = mysqli_query($connection, "SELECT uploaded_images.filename, uploaded_images.alt FROM uploaded_images, winery_images WHERE uploaded_images.id = winery_images.image_id AND winery_images.winery_id = ".$response["id"]);
      $response2 = array();
      while($row = mysqli_fetch_assoc($userData2)){
          $response2[] = $row;
      }
      echo json_encode([
        'status' => 'success',
        'content' => json_encode($response),
        'images' => json_encode($response2)
      ]);
    } else {
      echo json_encode([
        'status' => 'success',
        'content' => json_encode($response)
      ]);
    }
  } else {
    echo json_encode([
      'status' => 'error'
    ]);
  }
  exit;
}
?>