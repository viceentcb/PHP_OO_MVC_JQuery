<?php 
	$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
	include($path. "model/connect.php");
    
	class DAOlogin{
		function register($user_name, $pass, $mail){


            $password = password_hash($pass, PASSWORD_DEFAULT);
            $hashavatar= md5( strtolower( trim( $user_name ) ) );
			$avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";


            $sql = "INSERT INTO users (user_name,password,mail,avatar) VALUES('$user_name', '$password', '$mail','$avatar')";

			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);

			return $res;
		}

		function login($user){

			$sql = "SELECT * FROM users WHERE user_name LIKE '$user'"; 

			$connection = connect::con();
			$res = mysqli_query($connection, $sql)->fetch_object();
			connect::close($connection);

			return $res;
		}

		function search_session($user_name){
			$sql= "SELECT * from users where user_name like '$user_name'";
	
			$connection = connect::con();
			$res = mysqli_query($connection, $sql)->fetch_object();
			connect::close($connection);

			return $res;
		}
		function U_update($ip, $name){
			$sql= "UPDATE cart set id='$name' WHERE id= '$ip'";
	
			$connection = connect::con();
			$res = mysqli_query($connection, $sql);
			connect::close($connection);

			return $res;
		}
	
	}
