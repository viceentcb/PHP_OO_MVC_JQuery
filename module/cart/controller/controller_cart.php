<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/cart/model/DAOcart.php");

switch ($_GET['op']) {
    case 'list':
        include("module/cart/view/cart.html");
        break;

        // case 'prods':
        //     try {
        //         $daocart = new DAOcart();
        //         $rlt = $daocart->products($_POST['prods']);
        //     } catch (Exception $e) {
        //         echo json_encode("error");
        //     }
    
        //     if (!$rlt) {
        //         echo json_encode("error1");
        //     } else {
        //         $dinfo = array();
        //         foreach ($rlt as $row) {
        //             array_push($dinfo, $row);
        //         }
        //         echo json_encode($dinfo);
        //     }
        //     break;
    default:
        include("view/inc/error404.php");
        break;
}
