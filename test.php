<?php

    $servername = 'localhost';
    $database = "u392305125_locate";
    $username = 'u392305125_sphen';
    $password = 'Bienvenue2!';

    $conn = mysqli_connect($servername, $username, $password, $database);

    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully";

    $sql = "SELECT id, firstname, lastname FROM MyGuests";
    $result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}

mysqli_close($conn);
?>