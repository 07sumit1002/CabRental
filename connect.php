<?php
$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "carpool1";
    $conn = mysqli_connect($servername,$username,$password,$dbname);
    if($conn->connect_error){
        echo "Failed to connect DB".$conn->connect_error;
    }
    
    ?>