<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
	include($path. "model/connect.php");
    
	class DAOcontact{
		function select_maps(){
			$sql = "SELECT * FROM tiendas";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
	}
