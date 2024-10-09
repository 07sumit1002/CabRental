<?php
error_reporting(0);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "carpool1";
    $conn = mysqli_connect($servername,$username,$password,$dbname);
    // if($conn){
    //   echo "Connected";
    // }
    if($_POST['submit']){
      $name  = $_POST['name'];
      $eml     = $_POST['email'];
      $phn     = $_POST['tel'];
      $loc     = $_POST['location'];
      $tm      = $_POST['time'];
      $dt      = $_POST['date'];
      $query="INSERT INTO ride(nam,email,phone,locat,dat,tim) 
      VALUES('$name','$eml','$phn','$loc','$dt','$tm');";
      $data=mysqli_query($conn,$query);
      if($data){
        echo "<script>alert('Data inserted succesfully')</script>";
        echo"<meta http-equiv = 'refresh' content = '0; url = http://localhost/Project2/Carpool/index.html'>";
      }
      else{
        echo "<script>alert('Data insertion failed')</script>";
      }
    }

?>