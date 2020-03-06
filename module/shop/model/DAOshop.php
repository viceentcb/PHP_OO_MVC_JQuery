<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "model/connect.php");

class DAOshop
{
	function select_all_products()
	{
		$sql = "SELECT * FROM joya ORDER BY views DESC";
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
		$sql = "SELECT * FROM joya WHERE tipo='$type' ORDER BY views DESC";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_filter($checks,$order)
	{
		$sql = "SELECT * FROM joya $checks $order ORDER BY views DESC";
		$conexion = connect::con();
		$res = mysqli_query($conexion, $sql);
		connect::close($conexion);
		return $res;
	}
	function select_maps(){
		$sql = "SELECT * FROM tiendas";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_search($all){
		$sql = "SELECT * FROM joya $all ORDER BY views DESC";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}

	function views($cod_ref)
	{
		$sql = "UPDATE joya set views=(views+1) WHERE cod_ref= '$cod_ref'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}

}
