<?php
include("index.php");
  if(isset($_POST['fname'])){
    
    $sql = "INSERT INTO myGuests (firstname)
  VALUES $_POST['fname']";
}
else {
echo "error...";
}
?>