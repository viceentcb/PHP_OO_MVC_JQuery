<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/shop/model/DAOshop.php");
@session_start();

//como este session lo vamos a utilizar varias veces lo igualamos a una variable
$user_name = $_SESSION['user_name'];


switch ($_GET['op']) {
    case 'list':
        include("module/shop/view/shop.html");
        break;

    case 'all':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->select_all_products($_GET['number']);
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
    case 'count_pords':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->count_pords();
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
    case 'desc_maps':
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->desc_maps($_GET['lat'], $_GET['lng']);
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

        ///aqui le pasamos al js el nombre del usuario conectado
    case 'user':
        echo ($user_name);
        break;

        ///insertamos favoritos
    case 'favorite':
        // print_r($_POST); 

        //esto lo hago para poder ver el contenido del codigo del producto
        //que le paso por js ya que llega el dato como si fuera un campo y no un valor
        foreach ($_POST as $cod_prod => $valor) {
        }
        try {
            $daoshop = new DAOshop();
            //y aqui le pasamos el codigo del producto y el nombre del usuario para insertarlo en la tabla
            $rlt = $daoshop->insert_favorite($cod_prod, $user_name);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        //aqui entrara si el producto ya existe
        //ya que en la base de datos el id del producto y el nombre del usuario que tambien es un id
        //son los dos claves primaria en la base de favoritos
        //entonces no se puede insertar dos veces
        if (!$rlt) {
            echo ("ya es favorito");
        } else {
            echo ("todo correcto (like)");
        }
        break;

        ///borrar favoritos
    case 'del_favorite':
        // print_r($_POST); 
        //volvemos a obtener el contenido
        foreach ($_POST as $cod_prod => $valor) {
        }
        try {
            $daoshop = new DAOshop();
            //borramos el contenido dandole el nombre de usuario y el codigo del producto
            $rlt = $daoshop->delete_favorite($cod_prod, $user_name);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo ("error");
        } else {
            echo ("todo correcto (not like)");
        }
        break;

        //observamos los favoritos
    case 'show_likes':
        try {
            $daoshop = new DAOshop();
            //le pasamos el nombre del usuario que hay en este momento para ver los favoritos
            $rlt = $daoshop->show_likes($user_name);
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
        ///guarda  los productos en $_SESSION
        $_SESSION['products'] = $_POST['prods'];
        break;
        
    case 'insert_cart':
        //vemos en que producto ha clickado
        foreach ($_POST as $cod_prod => $valor) {
        }

        //le decimos al dao que lo inserte en la tabla que te he explicado en el correo
        try {
            $daoshop = new DAOshop();
            $rlt = $daoshop->cart($cod_prod);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!$rlt) {
            echo ("no insertado");
        } else {
            echo ("todo correcto");
        }
        break;

    default:
        include("view/inc/error404.php");
        break;
}
