<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
include($path . "module/menu/model/DAOmenu.php");

switch ($_GET['op']) {
	case 'list':
		include("module/menu/view/menu.php");
		break;

	case 'slider':
		try {
			$daomenu = new DAOmenu();
			$rlt = $daomenu->select_photos();
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
	case 'type':
		try {
			$daomenu = new DAOmenu();
			$rlt = $daomenu->offer_type($_GET['brand']);
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
	case 'brand':
		try {
			$daomenu = new DAOmenu();
			$rlt = $daomenu->offer_brand($_GET['type']);
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
	case 'autocomplete':
		try {
			$daomenu = new DAOmenu();
			$rlt = $daomenu->autocomplete($_GET['auto']);
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
