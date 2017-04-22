<?php
	$resObject= new stdClass();
	$message;
	session_start();

	if(isset($_SESSION['user'])){
		$message= "active";
	}
	else{
		$message= "not_active";
	}

	$resObject->message= $message;

	echo json_encode($resObject);
?>