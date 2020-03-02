
$(document).ready(function () {
    $('#table_joyas').DataTable()
    console.log("modal");
    $('.Button_blue').on("click", function () {
        var id = this.getAttribute('id');
        // alert(id);

        $.ajax({
            type: "GET",
            url: "module/joyas/controller/controller_joyas.php?op=read&modal=" + id,

            // $.get("module/joyas/controller/controller_joyas.php?op=read&modal=" + id,
           success: function(data) {
                // console.log(data);

                var json = JSON.parse(data);
                //     console.log(json);

                if (json === 'error') {
                    //console.log(json);
                    //pintar 503
                    window.location.href = 'index.php?page=503';
                } else {
                    // console.log(json.user);
                    $("#cod_ref").html(json.cod_ref);
                    $("#tipo").html(json.tipo);
                    $("#nombre").html(json.nombre);
                    $("#oro").html(json.oro);
                    $("#gema").html(json.gema);
                    $("#diametro").html(json.diametro);
                    $("#forma").html(json.forma);

                    $("#details_joyas").show();
                    $("#joyas_modal").dialog({
                        width: 850, //<!-- ------------- ancho de la ventana -->
                        height: 500, //<!--  ------------- altura de la ventana -->
                        //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
                        //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
                        resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
                        //position: "down",<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
                        modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
                        buttons: {
                            Ok: function () {
                                $(this).dialog("close");
                            }
                        },
                        show: {
                            effect: "blind",
                            duration: 1000
                        },
                        hide: {
                            effect: "explode",
                            duration: 1000
                        }
                    });

                }//end-else
            }//ens_succes
        });

    });
});
