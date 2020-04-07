<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "model/connect.php");

class DAOcart
{
	function products($id)
	{
		$sql = "SELECT * FROM joya where cod_ref in (SELECT cod_ref FROM cart where id='$id')";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function precio($cod_ref)
	{
		$sql = "SELECT precio FROM joya where cod_ref = '$cod_ref'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql)->fetch_object();
		connect::close($connection);
		return $res;
	}
	function del_prod($cod_ref, $id)
	{
		$sql = "DELETE FROM cart where cod_ref = '$cod_ref' and id ='$id'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function del_all($id)
	{
		$sql = "DELETE FROM cart where id ='$id'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
}
