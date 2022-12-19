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

    $sql = "show tables";
    $result = $conn->query($sql);
    echo $result;
    mysqli_close($conn);
?>