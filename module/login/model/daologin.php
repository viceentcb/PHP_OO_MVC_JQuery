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
	
	}
