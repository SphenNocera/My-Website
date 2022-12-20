<?php
include("index.php");
  if(isset($_POST['fname'])){
    
    $sql = "INSERT INTO MyGuests (firstname)
  VALUES ('Stephen')";
}
else {
echo "error...";
}
?>