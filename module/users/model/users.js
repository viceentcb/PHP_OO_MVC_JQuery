$(document).ready(function () {

    console.log("READY");
    list_users();
    reed();
    update()
    delet();

});

var crud = function (url, data, data1) { //function/promise GENERAL 
    // console.log(url)

    console.log(data)

    return new Promise(function (resolve) {
        $.ajax({
            type: "POST",
            url: url,
            data: { valor1: data, valor2: data1 }
        })
            .done(function (data) {
                resolve(data);
            })
    })
};


function list_users() {


    crud('module/users/controller/controller_users.php?op=user')
        .then(function (data) {

            console.log(data);
            var data_all = JSON.parse(data);
            console.log(data_all)

            for (row in data_all) {
                $("#list").append(
                    "<tr>" +
                    "<td align='center' width=125 >" + data_all[row].user_name + "</td>" +
                    "<td align='center' width=125 >" + data_all[row].mail + "</td>" +
                    "<td align='center' width=125>" + data_all[row].type + "</td>" +
                    "<td align='center' width=125><img us='" + data_all[row].user_name + "' id='reed' src=view/images/ojo.png></td>" +
                    "<td align='center' width=125><img us='" + data_all[row].user_name + "' id='update' src=view/images/engranaje.png></td>" +
                    "<td align='center' width=125><img us='" + data_all[row].user_name + "' id='delete' src=view/images/papelera.png></td>" +
                    "</tr>"
                );
            }
            $('#list_us').DataTable()

        })



}

function reed() {
    $(document).on('click', '#reed', function () {
        var user_name = $(this).attr('us');
        console.log(user_name);
        crud('module/users/controller/controller_users.php?op=reed', user_name)
            .then(function (data) {
                console.log(data)

                var data_us = JSON.parse(data);
                console.log(data_us)

                // $('#modalcontent').empty();
                // $('#cod_ref').html(data.cod_ref);
                // $('<div></div>').attr('id','details_joyas').appendTo('#modalcontent');
                $("#details_joyas").html(

                    '<br><strong>User name:</strong>' + data_us.user_name + '</span></br>' +
                    '<br><strong>Mail:</strong>' + data_us.mail + '</span></br>' +
                    '<br><strong>Tipo:</strong>' + data_us.type + '</span></br>'
                )

                modal(data.cod_ref);
            })

    })


}

function modal() {

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
            Ok: function valor() {
                var valor = $("input[name='type']:checked").val();
                // alert(valor)
                $(this).dialog("close");
                return valor
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

function update() {
    $(document).on('click', '#update', function () {
        var user_name = $(this).attr('us');
        console.log(user_name);

        crud('module/users/controller/controller_users.php?op=reed', user_name)
            .then(function (data) {
                console.log(data)

                var data_us = JSON.parse(data);
                console.log(data_us)



                if (data_us.type == 'client') {
                    $("#details_joyas").html(

                        '<label for="client">Client</label>' +
                        '<input type="radio" id="client" name="type" value="client" checked>' +
                        '<label for="admin">Admin</label>' +
                        '<input type="radio" id="admin" name="type" value="admin">'

                    )
                } else if (data_us.type == 'admin') {
                    $("#details_joyas").html(

                        '<label for="client">Client</label>' +
                        '<input type="radio" id="client" name="type" value="client" >' +
                        '<label for="admin">Admin</label>' +
                        '<input type="radio" id="admin" name="type" value="admin" checked>'
                    )
                }


                modal();


                $(document).on('click', '.ui-dialog-buttonset', function () {
                    var valor = $("input[name='type']:checked").val();
                    console.log(valor)
                    console.log(user_name)

                    crud('module/users/controller/controller_users.php?op=update', user_name, valor)
                        .then(function (data) {
                            location.reload()

                            console.log(data)

                        })
                });

            })
    })

}

function delet() {
    $(document).on('click', '#delete', function () {
        var user_name = $(this).attr('us');
        console.log(user_name);

        var conf = confirm("Do you want delete user?");

        if (conf == true) {

            crud('module/users/controller/controller_users.php?op=delete', user_name)
                .then(function (data) {
                    location.reload()
                    console.log(data)
                })
        } else {
            // alert("false")

        }





    })


}
