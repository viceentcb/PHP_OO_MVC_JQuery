<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/users/model/DAOusers.php");



switch ($_GET['op']) {

    case 'list':
        include("module/users/view/list_users.html");
        break;

    case 'user':
        try {
            $daousers = new DAOusers();
            $rlt = $daousers->list();
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rlt) {
            echo json_encode('error');
        } else {

            $dinfo = array();
            foreach ($rlt as $row) {
                array_push($dinfo, $row);
            }
            echo json_encode($dinfo);
        }
        break;

    case 'reed':


        try {
            $daousers = new DAOusers();
            $rlt = $daousers->reed($_POST['valor1']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rlt) {
            echo ("error_rlt");
        } else {

            $value = get_object_vars($rlt);

            echo json_encode($rlt);
        }
        break;

    case 'update':
        try {
            $daousers = new DAOusers();
            $rlt = $daousers->update($_POST['valor1'], $_POST['valor2']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rlt) {
            echo ("error_rlt");
        } else {

            echo ("UPDA");
        }
        break;
    case 'delete':
        try {
            $daousers = new DAOusers();
            $rlt = $daousers->delete($_POST['valor1']);
        } catch (Exception $e) {
            echo json_encode("error");
        }
        if (!$rlt) {
            echo ("error_rlt");
        } else {

            echo ("DEL");
        }
        break;
        case 'delete_all':
            try {
                $daousers = new DAOusers();
                $rlt = $daousers->delete_all();
            } catch (Exception $e) {
                echo json_encode("error");
            }
            if (!$rlt) {
                echo ("error_rlt");
            } else {
    
                echo ("DEL");
            }
            break;

    default:
        include("view/inc/error404.php");
        break;
}
