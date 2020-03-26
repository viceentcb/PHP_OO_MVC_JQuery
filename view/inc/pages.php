<?php
switch ($_GET['page']) {
	case "controller_home";
		include("module/home/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_shop";
		include("module/shop/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_joyas";
		include("module/joyas/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_order";
		include("module/order/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_menu";
		include("module/menu/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_gallery";
		include("module/gallery/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_aboutus";
		include("module/aboutus/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_services";
		include("module/services/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_contact";
		include("module/contact/controller/" . $_GET['page'] . ".php");
		break;
	case "controller_login";
		include("module/login/controller/" . $_GET['page'] . ".php");
		break;
	case "404";
		include("view/inc/error" . $_GET['page'] . ".php");
		break;
	case "503";
		include("view/inc/error" . $_GET['page'] . ".php");
		break;
	default;
		include("module/home/view/home.html");
		include("module/menu/view/menu.html");
		include("view/inc/top_page_home.php");
		include("view/inc/top_page_menu.php");
		include("view/inc/top_page.php");
		break;
}
