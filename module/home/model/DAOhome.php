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
	function invoice($name, $price)
	{
		$sql = "INSERT into invoice (user_name, price, date) values ('$name','$price',now())";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function S_cod_invoice()
	{
		$sql = "SELECT cod_invoice FROM invoice order by cod_invoice desc limit 1";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql)->fetch_object();
		connect::close($connection);
		return $res;
	}
	function invoice_line($name, $cod_ref, $units, $price, $cod_invoice)
	{
		$sql = "INSERT into invoice_line (user_name,cod_ref,units,price, date, cod_invoice) values ('$name','$cod_ref','$units','$price',now(),'$cod_invoice')";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function stock($cod_ref,$units)
	{
		$sql = "UPDATE joya set unidades=unidades-'$units' where cod_ref='$cod_ref'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function D_cart($name)
	{
		$sql = "DELETE FROM cart where id='$name'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}

	function U_points($points, $user_name)
	{
		$sql = "UPDATE users set points=(points+'$points') WHERE user_name= '$user_name'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function S_points($user_name)
	{
		$sql = "SELECT points FROM users WHERE user_name= '$user_name'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql)->fetch_object();
		connect::close($connection);
		return $res;
	}
	function I_coupon($user_name,$coupon)
	{
		$sql = "INSERT into coupon values('$user_name','$coupon')";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function rest_points($points, $user_name)
	{
		$sql = "UPDATE users set points=(points-'$points') WHERE user_name= '$user_name'";
		$connection = connect::con();
		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
}
