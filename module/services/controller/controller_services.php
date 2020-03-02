<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';

switch ($_GET['op']) {
    case 'list':
        include("module/services/view/services.html");
        break;
    default:
        include("view/inc/error404.php");
        break;
}
