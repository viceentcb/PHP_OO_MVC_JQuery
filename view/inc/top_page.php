<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Joyas </title>
    <link href="view/css/style.css" rel="stylesheet" type="text/css" />


    <!-- jquery -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.css" />
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <!-- <script src='view/js/jquery-2.2.3.min.js'></script> -->

    <script src="view/js/responsiveslides.min.js"></script>
      <script>
         // You can also use "$(window).load(function() {"
         $(function () {
         	// Slideshow 4
         	$("#slider4").responsiveSlides({
         		auto: true,
         		pager:false,
         		nav:true ,
         		speed: 900,
         		namespace: "callbacks",
         		before: function () {
         			$('.events').append("<li>before event fired.</li>");
         		},
         		after: function () {
         			$('.events').append("<li>after event fired.</li>");
         		}
         	});
         
         });
      </script>
      <!--Desplegable-->
      <script src="view/js/bootstrap.min.js"></script>
      <!-- //Desplegable-->
    <script type="text/javascript" src="view/lang/translate.js"></script>

    <script src="module/joyas/model/validate_joyas.js"></script>
    <!-- <script src="module/order/model/order_list.js"></script> -->


</head>



</html>