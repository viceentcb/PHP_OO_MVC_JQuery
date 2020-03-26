<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/login/model/DAOlogin.php");

switch ($_GET['op']) {
    case 'list':
        include("module/login/view/login.html");
        break;
    case 'register':
        try {
            $daologin = new DAOlogin();
            $rlt = $daologin->insert_user();
        }
        catch (Exception $e) {
            echo json_encode("error");
        }
        if(!$rlt){
            echo json_encode("No se ha insertado correctamente");
        }else{
            echo json_encode("ok");
        }
        break;
    default:
        include("view/inc/error404.php");
        break;
}