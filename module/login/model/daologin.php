<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
    include($path. "model/connect.php");


    class DAOlogin{
        function insert_user(){
            $name=$_POST['user_name_reg'];
            $pass=$_POST['passw_reg'];
            $mail1= $_POST['mail'];

            $password = password_hash($pass, PASSWORD_DEFAULT);
            $hashavatar= md5( strtolower( trim( $name ) ) );
            $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";

            $sql = "INSERT INTO users VALUES('$name', '$password', $mail1','$avatar')";
            $connection = connect::con();
            $res = mysqli_query($connection, $sql);
            connect::close($connection);
            return $res;

        }
    }