$(document).ready(function () {
    console.log("cart")
    show_cart();
    stock();
    delete_product();
    delete_all();
    checkout();
});


var cart = function (url, data) { //function/promise GENERAL 

    // console.log(data)

    return new Promise(function (resolve) {
        // console.log(url)
        // console.log(data)
        $.ajax({
            type: "POST",
            url: url,
            data: data
        })
            .done(function (data) {
                resolve(data);
            })
    })
};


var ip = new Promise(function (resolve) { //obten el usuario logeado

    $.getJSON('https://api.ipify.org?format=json', function (data) {
        console.log(data.ip);
        resolve(data.ip);
    })

});



function show_cart() {


    cart('module/cart/controller/controller_cart.php?op=user')
        .then(function (name) {
            console.log(name);


            ip
                .then(function (ip) {


                        if (name !== "") {

                            var info = { id: name }
                      
                        } else {

                            var info = { id: ip }
                        }


                    cart('module/cart/controller/controller_cart.php?op=prods', info)
                        .then(function (data) {
                            var prods = JSON.parse(data);
                            console.log(prods)
                            var subtotal = 0
                            var shipping = 0

                            if (prods.length == 0) {
                                $("#prods").append(
                                    '<h1>No tienes productos</h1>'
                                );

                            } else {
                                for (row in prods) {
                                    if ((prods[row].unidades) > 0) {
                                        $("#prods").append(
                                            '<tr id="' + prods[row].cod_ref + 'd">' +
                                            '<td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>' +
                                            '<td>' + prods[row].nombre + ' </td>' +
                                            '<td>In stock</td>' +

                                            '<td align="center">' +
                                            '<input class="stock" cod_ref="' + prods[row].cod_ref + '" name="stock" id="' + prods[row].cod_ref + '" type="number" value="1" step="1" min="1" max="' + prods[row].unidades + '" placeholder="1" />' +
                                            '</td>' +

                                            '<td class="text-right" id="' + prods[row].cod_ref + 'p">' + prods[row].precio + ' €</td>' +
                                            '<td class="text-right"><button id="' + prods[row].cod_ref + '" class="btn btn-sm btn-danger delete"><i class="fa fa-trash"></i>' +
                                            '</button> </td>' +
                                            '</tr>'
                                        );

                                        //aunque en la tabla sea int al cogerlo como array lo recoge como string
                                        //asi que lo cambiamos a int
                                        var precio = parseInt(prods[row].precio)


                                        subtotal = subtotal + precio
                                    } else {
                                        $("#prods").append(
                                            '<tr id="' + prods[row].cod_ref + 'd" style= "filter: blur(1px);">' +
                                            '<td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>' +
                                            '<td>' + prods[row].nombre + ' </td>' +
                                            '<td>No stock</td>' +

                                            '<td align="center">' +
                                            '</td>' +

                                            '<td class="text-right" >' + prods[row].precio + ' €</td>' +
                                            '<td class="text-right"><button id="' + prods[row].cod_ref + '"class="btn btn-sm btn-danger delete"><i class="fa fa-trash"></i>' +
                                            '</button> </td>' +
                                            '</tr>'
                                        );
                                    }
                                }


                                //ahora hacemos que salga siempre con dos numeros decimales
                                var sub = parseFloat(Math.round(subtotal * 100) / 100).toFixed(2);

                                //La empresa de envio se llevara un uno por ciento del valor de cada producto
                                //es decir un uno por ciento del valor total de la compra
                                shipping = (subtotal * 0.01)

                                //ahora hacemos que salga siempre con dos numeros decimales
                                var shipp = parseFloat(Math.round(shipping * 100) / 100).toFixed(2);

                                total = subtotal + shipping

                                //ahora hacemos que salga siempre con dos numeros decimales
                                var total = parseFloat(Math.round(total * 100) / 100).toFixed(2);

                                $("#prods").append(
                                    '<tr>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td></td>' +
                                    '<td>Sub-Total</td>' +
                                    '<td class="text-right" id="sub">' + sub + ' €</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    '<td>Shipping</td>' +
                                    '<td class="text-right" id="ship">' + shipp + ' €</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                    '<td class="text-right"><button class="btn btn-sm btn-danger delete_all"><i class="fa fa-trash"></i>' +
                                    '</button>Delete all </td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td></td>' +
                                    ' <td><strong>Total</strong></td>' +
                                    ' <td class="text-right" id="tot">' + total + ' €</td>' +
                                    ' </tr>'
                                );
                            }

                        })
                })
        })


}

function stock() {
    /// si cambias las unidades que quieres:
    $(document).on('change', '.stock', function () {

        //cogemos el id del que has clicado
        var cod_ref = $(this).attr('cod_ref');
        // console.log(cod_ref)

        //y ves las unidades del que has clicado
        var units = document.getElementById(cod_ref).value
        // console.log(units)

        ///ves el precio que tiene
        cart('module/cart/controller/controller_cart.php?op=price', cod_ref)
            .then(function (data) {
                var price = JSON.parse(data);
                // console.log(price.precio)

                ///le quitas el '€' y lo conviertes en un int
                var price_u = parseInt(price.precio)
                // console.log(price_u)

                var unidades = parseInt(price.unidades)

                //si lo que ha puesto el cliente es mayor que el stock disponible cambiamos las unidades al maximo stock posible
                if (units > unidades) {
                    document.getElementById(cod_ref).value = unidades
                    units = unidades
                }
                ///calculas las unidades que tienes por el precio unitario 
                var tot_price = units * price_u
                // console.log(tot_price)

                //y se lo añades a su celda
                document.getElementById(cod_ref + 'p').innerHTML = tot_price + ' €';


                print()

            })
    })

}

function delete_product() {
    $(document).on('click', '.delete', function () {
        // alert("Cuidado")
        var cod_prod = $(this).attr('id');
        // console.log(cod_prod)

        cart('module/cart/controller/controller_cart.php?op=user')
            .then(function (name) {
                // console.log(name);


                ip
                    .then(function (ip) {

                        if (name !== "") {
                            var id_us = name

                            // var info = {id: a713};
                            //{}

                        } else {
                            var id_us = ip

                        }
                        info = { cod_ref: cod_prod, id: id_us }

                        cart('module/cart/controller/controller_cart.php?op=delete_prod', info)
                            .then(function (data) {
                                console.log(data)
                                $('#' + cod_prod + 'd').remove();
                                print()
                            })
                    })

            })
    })

}

function print() {
    var subtotal = 0

    //desde uno ya que la primera fila de la tabla son los titulos
    //hasta toda la filas menos las 4 en las que no tienes productos
    for (i = 1; i <= ((document.getElementById("cart").rows.length) - 4); i++) {

        //para cada celda observas si esta disponible el producto o no
        var stock = document.getElementById("cart").rows[i].cells[2].innerHTML

        //si lo esta:
        if (stock == "In stock") {
            console.log("YES")

            //cogemos el precio total que tiene ahora
            var preu = document.getElementById("cart").rows[i].cells[4].innerHTML
            console.log(preu)

            ///le quitas el '€' y lo conviertes en un int
            var preu = parseInt(preu)
            console.log(preu)

            //calculas que el subtotal sea cada precio de los productos dispobible mas el siguiente
            subtotal = subtotal + preu
            console.log(subtotal)
        }

    }
    //lo hacemos para que siempre salgan dos decimales
    var sub = parseFloat(Math.round(subtotal * 100) / 100).toFixed(2);
    console.log(sub)

    //y lo añadimos a la celda del subtotal
    document.getElementById('sub').innerHTML = sub + ' €';


    //el encarcgado de los envios se lleva un 0.1% del precio de  cada unidad comprada
    //es decir un 0.1% del total
    shipping = (subtotal * 0.01)
    console.log(shipping)

    //ahora hacemos que salga siempre con dos numeros decimales
    var ship = parseFloat(Math.round(shipping * 100) / 100).toFixed(2);
    console.log(ship)

    //y lo añadimos a la celda de shipping
    document.getElementById('ship').innerHTML = ship + ' €';

    ///el total sera los gastos de envios menos el subtotal
    total = subtotal + shipping
    console.log(total)

    //ahora hacemos que salga siempre con dos numeros decimales
    var tot = parseFloat(Math.round(total * 100) / 100).toFixed(2);
    console.log(tot)

    //y lo añadimos a la celda de total
    document.getElementById('tot').innerHTML = tot + ' €';

}

function delete_all() {
    $(document).on('click', '.delete_all', function () {
        alert("Are you sure?")


        cart('module/cart/controller/controller_cart.php?op=user')
            .then(function (name) {
                // console.log(name);

                ip
                    .then(function (ip) {


                        if (name !== "") {

                            var info = { id: name }
                            // var info = {id: a713};
                            //{}

                        } else {

                            var info = { id: ip }
                        }

                        cart('module/cart/controller/controller_cart.php?op=delete_all', info)
                            .then(function (data) {
                                console.log(data)
                                $("#prods").empty()

                                show_cart()
                            })
                    })
            })
    })

}

////////////////////////////////////IMPORTANTE/////////////////////
//UTILIZAMOS LA MISMA ESTRUCTURA PARA REGISTRAR AL USUARIO Y PARA LOGUEARLO DESDE EL LOGIN/////
///POR ESO SOLO EXPLICAMOS EL LOGIN//////
//UTILIZAMOS UN MODAL PARA LOGUEARSE Y PARA REGISTRARSE Y ASI EL CLIENTE NO SALDRÁ DEL CART EN NINGUN MOMENTO

function checkout() {
    $(document).on('click', '#check', function () {
        // alert("Are you sure?")


        cart('module/cart/controller/controller_cart.php?op=user')
            .then(function (name) {
                // console.log(name);


                if (name !== "") {
                    // var id = name



                    var cods = [];

                    //desde uno ya que la primera fila de la tabla son los titulos
                    //hasta toda la filas menos las 4 en las que no tienes productos
                    for (i = 1; i <= ((document.getElementById("cart").rows.length) - 4); i++) {

                        //para cada celda observas si esta disponible el producto o no
                        var stock = document.getElementById("cart").rows[i].cells[2].innerHTML

                        //si lo esta:
                        if (stock == "In stock") {

                            var nombre = document.getElementById("cart").rows[i].cells[1].innerHTML

                            //le pasamos el nombre del producto para obtener su id
                            info = { nom: nombre }
                            console.log(nombre)


                            cart('module/cart/controller/controller_cart.php?op=cod_ref', info)
                                .then(function (cod_prod) {

                                    // console.log(cod_prod)
                                    var cod_ref = JSON.parse(cod_prod);
                                    console.log(cod_ref)
                                    console.log(cod_ref.cod_ref)

                                    ///una vez recogido el id vemos cauantas unidades quiere el usuario
                                    var units = document.getElementById(cod_ref.cod_ref).value
                                    console.log(units)

                                    var precio_u = (cod_ref.precio)

                                    var fil_total = document.getElementById("cart").rows.length
                                    console.log(fil_total)
                                    var total = document.getElementById("cart").rows[fil_total - 1].cells[5].innerHTML
                                    console.log(total)

                                    total = total.replace(" €", "");
                                    console.log(total)

                                    //y para cada producto creamos una array en la que le añadimos:
                                    var prods = []

                                    //su codigo de referencia
                                    prods.push(cod_ref.cod_ref)
                                    //y sus unidades
                                    prods.push(units)
                                    prods.push(precio_u)
                                    prods.push(name)
                                    prods.push(total)

                                    console.log(prods)

                                    //y añade este array a otra array
                                    cods.push(prods)
                                    console.log(cods)

                                    // la guardamos en localStorage
                                    localStorage.setItem('cart', JSON.stringify(cods));

                                    // console.log("guardar")
                                    //lo recogemos
                                    var guardado = localStorage.getItem('cart');


                                    //y si necesitamos la string recogemos los datos parseados
                                    console.log(JSON.parse(guardado));

                                    var storage = { cart: guardado };


                                    ///le decimos que los guarde tambien en $session
                                    cart('module/cart/controller/controller_cart.php?op=cart', storage)
                                        .then(function (data) {
                                            console.log(data)

                                            redirect_home()

                                        })

                                })


                        }


                    }

                } else {

                    // si no esta loguado le pintamos un modal para que se loguee
                    $("#login").html(

                        '<div id="login">' +
                        '<form autocomplete="on" method="post" name="form_login" id="form_login">' +

                        '<h1>Login</h1>' +
                        '</br>' +

                        '<strong> <label for="user_name_log" data-tr="Nombre de usuario:"></label> </strong>' +
                        '<input name="user_name_log" id="user_name_log" type="text" placeholder="User name" value="" />' +
                        '<p>' +
                        '<font color="red">' +
                        '<span id="e_user_name_log" class="styerror"></span>' +
                        '</font>' +
                        '</p>' +

                        '<strong> <label for="passw_log" data-tr="Contraseña:"></label> </strong>' +
                        '<input name="password" id="passw_log" type="password" placeholder="Password" value="" />' +
                        '<p>' +
                        '<font color="red">' +
                        '<span id="e_passw_log" class="styerror"></span>' +
                        '</font>' +
                        '</p>' +

                        '</br>' +
                        '</form >' +
                        '<button id="no_log">I do not have account</button>' +
                        '</div >'
                    )



                    modal()

                    // Y si clica para registrarse cerrara el modal de login y abrira el de registrer


                    //------------------IMPORTANTE-----------------

                    //He creado dos modales diferentes para identificar cual cierras para poder vaidar el html
                    //ya que no podemos poner las dos validaciones juntas en el if de cerrar el modal porque la que no rellenes da error
                    $(document).on('click', '#no_log', function () {

                        //cerramos el modal de login y abrimos el modal de registrer
                        $("#login").dialog("close");

                        $("#register").html(

                            '<div id="register">' +
                            '<form autocomplete="on" method="post" name="form_register" id="form_register">' +

                            '<h1>Register</h1>' +
                            '</br>' +

                            '<strong> <label for="user_name_reg" data-tr="Nombre de usuario:"></label> </strong>' +
                            '<input name="user_name_reg" id="user_name_reg" type="text" placeholder="User Name" value="" />' +
                            '<p>' +
                            '<font color="red">' +
                            '<span id="e_user_name_reg" class="styerror"></span>' +
                            '</font>' +
                            '</p>' +


                            '<strong> <label for="passw_reg" data-tr="Contraseña:"></label> </strong>' +
                            '<input name="passw_reg" id="passw_reg" type="password" placeholder="Password" value="" />' +
                            '<p>' +
                            '<font color="red">' +
                            '<span id="e_passw_reg" class="styerror"></span>' +
                            '</font>' +
                            '</p>' +

                            '<strong> <label for="conf_passw" data-tr="Confirme contraseña:"> </label> </strong>' +
                            '<input name="conf_passw" id="conf_passw" type="password" placeholder="Confirm Password" value="" />' +
                            '<p>' +
                            '<font color="red">' +
                            '<span id="e_conf_passw" class="styerror"></span>' +
                            '</font>' +
                            '</p>' +

                            '<strong> <label for="mail"></label> </strong>' +
                            '<input name="mail" id="mail" type="text" placeholder="Mail" value="" />' +
                            '<p>' +
                            '<font color="red">' +
                            '<span id="e_mail" class="styerror"></span>' +
                            '</font>' +
                            '</p>' +
                            '</br>' +
                            '</form>' +
                            '</div>'
                        )

                        modal_reg()

                    })

                }
            })


    })
}

function redirect_home() {
    var url = "index.php?page=controller_home&op=list"
    $(window).attr('location', url);

}

function modal_reg() {


    $("#register").show().dialog({

        width: 850, //<!-- ------------- ancho de la ventana -->
        height: 500, //<!--  ------------- altura de la ventana -->
        //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
        //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
        resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
        //position: "down",<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
        modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
        buttons: {
            Ok: function valor() {
                if (validate_register() != 'false') {

                    var userinfo_reg = $('#form_register').serialize();
                    console.log(userinfo_reg)
                    localStorage.setItem('register', userinfo_reg);
                    $(this).dialog("close");
                    register_cart()

                }

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

function modal() {


    $("#login").show().dialog({

        width: 850, //<!-- ------------- ancho de la ventana -->
        height: 500, //<!--  ------------- altura de la ventana -->
        //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
        //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
        resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
        //position: "down",<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
        modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
        buttons: {

            //cuando le das click al OK del modal comprueba si el js esta todo correcto con la funcion del login
            //y si lo esta se cerrara el modal y recogera los datos del modal y los pondra el localstorage
            //y luego activará una funcion del login que hara que se loguee el usuario
            Ok: function valor() {
                if (validate_login() != 'false') {
                    var userinfo = $('#form_login').serialize();
                    console.log(userinfo)
                    localStorage.setItem('login', userinfo);

                    $(this).dialog("close");
                    login_cart()


                }

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

//esta funcion se activa desde el login.js  pintará que los datos de la base de datos no coinciden
function error_login() {

    var e_login = localStorage.getItem('e_login');

    modal()
    document.getElementById('e_user_name_log').innerHTML = e_login;
    document.getElementById('e_passw_log').innerHTML = e_login;

    localStorage.removeItem('e_login');

}

function error_reg() {

    var e_reg = localStorage.getItem('e_reg');

    modal_reg()
    document.getElementById('e_user_name_reg').innerHTML = e_reg;

    localStorage.removeItem('e_reg');

}