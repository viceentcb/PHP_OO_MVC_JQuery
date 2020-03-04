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
		function offer_type($brand){
			$sql = "SELECT distinct tipo FROM joya $brand";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function offer_brand($type){
			$sql = "SELECT distinct marca FROM joya $type";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
		function autocomplete($auto){
			$sql = "SELECT *  FROM joya $auto";
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);
			return $res;
		}
	}
