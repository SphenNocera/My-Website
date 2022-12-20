<?php
include("index.php");
  if(isset($_POST['fname'])){
    
    $sql = "INSERT INTO myGuests (firstname)
  VALUES ('Stephen')";
}
else {
echo "error...";
}
?>