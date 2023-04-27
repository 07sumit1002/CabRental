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
        $loc     = $_POST['search'];
        $tm      = $_POST['tim'];
        $dt      = $_POST['dat'];
        $query="INSERT INTO anoni(locat,dat,tim) 
        VALUES('$loc','$dt','$tm');";
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