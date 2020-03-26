<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
    include($path. "model/connect.php");


    class DAOlogin{
        function insert_joyas($user_name, $pass, $type, $mail, $avatar){


            $sql = "INSERT INTO users VALUES('$user_name', '$pass','$type','$mail','$avatar')";
            $connection = connect::con();
            $res = mysqli_query($connection, $sql);
            connect::close($connection);
            return $res;

        }
    }