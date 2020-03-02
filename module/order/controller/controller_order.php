<?php 
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/order/model/DAOorder.php");
	// @session_start();
	// if (isset($_SESSION["tiempo"])) {  
	// 	$_SESSION["tiempo"] = time();
	// }
	
    switch ($_GET['op']) {
		case 'list':
				include("module/order/view/order_list.php");
			break;
			
		case 'datatable':
            try{
				$daoorder = new DAOorder();
				$rlt = $daoorder->select_order();
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
