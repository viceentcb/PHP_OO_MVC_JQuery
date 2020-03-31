<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "model/connect.php");

class DAOusers
{
	function list()
	{
		$sql = "SELECT * FROM users";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}

	function reed($user_name)
	{
		$sql = "SELECT * FROM users where user_name like '$user_name'";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql)->fetch_object();
		connect::close($connection);
		return $res;
	}
	function update($user_name, $type)
	{
		$sql = "UPDATE users set type='$type' where user_name like '$user_name'";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function delete($user_name)
	{
		$sql = "DELETE from users where user_name = '$user_name'";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
	function delete_all()
	{
		$sql = "DELETE from users";
		$connection = connect::con();

		$res = mysqli_query($connection, $sql);
		connect::close($connection);
		return $res;
	}
}
