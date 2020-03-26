<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
    include($path. "model/connect.php");


    class DAOlogin{
        function insert_user($user_name_reg, $passw_reg, $mail){

            $password = password_hash($passw_reg, PASSWORD_DEFAULT);
            $hashavatar= md5( strtolower( trim( $user_name_reg ) ) );
            $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";

            $sql = "INSERT INTO users VALUES('$user_name_reg', '$password', $mail','$avatar')";
            $connection = connect::con();
            $res = mysqli_query($connection, $sql);
            connect::close($connection);
            return $res;

        }
    }