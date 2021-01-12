<?php 

	//create a connection variable to refer db in the program
	$connection = new mysqli('localhost','root','', 'onlinemealcartdb');

	//check connection
	if($connection -> connect_error){
		die('database connection failed: '. $connection -> connect_error);
	}
	else{
		//echo "db connected successfully";
	}

 ?>