<?php 
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/menu/model/DAOmenu.php");
	// @session_start();
	// if (isset($_SESSION["tiempo"])) {  
	// 	$_SESSION["tiempo"] = time();
	// }
	
    switch ($_GET['op']) {
		case 'list':
				include("module/menu/view/menu.php");
			break;
			
		case 'slider':
            try{
				$daomenu = new DAOmenu();
				$rlt = $daomenu->select_photos();
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
