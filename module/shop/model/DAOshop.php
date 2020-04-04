<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "model/connect.php");

class DAOshop
{
	function count_pords()
	{
		$sql = "SELECT count(*) as total FROM joya";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_all_products($number)
	{
		$sql = "SELECT *FROM joya ORDER BY views DESC limit $number , 3";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_datail($cod_ref, $type)
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
	function select_filter($checks, $order)
	{
		$sql = "SELECT * FROM joya $checks $order ORDER BY views DESC";
		$conexion = connect::con();
		$res = mysqli_query($conexion, $sql);
		connect::close($conexion);
		return $res;
	}
	function select_maps()
	{
		$sql = "SELECT distinct t.tienda, t.lat, t.lng
		FROM tiendas t, joya j, prod_tienda p
		WHERE t.cod_tienda=p.cod_tienda AND j.cod_ref=p.cod_ref";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function desc_maps($lat, $lng)
	{
		$sql = "SELECT j.descripcion
				FROM tiendas t, joya j, prod_tienda p
				WHERE t.cod_tienda=p.cod_tienda AND j.cod_ref=p.cod_ref AND t.lat='$lat' and t.lng='$lng' ";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function select_search($all)
	{
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

	function insert_favorite($cod_ref, $user_name)
	{
		$sql = "INSERT INTO likes VALUES('$cod_ref', '$user_name')";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function delete_favorite($cod_ref, $user_name)
	{
		$sql = "DELETE FROM likes where cod_ref='$cod_ref' and user_name= '$user_name'";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function show_likes($user_name)
	{
		$sql = "SELECT * FROM likes where user_name= '$user_name'";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function cart($cod_ref, $id)
	{
		$sql = "INSERT INTO cart values('$cod_ref', '$id')";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
}
