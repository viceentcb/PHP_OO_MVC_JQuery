<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/contact/model/DAOcontact.php");


switch ($_GET['op']) {
    case 'list':
        include("module/contact/view/contact.html");
        break;
    case 'maps':
        try {
            $daocontact = new DAOcontact();
            $rlt = $daocontact->select_maps();
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo json_encode("error");
        } else {
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
