<?php
// session_start();
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/joyas/model/DAOjoyas.php");


switch ($_GET['op']) {
    case 'list';
        //print_r("entra");
        //die();
        try {
            // print_r("entra try");
            //                 die();
            $daojoyas = new DAOjoyas();
            // print_r($daojoyas);
            $rdo = $daojoyas->select_all_joyas();
            // print_r($rdo);
        } catch (Exception $e) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        }

        if (!$rdo) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        } else {
            include("module/joyas/view/list_joyas.php");
        }
        break;

    case 'create':
        include("module/joyas/model/validate.php");

        $check = true;
        if ($_POST) {
            // print_r($_POST);
            // die();
            // $check = validate($_POST['cod_ref']);
            if ($check) {
                // print_r("entra check");
                // die();
                // $_SESSION['prod']=$_POST;
                try {
                    $daojoyas = new DAOjoyas();
                    $rdo = $daojoyas->insert_joyas($_POST);
                    // print_r("rdo");
                    print_r($rdo);
                    // die();
                } catch (Exception $e) {
                    print_r("catch");
                    die();
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }

                if ($rdo) {
                    echo '<script language="javascript">alert("Producto creado en la base de datos correctamente")</script>';
                    $callback = 'index.php?page=controller_joyas&op=list';
                    die('<script>window.location.href="' . $callback . '";</script>');
                } else {
                    print_r("else");
                    die();
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }
            } else
                // echo('<script language="javascript">alert("El codigo de referencia ya esta en uso.")</script>');
                // //  $callback = 'index.php?page=controller_joyas&op=create';
                // die('<script>window.location.href="'.$callback .'";</script>');
                $error_cod = "Este codigo ya está en uso.";
        }
        include("module/joyas/view/create_joyas.php");
        break;



    case 'update';
        include("module/joyas/model/validate.php");
        // print_r("entra update");
        // die();
        $check = true;
        // print_r("ppasa chek");
        // die();
        if ($_POST) {
            //$check=validate();
            // print_r($_POST);
            // die();
            if ($check) {
                // print_r("entra check");
                // die();
                $_SESSION['cod_ref'] = $_POST;
                try {
                    $daojoyas = new DAOjoyas();
                    $rdo = $daojoyas->update_joyas($_POST);
                } catch (Exception $e) {
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }

                if ($rdo) {
                    echo '<script language="javascript">alert("Actualizado en la base de datos correctamente")</script>';
                    $callback = 'index.php?page=controller_joyas&op=list';
                    die('<script>window.location.href="' . $callback . '";</script>');
                } else {
                    $callback = 'index.php?page=503';
                    die('<script>window.location.href="' . $callback . '";</script>');
                }
            }
        }

        try {
            $daojoyas = new DAOjoyas();
            $rdo = $daojoyas->select_joyas($_GET['cod_ref']);
            $joyas = get_object_vars($rdo);
        } catch (Exception $e) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        }

        if (!$rdo) {
            $callback = 'index.php?page=503';
            die('<script>window.location.href="' . $callback . '";</script>');
        } else {
            include("module/joyas/view/update_joyas.php");
        }
        break;

        // case 'read';
        //     // print_r("entra read");
        //     try {
        //         // print_r("entra try");

        //         $daojoyas = new DAOjoyas();
        //         // print_r("luego dao");

        //         $rdo = $daojoyas->select_joyas($_GET['cod_ref']);
        //         // print_r("rdo");

        //         $joyas = get_object_vars($rdo);
        //     } catch (Exception $e) {
        //         $callback = 'index.php?page=503';
        //         die('<script>window.location.href="' . $callback . '";</script>');
        //     }
        //     if (!$rdo) {
        //         $callback = 'index.php?page=503';
        //         die('<script>window.location.href="' . $callback . '";</script>');
        //     } else {
        //         include("module/joyas/view/read_joyas.php");
        //     }
        //     break;

    case 'read';
        // print_r("entra");
        // echo ($_GET['modal']);
        // exit;

        try {
            $daojoyas = new DAOjoyas();
            $rdo = $daojoyas->select_joyas($_GET['modal']);
        } catch (Exception $e) {
            echo json_encode("error");
            exit;
        }
        if (!$rdo) {
            echo json_encode("error");
            exit;
        } else {
            $joyas = get_object_vars($rdo);
            echo json_encode($joyas);
            //echo json_encode("error");
            exit;
        }
        break;

    case 'delete';
        $daojoyas = new DAOjoyas();
        if ($_POST) {
            try {

                $rdo = $daojoyas->delete_joyas($_GET['cod_ref']);
            } catch (Exception $e) {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }

            if ($rdo) {
                echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
                $callback = 'index.php?page=controller_joyas&op=list';
                die('<script>window.location.href="' . $callback . '";</script>');
            } else {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }
        }
        $rdo = $daojoyas->select_joyas($_GET['cod_ref']);
        $joyas = get_object_vars($rdo);

        include("module/joyas/view/delete_joyas.php");
        break;

    case 'deleteall';
        // print_r("entra delete all");
        // die(); 
        if ($_POST) {
            // print_r("entra delete all");
            //     die(); 
            try {
                //                print_r("entra delete all");
                // die(); 
                $daojoyas = new DAOjoyas();
                // print_r("entra delete all");
                // die(); 
                $rdo = $daojoyas->delete_all_joyas();
                // print_r("entra delete all");
                // die(); 
            } catch (Exception $e) {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }
            //           print_r("entra delete all");
            // die(); 
            if ($rdo) {
                echo '<script language="javascript">alert("Todos los productos borrados correctamente")</script>';
                $callback = 'index.php?page=controller_joyas&op=list';
                die('<script>window.location.href="' . $callback . '";</script>');
            } else {
                $callback = 'index.php?page=503';
                die('<script>window.location.href="' . $callback . '";</script>');
            }
        }
        include("module/joyas/view/delete_all_joyas.php");
        break;

        default;
        include("view/inc/error404.php");
        break;
}
