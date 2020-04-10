<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/cart/model/DAOcart.php");
@session_start();

$user_name = $_SESSION['user_name'];

switch ($_GET['op']) {
    case 'list':
        include("module/cart/view/cart.html");
        break;

    case 'user':
        echo ($user_name);
        break;

    case 'prods':
        try {
            $daocart = new DAOcart();
            $rlt = $daocart->products($_POST['id']);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo json_encode("error1");
        } else {
            $dinfo = array();
            foreach ($rlt as $row) {
                array_push($dinfo, $row);
            }
            echo json_encode($dinfo);
        }
        break;

    case 'price':
        foreach ($_POST as $cod_ref => $valor) {
        }
        try {
            $daocart = new DAOcart();
            $rlt = $daocart->precio($cod_ref);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo json_encode("error1");
        } else {
            echo json_encode($rlt);
        }
        break;
    case 'delete_prod':
        try {
            $daocart = new DAOcart();
            $rlt = $daocart->del_prod($_POST['cod_ref'], $_POST['id']);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo json_encode("error1");
        } else {
            echo json_encode("borrado");
        }
        break;
    case 'delete_all':
        try {
            $daocart = new DAOcart();
            $rlt = $daocart->del_all($_POST['id']);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo json_encode("error1");
        } else {
            echo json_encode("borrado");
        }
        break;
    case 'cod_ref':
        try {
            $daocart = new DAOcart();
            $rlt = $daocart->S_cod_ref($_POST['nom']);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo json_encode("error1");
        } else {
            echo json_encode($rlt);
        }
        break;

    case 'cart':
        ///guarda  los productos en $_SESSION
        $_SESSION['cart'] = $_POST['cart'];
        // echo json_encode($_SESSION['cart']);
        break;
    default:
        include("view/inc/error404.php");
        break;
}
