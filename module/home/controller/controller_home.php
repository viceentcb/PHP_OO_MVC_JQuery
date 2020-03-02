<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/home/model/DAOhome.php");
// @session_start();
// if (isset($_SESSION["tiempo"])) {  
// 	$_SESSION["tiempo"] = time();
// }

switch ($_GET['op']) {
    case 'list':
        include("module/home/view/home.html");
        break;
    case 'val':
        try{
            $daohome = new DAOhome();
            $rlt = $daohome->select_val();
        } catch(Exception $e){
            echo json_encode("error");
        }

        if(!$rlt){
            echo json_encode("error");
        }
        else{
            $dinfo = array();
            foreach ($rlt as $row) {
                array_push($dinfo, $row);
            }
            echo json_encode($dinfo);
        }
        break;
        case 'gif':
            try{
                $daohome = new DAOhome();
                $rlt = $daohome->select_link();
            } catch(Exception $e){
                echo json_encode("error");
            }
    
            if(!$rlt){
                echo json_encode("error");
            }
            else{
                $dinfo = array();
                foreach ($rlt as $row) {
                    array_push($dinfo, $row);
                }
                echo json_encode($dinfo);
            }
            break;
    default:
        include("view/inc/error404.php");
        break;
}
