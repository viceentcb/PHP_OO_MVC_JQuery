<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/login/model/daologin.php");
@session_start();

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

    case 'login':
        try {
            $daologin = new DAOlogin();
            $rlt = $daologin->login($_POST['user_name_log']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rlt) {
            echo json_encode('no existe');
        } else {
            $value = get_object_vars($rlt);

            if (password_verify($_POST['password'], $value['password'])) {

                $_SESSION['user_name'] = $value['user_name'];
                $_SESSION['type'] = $value['type'];
                $_SESSION['avatar'] = $value['avatar'];
                $_SESSION['tiempo'] = time();
                // print_r($_SESSION);

                echo json_encode('existe');
            }
        }

        break;
    case 'reg_login':
        try {
            $daologin = new DAOlogin();
            $rlt = $daologin->login($_POST['user_name_reg']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rlt) {
            echo json_encode('no existe');
        } else {
            $value = get_object_vars($rlt);



            if (password_verify($_POST['passw_reg'], $value['password'])) {

                $_SESSION['user_name'] = $value['user_name'];
                $_SESSION['type'] = $value['type'];
                $_SESSION['avatar'] = $value['avatar'];
                $_SESSION['tiempo'] = time();
                // print_r($_SESSION);

                echo json_encode('existe');
            }
        }

        break;

    case 'logout':

        session_unset();
        session_destroy();

        break;

    case 'activity':
        if (!isset($_SESSION["tiempo"])) {
            echo "active";
        } else {
            if ((time() - $_SESSION["tiempo"]) >= 6000000000) {
                echo "inactive";
            } else {
                echo "active";
            }
        }
        break;

    case 'session':
        try {

            $daologin = new DAOLogin();
            $rdo = $daologin->search_session($_SESSION['user_name']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rdo) {
            echo json_encode('noexiste');
        } else {
            $value = get_object_vars($rdo);

            echo json_encode($value);
        }
        break;

        case 'up_ip':
            try {
                $daologin = new DAOLogin();
                $rdo = $daologin->U_update($_POST['ip'], $_POST['id']);
            } catch (Exception $e) {
                echo json_encode("error");
            }
            if (!$rdo) {
                echo json_encode('noexiste');
            } else {
                $value = get_object_vars($rdo);
    
                echo json_encode($value);
            }
            break;

    default:
        include("view/inc/error404.php");
        break;
}
