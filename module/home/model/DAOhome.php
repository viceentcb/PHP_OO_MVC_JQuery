<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "model/connect.php");

class DAOhome
{
	function select_val($limit)
	{
		$sql = "SELECT cod_ref, nombre,tipo,route, marca FROM joya ORDER BY views DESC LIMIT $limit";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}

	function select_link()
	{
		$sql = "SELECT * FROM gif";
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
