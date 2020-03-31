$(document).ready(function () {

    console.log("READY");
    list_users();
    create()
    reed()
    update()
    delet()
    delete_all()

});

var crud = function (url, data, data1) { //function/promise GENERAL 
    // console.log(url)

    console.log(data)
    console.log(data1)


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

function modal() {

    // $("#users").show();
    // $("#users").dialog({

    $("#users").show().dialog({

        width: 850, //<!-- ------------- ancho de la ventana -->
        height: 500, //<!--  ------------- altura de la ventana -->
        //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
        //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
        resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
        //position: "down",<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
        modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
        buttons: {
            Ok: function valor() {
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

function create() {
    $(document).on('click', '#create', function () {

        $("#users").html(

            '<div id="register">' +
            '<form autocomplete="on" method="post" name="form_register" id="form_register">' +

            '<h1>Register</h1>' +
            '</br>' +

            '<strong> <label for="user_name_reg"> User name</label> </strong>' +
            '<input name="user_name_reg" id="user_name_reg" type="text" placeholder="User Name" value="" />' +
            '<p>' +
            '<font color="red">' +
            '<span id="e_user_name_reg" class="styerror"></span>' +
            '</font>' +
            '</p>' +


            '<strong> <label for="passw_reg"> Password</label> </strong>' +
            '<input name="passw_reg" id="passw_reg" type="password" placeholder="Password" value="" />' +
            '<p>' +
            '<font color="red">' +
            '<span id="e_passw_reg" class="styerror"></span>' +
            '</font>' +
            '</p>' +

            '<strong> <label for="conf_passw"> Confirm Password </label> </strong>' +
            '<input name="conf_passw" id="conf_passw" type="password" placeholder="Confirm Password" value="" />' +
            '<p>' +
            '<font color="red">' +
            '<span id="e_conf_passw" class="styerror"></span>' +
            '</font>' +
            '</p>' +

            '<strong> <label for="mail"> Mail</label> </strong>' +
            '<input name="mail" id="mail" type="text" placeholder="Mail" value="" />' +
            '<p>' +
            '<font color="red">' +
            '<span id="e_mail" class="styerror"></span>' +
            '</font>' +
            '</p>' +


            '</form >' +
            '</div >'
        )

        modal()

        $(document).on('click', '.ui-dialog-buttonset', function () {


            var userinfo = $('#form_register').serialize();
            console.log(userinfo)
            
        });
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

                $("#users").html(

                    '<br><strong>User name:</strong>' + data_us.user_name + '</span></br>' +
                    '<br><strong>Mail:</strong>' + data_us.mail + '</span></br>' +
                    '<br><strong>Tipo:</strong>' + data_us.type + '</span></br>'
                )

                modal(data.cod_ref);
            })

    })


}

function update() {
    $(document).on('click', '#update', function () {

        console.log("update")
        var user_name = $(this).attr('us');
        console.log(user_name);

        crud('module/users/controller/controller_users.php?op=reed', user_name)
            .then(function (data) {
                console.log(data)

                var data_us = JSON.parse(data);
                console.log(data_us)



                if (data_us.type == 'client') {
                    $("#users").html(

                        '<label for="client">Client</label>' +
                        '<input type="radio" id="client" name="type" value="client" checked>' +
                        '<label for="admin">Admin</label>' +
                        '<input type="radio" id="admin" name="type" value="admin">'

                    )
                } else if (data_us.type == 'admin') {
                    $("#users").html(

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
                    console.log(data)

                    location.reload()
                })
        } else {

        }





    })


}

function delete_all() {
    $(document).on('click', '#delete_all', function () {
        var conf = confirm("Do you want delete user?");

        if (conf == true) {

            crud('module/users/controller/controller_users.php?op=delete_all')
                .then(function (data) {
                    console.log(data)

                    location.reload()
                })
        } else {

        }





    })


}