<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';

switch ($_GET['op']) {
    case 'list':
        include("module/login/view/login.html");
        break;
    case 'register':
        try {

            $daohome = new DAOhome();
            $rlt = $daohome->select_val($_GET['user_name'], $_GET['password'], $_GET['type'], $_GET['mail'], $_GET['avatar']);
            // $opciones = [
            //     'cost' => 12,
            // ];
            // $password =  password_hash($_POST['password'], PASSWORD_BCRYPT, $opciones);
            // $has_avatar=$_POST['email'];
            // $avatar = "https://api.adorable.io/avatars/80/$has_avatar";
            // $daoreg = new DAOLogin();
            // $rst = $daoreg->insert_user($_POST['email'],$_POST['nickname'],$password,$avatar);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rst) {
            echo json_encode("ya existe este usuario");
        } else {
            echo json_encode("ok");
        }
        break;
    default:
        include("view/inc/error404.php");
        break;
}
