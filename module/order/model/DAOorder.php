<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
	include($path. "model/connect.php");
    
	class DAOorder{
		function select_order(){
			$sql = "SELECT tipo,nombre,diametro,forma FROM joya";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
	}
