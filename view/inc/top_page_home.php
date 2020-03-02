<!DOCTYPE html>
<html>

<head>

   
</head>
<body>
    
    <!-- jquery -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src='view/js/jquery-2.2.3.min.js'></script>


      <!--Desplegable-->
      <script src="view/js/bootstrap.min.js"></script>
      <!-- //Desplegable-->
    <script type="text/javascript" src="view/lang/translate.js"></script>

    <script src="module/joyas/model/validate_joyas.js"></script>
    <!-- <script src="module/order/model/order_list.js"></script> -->

    <script src="view/js/easy-responsive-tabs.js"></script>
      <script>
         $(document).ready(function () {
         $('#horizontalTab').easyResponsiveTabs({
         type: 'default', //Types: default, vertical, accordion           
         width: 'auto', //auto or any width like 600px
         fit: true,   // 100% fit in a container
         closed: 'accordion', // Start closed if in accordion view
         activate: function(event) { // Callback function if tab is switched
         var $tab = $(this);
         var $info = $('#tabInfo');
         var $name = $('span', $info);
         $name.text($tab.text());
         $info.show();
         }
         });
         });
          
      </script>
          <script src="module/home/model/home.js"></script>

</body>

</html>