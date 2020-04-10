<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/home/model/DAOhome.php");
@session_start();
// if (isset($_SESSION["tiempo"])) {  
// 	$_SESSION["tiempo"] = time();
// }

switch ($_GET['op']) {
    case 'list':
        include("module/home/view/home.html");
        break;
    case 'val':
        try {
            $daohome = new DAOhome();
            $rlt = $daohome->select_val($_GET['limit']);
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
    case 'gif':
        try {
            $daohome = new DAOhome();
            $rlt = $daohome->select_link();
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
            $daohome = new DAOhome();
            $rlt = $daohome->views($_GET['cod_ref']);
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
    case 'cart':
        //recogemos la array
        $array = $_POST['array'];

        ////HEMOS CREADO 2 TRIGGERS QUE TE GUARDA UN HISTORIAL DE FACTURAS Y UN HISTORIAL DE LAS LINEAS DE FACTURA 
        
        try {
            $daohome = new DAOhome();

            //le decimos lo que tiene que insertar en la tabla de faturas que seria el nombre del usuario y el precio total
            //ademas de la fecha en el dao
            //sabemos que el nombre siempre estara en la posicion tres y el precio total en la 4 porque asi se lo pasamos en el js
            //y le ponemos 0 porque siempre existira la primera posicion
            $rlt = $daohome->invoice($array[0][3], $array[0][4]);

            //seleccionamos el ultimo codigo de factura añadido a la tabla facturas y obtenemos su valor
            $cod_invoice = $daohome->S_cod_invoice();
            foreach ($cod_invoice as $ray => $valor) {
            }

            ///hacemos un foreach de los porductos del array
            //y le pasamos el nombre, aunque tambien pordria ser $row[3] pero como siempre es el mismo nombre daria igual
            //el codigo de referencia del producto ya que siempre esta en la posicion 0 porque asi se lo pasamos en js
            //las unidades del producto, el precio unitario del producto con la misma estructura que lo anterior
            ///y tambien el codigo de la factura
            //ademas de la fecha en el dao
            // y ademas de restarle el stock al producto
            // y tambien borramos los productos del usuario de la tabla de carrito

            foreach ($array as $row) {
                $rst = $daohome->invoice_line($array[0][3], $row[0], $row[1], $row[2], $valor);
                $rdo = $daohome->stock($row[0], $row[1]);
                $rslt=$daohome->D_cart($array[0][3]);
            }
            
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt || !$rst || !$rdo || !$rslt) {
            echo json_encode("error");
        } else {

            ///y le borramos tambien el $_SESSION de esta compra
            session_unset($_SESSION['cart']);
            echo json_encode('todo correcto');
        }

        break;
    default:
        include("view/inc/error404.php");
        break;
}
