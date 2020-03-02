<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "model/connect.php");

class DAOshop
{
	function select_all_products()
	{
		$sql = "SELECT * FROM joya";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_datail($cod_ref,$type)
	{
		$sql = "SELECT * FROM joya WHERE cod_ref='$cod_ref' UNION SELECT * FROM joya WHERE tipo='$type' AND cod_ref<>'$cod_ref'";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_categoria($type)
	{
		$sql = "SELECT * FROM joya WHERE tipo='$type'";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_filter($checks,$order)
	{
		$sql = "SELECT * FROM joya $checks $order";
		$conexion = connect::con();
		$res = mysqli_query($conexion, $sql);
		connect::close($conexion);
		return $res;
	}
	function select_maps(){
		$sql = "SELECT * FROM maps";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}


	// function select_product($cref){
	// 	$sql = "SELECT cref,brand,model,price,size,img,description FROM shoes WHERE cref='$cref'";
	// 	$connection = connect::con();

	// 	$res = mysqli_query($connection, $sql)->fetch_object();
	// 	connect::close($connection);
	// 	return $res;
	// }
}
