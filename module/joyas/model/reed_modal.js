$(document).ready(function () {
    $('#table_joyas').DataTable()
    // console.log("modal");
    $('body').on("click", ".Button_blue", function () {
        var id = this.getAttribute('id');
        // alert(id);

        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "module/joyas/controller/controller_joyas.php?op=read&modal=" + id,
        })
            .done(function (data) {
                $('#modalcontent').empty();
                $('#cod_ref').html(data.cod_ref);
                $('<div></div>').attr('id','details_joyas').appendTo('#modalcontent');
                $("#details_joyas").html(

                '<br><strong>Codigo de referencia: <span id="cod_ref"></strong>'+data.cod_ref+'</span></br>'+
                '<br><strong>Tipo:<span id="tipo"></strong>'+data.tipo+'</span></br>'+
                '<br><strong>Nombre:<span id="nombre"></strong>'+data.nombre+'</span></br>'+
                '<br><strong>Tipo de oro:<span id="oro"></strong>'+data.oro+'</span></br>'+
                '<br><strong>Tipo de gema:<span id="gema"></strong>'+data.gema+'</span></br>'+
                '<br><strong>Diametro:<span id="diametro"></strong>'+data.diametro+'</span></br>'+
                '<br><strong>Forma:<span id="forma"></strong>'+data.forma+'</span></br>'
                )

                modal(data.cod_ref);

            })
            .fail(function(textStatus) {
                if ( console && console.log ) {
                    console.log( "La solicitud ha fallado: " +  textStatus);
                }
                })
        })
    })  

function modal(){

    // $("#details_joyas").show();
    // $("#details_joyas").dialog({

    $("#details_joyas").show().dialog({

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
}