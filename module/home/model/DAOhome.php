<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
	include($path. "model/connect.php");
    
	class DAOhome{
		function select_val(){
			$sql = "SELECT cod_ref, nombre,tipo,route, marca FROM joya ORDER BY val DESC LIMIT 6";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
	
	function select_link(){
		$sql = "SELECT * FROM gif";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
}
