<?php

if ((isset($_GET['page'])) && ($_GET['page'] === "controller_joyas")) {
	include("view/inc/top_page_joyas.php");
	include("view/inc/top_page_menu.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_order")) {
	include("view/inc/top_page_order.php");
	include("view/inc/top_page_menu.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_gallery")) {
	include("view/inc/top_page_gallery.php");
	include("view/inc/top_page_menu.php");
	include("view/inc/top_page.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_home")) {
	include("view/inc/top_page_home.php");
	include("view/inc/top_page_menu.php");
	include("view/inc/top_page.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_aboutus")) {
	include("view/inc/top_page_aboutus.php");
	include("view/inc/top_page_menu.php");
	include("view/inc/top_page.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_contact")) {
	include("view/inc/top_page_contact.php");
	include("view/inc/top_page_menu.php");
	include("view/inc/top_page.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_services")) {
	include("view/inc/top_page_services.php");
	include("view/inc/top_page_menu.php");
	include("view/inc/top_page.php");
} else if ((isset($_GET['page'])) && ($_GET['page'] === "controller_shop")) {
	include("view/inc/top_page_shop.php");
	include("view/inc/top_page_menu.php");
	include("view/inc/top_page.php");
} else {
	include("view/inc/top_page_menu.php");
	include("view/inc/top_page.php");
}
session_start();
?>
<?php
include("module/menu/view/menu.php");
?>
<?php
include("view/inc/pages.php");
?>
<br style="clear:both;" />
<?php
include("view/inc/footer.php");
?>
<?php
include("view/inc/bottom_page.php");
?>