<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';

switch ($_GET['op']) {
    case 'list':
        include("module/login/view/login.html");
        break;
    case 'register':
        try {

            $daologin = new DAOlogin();
            $rlt = $daologin->insert_user($_POST['user_name_reg'], $_POST['passw_reg'], $_POST['mail']);
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
