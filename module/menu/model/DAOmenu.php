<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
	include($path. "model/connect.php");
    
	class DAOmenu{
		function select_photos(){
			$sql = "SELECT route FROM photos";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
	}
