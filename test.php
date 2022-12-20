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

    //if(isset($_POST['fname'])){
        $fname = $_POST['fname'];
        $sql = "INSERT INTO `MyGuests` (`id`, `firstname`, `lastname`, `email`, `reg_date`) VALUES (NULL, '$fname', '', NULL, current_timestamp())";
    //}
    //else {
    //echo "error...";
    //}

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
      }

mysqli_close($conn);
?>