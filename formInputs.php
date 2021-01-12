<?php 
      //link the configuration php file to connect to the database
      require 'configuration.php';

      //get the input data to new variables as below
      $userName = $_POST["name"];
      $userAge = $_POST["age"];
      $userDOB = $_POST["DOB"];
      $userPhone = $_POST["phone"];
      $userAddress = $_POST["address"];

      //write the query to insert user input data to the database table 
      $sqlQuery = "INSERT INTO userprofile (Name,Age,DOB,Phone,Address) VALUES ('$userName','$userAge','$userDOB','$userPhone','$userAddress')";

      //check whether the query has executed successfully or not
      if($connection -> query($sqlQuery)){
        
        $msgOutput = "Your profile details submited successfully !";
        echo "<br><br><h2>".$msgOutput."</h2>";
      }
      
      else{
        echo "Error: ". $connection -> error;
      }
      
      //close the database connection
      $connection -> close();
      //echo "db closed"; 
?>