<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/shop/model/DAOshop.php");
// @session_start();
// if (isset($_SESSION["tiempo"])) {  
// 	$_SESSION["tiempo"] = time();
// }

switch ($_GET['op']) {
    case 'list':
        include("module/shop/view/shop.html");
        break;

    case 'all':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->select_all_products();
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
    case 'detail':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->select_datail($_GET['cod_ref'], $_GET['type']);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if ((!$rlt) && (!$rlt1)) {
            echo json_encode("error");
        } else {
            $dinfo = array();
            foreach ($rlt as $row) {
                array_push($dinfo, $row);
            }
            echo json_encode($dinfo);
        }
        break;
    case 'categoria':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->select_categoria($_GET['type']);
            // $rlt = $daoshop->select_datail($_GET['cod_ref'],$_GET['cod_ref']);

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
    case 'filter':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->select_filter($_GET['checks'], $_GET['order']);
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
    case 'maps':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->select_maps();
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
    case 'search':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->select_search($_GET['all']);
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
    case 'views':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->views($_GET['cod_ref']);
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
