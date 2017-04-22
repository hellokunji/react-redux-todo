<?php
	$resObject= new stdClass();
	$message;
	session_start();

	$id= $_POST['id'];

	$_SESSION['user']= $id;

	if(isset($_SESSION['user'])){
		$message= "no_error";
	}
	else{
		$message= "error";
	}

	$resObject->message= $message;

	echo json_encode($resObject);
?>