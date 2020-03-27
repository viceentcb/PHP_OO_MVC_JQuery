<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/login/model/daologin.php");

switch ($_GET['op']) {
    case 'list':
        include("module/login/view/login.html");
        break;
    case 'register':
        try {
            $daologin = new DAOlogin();
            $rlt = $daologin->register($_POST['user_name_reg'], $_POST['passw_reg'], $_POST['mail']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rlt) {
            echo json_encode('not correct');
        } else {
            echo json_encode('correct');
        }
        break;
    default:
        include("view/inc/error404.php");
        break;
}
