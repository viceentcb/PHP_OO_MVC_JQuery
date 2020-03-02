<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';


switch ($_GET['op']) {
    case 'list':
        include("module/gallery/view/gallery.html");
        break;
    default:
        include("view/inc/error404.php");
        break;
}
