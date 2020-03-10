$(document).ready(function () {
    // console.log("shop");
    click();
    // entra();
    local();
    ajaxForSearch();
    filter();
    pagination();

    // click_map();
    if (document.getElementById("maps") != null) {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js?key=" + "AIzaSyAtHMkPSlbaZdqjz5BZzCuhKV8jpOQvJnw" + "&callback=initMap";
        script.async;
        script.defer;
        document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    }
});


/////FUNCION PARA IR DEL HOME AL LISTADO DE SHOP
function ajaxForSearch(durl) {
    var url = durl;
    // console.log(url);
    $.ajax({
        type: "GET",
        dataType: "json",
        url: url,
    })
        .done(function (data) {
            console.log(data);
            for (row in data) {
                //Cuando solo quede un producto avisara al cliente de que este producto es el ultimo
                //Ademas avisara y mostrara que el articulo esta en oferta

                if ((data[row].unidades) == 1) {
                    $("#list_products").append(
                        // "<div class='row grid gallery-info'>" +
                        "<figure class='effect-steve' >" +
                        "<img src= '" + data[row].route + "' alt='img15'>" +
                        "<figcaption class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "'>" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        // "<p style='text-decoration: line-through;'>  "+ (data[row].precio) + "$</p>" +
                        // "<p style='color:red'; >"+ ((data[row].precio)*0.5) + "$</p>"+
                        "<p><a style='text-decoration: line-through;font-size: 15px;'>" + (data[row].precio) + "$</a><a style='color:red; font-size: 15px;'> &nbsp;&nbsp;&nbsp;&nbsp;" + ((data[row].precio) * 0.5) + "$</a></p>" +
                        "</br></br></br></br></br>" +
                        // "<p><a style='color:red;font-size: 16px;'>Ultima unidad &nbsp</a><a style='color:red;font-size: 15px;'>Articulo al 50%</a></p>" +
                        "<p style='color:red;font-size: 15px;'>Ultima unidad</p>" +
                        "<p style='color:red;font-size: 15px;'>Articulo al 50%</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>");

                }
                //Cuando queden menos de 3 unidades avisara al cliente de que quedan pocas unidades
                else if (((data[row].unidades) < 3) && ((data[row].unidades) != 0)) {
                    $("#list_products").append(
                        // "<div style='row grid gallery-info'>" +
                        "<figure class='effect-steve' >" +
                        "<img src= '" + data[row].route + "'>" +
                        "<figcaption alt='img15' class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "'>" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
                        "</br></br></br></br></br></br>" +
                        "<p style='color:red; font-size: 15px;'>Quedan pocas unidades</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>");

                    //Cuando queden 0 unidades avisara al cliente de que no queda stock de dicho porducto

                } else if ((data[row].unidades) == 0) {
                    $("#list_products").append(
                        // "<div style='row grid gallery-info'>" +
                        "<figure class='effect-steve' >" +
                        "<img style=' opacity:0.5 ;' src= '" + data[row].route + "' alt='img15'  >" +
                        "<figcaption class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "'>" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
                        "</br></br></br></br></br></br>" +
                        "<p style=color:red;font-size: 15px;'>No queda stock</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>");
                } else {
                    $("#list_products").append(
                        // "<div style='row grid gallery-info'>" +
                        "<figure class='effect-steve' >" +
                        "<img src= '" + data[row].route + "' alt='img15' >" +
                        "<figcaption class='detail' id='" + data[row].cod_ref + "' type='" + data[row].tipo + "' >" +
                        "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
                        "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
                        "</figcaption>" +
                        "</figure>" +
                        "</div>");
                }

            }
        })// end done
        .fail(function () {
            console.log("HELLOOOOO FAIL");
        })
}

////AQUI VEREMOS DE DONDE VIENE E IREMOS A UNA CATEGORIA O A OTRA
function local() {

    if (document.getElementById('list_products')) {

        //Aqui observaremos los datos
        console.log("Entran datos");
        var valoration = localStorage.getItem('val');
        console.log("valoration= " + valoration);
        var type = localStorage.getItem('tipo');
        console.log("type= " + type);
        var car = localStorage.getItem('sli');
        console.log("car= " + car);
        var type_search = localStorage.getItem('typ');
        console.log("type_search= " + type_search);
        var brand_search = localStorage.getItem('bra');
        console.log("brand_search= " + brand_search);
        var name_search = localStorage.getItem('pro');
        console.log("name_search= " + name_search);


        if (type) {
            console.log("categoria")
            ajaxForSearch("module/shop/controller/controller_shop.php?op=categoria&type=" + type)

        } else if (valoration) {
            console.log("PRODUCTOOOOOOOO");
            ajaxForSearch("module/shop/controller/controller_shop.php?op=detail&cod_ref=" + valoration)

            ////NO HACEMOS MAS COMBINACIONES PORQUE SI COMBINAMOS CUALQUIER "FILTRO" CON EL NOMBRE
            ///ENTRARIA DIRECTAMENTE AQUI TANTO SI ES UNA COMBINACION DE 2 COMO SI ESTA SOLO EL NOMBRE
            ///O COMO SI JUNTAMOS LOS 3 "FILTROS"
        } else if (name_search) {
            console.log("Todos campos rellenos del search o al menos el nombre")
            var search = 'where nombre ="' + name_search + '"'
            console.log(search);
            ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)


            ///INTRODUCIMOS 0 YA QUE AL SER 0 Y NO NULL DETECTA QUE DICHAS VARIABLES EXISTEN
        } else if ((brand_search) && (type_search) && (brand_search != 0) && (type_search != 0)) {
            console.log("marca y tipo rellenos en el search ")
            var search = 'where marca ="' + brand_search + '" and tipo="' + type_search + '"'
            console.log(search);
            ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)


            ///INTRODUCIMOS 0 YA QUE AL SER 0 Y NO NULL DETECTA QUE DICHAS VARIABLES EXISTEN
        } else if (brand_search && (brand_search != 0)) {
            console.log("solo marca rellena en el search ")
            var search = 'where marca ="' + brand_search + '"'
            console.log(search);
            ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)


            ///INTRODUCIMOS 0 YA QUE AL SER 0 Y NO NULL DETECTA QUE DICHAS VARIABLES EXISTEN
        } else if (type_search && (type_search != 0)) {
            console.log("solo tipo relleno en el search ")
            var search = 'where tipo ="' + type_search + '"'
            console.log(search);
            ajaxForSearch("module/shop/controller/controller_shop.php?op=search&all=" + search)

        } else {
            console.log("shop")
            number=0
            ajaxForSearch("module/shop/controller/controller_shop.php?op=all&number=" + number)
        }
    }//End if document
    console.log("Borrar datos");

    ///Aqui veremos como los datos ya han sido borrados
    var valoration = localStorage.removeItem('val');
    console.log("valoration= " + valoration);
    var type = localStorage.removeItem('tipo');
    console.log("type= " + type);
    // var car = localStorage.removeItem('sli');
    // console.log("car= " + car)
    var type_search = localStorage.removeItem('typ');
    console.log("type_search= " + type_search);
    var brand_search = localStorage.removeItem('bra');
    console.log("brand_search= " + brand_search);
    var name_search = localStorage.removeItem('pro');
    console.log("name_search= " + name_search);

}

////AQUI OBSERVAREMOS LOS DATOS QUE ENTRAN QUE ENTRAN
function entra() {
    console.log("AQUI ESTAN LOS QUE ENTRAN")
    var valoration = localStorage.getItem('val');
    console.log("valoration= " + valoration);
    var type = localStorage.getItem('tipo');
    console.log("type= " + type);
    var car = localStorage.getItem('sli');
    console.log("car= " + car);
    var type_search = localStorage.getItem('typ');
    console.log("type_search= " + type_search);
    var brand_search = localStorage.getItem('bra');
    console.log("brand_search= " + brand_search);
    var name_search = localStorage.getItem('pro');
    console.log("name_search= " + name_search);


}

/////FUNCION PARA IR DEL SHOP AL DETALIS
function click() {
    $(document).on('click', '.detail', function () {
        console.log("click");
        var cod_ref = this.getAttribute('id');
        var tipo = this.getAttribute('type');
        console.log(cod_ref);
        console.log(tipo);

        ///CADA VEZ QUE CLICAMOS SE SUMAN LAS VISITAS DE ESE PRODUCTO A LA BASE DE DATOS 
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "module/shop/controller/controller_shop.php?op=views&cod_ref=" + cod_ref
        }).fail(function () {
            console.log("fail")
        })

        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "module/shop/controller/controller_shop.php?op=detail&cod_ref=" + cod_ref + "&type=" + tipo

        }).done(function (data) {
            console.log("done");
            console.log(data);
            $("#container").empty();
            $("#container1").empty();
            $("#fil_empty").empty();
            $("#maps").empty();

            for (i = 0; i < 1; i++) {
                $("#detail_products").append(

                    '<table>' +

                    '<tr>' +
                    '<td rowspan="5"><img src= ' + data[i].route + '></td>' +
                    '<td><strong>Nombre:  </strong>' + data[i].nombre + '</td>' +

                    '</tr>' +

                    '<tr>' +
                    '<td><strong>Tipo de oro:  </strong>' + data[i].oro + '</td>' +
                    '</tr>' +

                    '<tr>' +
                    '<td>' + data[i].nombre + '</td>' +
                    '</tr>' +

                    '<tr>' +
                    '<td>' + data[i].nombre + '</td>' +
                    '</tr>' +

                    '<tr>' +
                    '<td>' + data[i].nombre + '</td>' +
                    '</tr>' +

                    '</table>'

                )
            }
            for (i = 1; i < 4; i++) {
                if (data[i] !== undefined) {
                    //Cuando solo quede un producto avisara al cliente de que este producto es el ultimo
                    //Ademas avisara y mostrara que el articulo esta en oferta
                    $("#detail_products").append(
                        '<img src= ' + data[i].route + ' class="detail" id=' + data[i].cod_ref + ' type=' + data[i].tipo + '>'
                    )
                } else {
                    i = 4;
                }
            }

        }).fail(function () {
            console.log("fail")
        })
        $("#detail_products").empty();
    })

}

////FUNCTION PARA FILTRAR PRODUCTOS A VOLUNTAD DEL USUARIO
function filter() {
    var checks = "";
    var order = "";
    var click_an = 0;
    var click_pul = 0;
    var click_rel = 0;
    var click_circ = 0;
    var click_cuad = 0;
    var click_sport = 0;
    var click_abi = 0;
    var click_di = 0;
    var click_za = 0;
    var click_ru = 0;
    var click_ros = 0;
    var click_blan = 0;
    var click_pur = 0;

    // var lol="";
    // var lolp="";
    // var hola="";

    // $('#anillo').prop('checked', function () { 
    //     console.log('Seleccionado');
    // });

    //  $('#anillo').attr('checked', function () {
    //     alert('Seleccionado');
    // })

    // var checkbox = document.getElementById('reloj');
    // checkbox.addEventListener("change", validaCheckbox, false);
    // function validaCheckbox() {
    //     var checked = checkbox.checked;
    //     if (checked) {
    //         checks = "WHERE tipo = 'reloj'";
    //     }
    // }
    $('#anillo').click(function () {
        console.log("click_an= " + click_an)

        if ((click_an % 2) == 0) {
            console.log("click_an para filtrar")
            click_an = click_an + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where tipo = 'anillo'" + checks;
            } else {
                console.log("cadena escrita")
                checks = checks + " OR tipo = 'anillo'";
                console.log(anillo);
            }
        } else {
            console.log("click_an para desfiltrar")
            click_an = click_an + 1
            anillo = '';
            checks = checks.replace("tipo = 'anillo' OR ", "");
            checks = checks.replace(" OR tipo = 'anillo'", "");
            checks = checks.replace("where tipo = 'anillo'", "");


        }
        console.log("click_an= " + click_an)
    });

    $('#pulsera').click(function () {
        console.log("click_pul= " + click_pul)

        if ((click_pul % 2) == 0) {
            console.log("click_pul para filtrar")
            click_pul = click_pul + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where tipo = 'pulsera'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR tipo = 'pulsera'";

            }
        } else {
            console.log("click_pul para desfiltrar")
            click_pul = click_pul + 1
            checks = checks.replace("tipo = 'pulsera' OR ", "");
            checks = checks.replace(" OR tipo = 'pulsera'", "");
            checks = checks.replace("where tipo = 'pulsera'", "");

        }
        console.log("click_pul= " + click_pul)

    });
    $('#reloj').click(function () {
        console.log("click_rel= " + click_rel)

        if ((click_rel % 2) == 0) {
            console.log("click_rel para filtrar")
            click_rel = click_rel + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where tipo = 'reloj'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR tipo = 'reloj'";

            }
        } else {
            console.log("click_rel para desfiltrar")
            click_rel = click_rel + 1
            checks = checks.replace("tipo = 'reloj' OR ", "");
            checks = checks.replace(" OR tipo = 'reloj'", "");
            checks = checks.replace("where tipo = 'reloj'", "");

        }
        console.log("click_rel= " + click_rel)

    });

    $('#circular').click(function () {
        console.log("click_circ= " + click_circ)

        if ((click_circ % 2) == 0) {
            console.log("click_circ para filtrar")
            click_circ = click_circ + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'circular'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'circular'";

            }
        } else {
            console.log("click_circ para desfiltrar")
            click_circ = click_circ + 1
            checks = checks.replace("forma = 'circular' OR ", "");
            checks = checks.replace(" OR forma = 'circular'", "");
            checks = checks.replace("where forma = 'circular'", "");

        }
        console.log("click_circ= " + click_circ)

    });
    $('#cuadrada').click(function () {
        console.log("click_cuad= " + click_cuad)

        if ((click_cuad % 2) == 0) {
            console.log("click_cuad para filtrar")
            click_cuad = click_cuad + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'cuadrada'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'cuadrada'";

            }
        } else {
            console.log("click_cuad para desfiltrar")
            click_cuad = click_cuad + 1
            checks = checks.replace("forma = 'cuadrada' OR ", "");
            checks = checks.replace(" OR forma = 'cuadrada'", "");
            checks = checks.replace("where forma = 'cuadrada'", "");

        }
        console.log("click_cuad= " + click_cuad)

    });
    $('#sport').click(function () {
        console.log("click_sport= " + click_sport)

        if ((click_sport % 2) == 0) {
            console.log("click_sport para filtrar")
            click_sport = click_sport + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'sport'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'sport'";

            }
        } else {
            console.log("click_sport para desfiltrar")
            click_sport = click_sport + 1
            checks = checks.replace("forma = 'sport' OR ", "");
            checks = checks.replace(" OR forma = 'sport'", "");
            checks = checks.replace("where forma = 'sport'", "");

        }
        console.log("click_sport= " + click_sport)

    });
    $('#abierta').click(function () {
        console.log("click_abi= " + click_abi)

        if ((click_abi % 2) == 0) {
            console.log("click_abi para filtrar")
            click_abi = click_abi + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where forma = 'abierta'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR forma = 'abierta'";

            }
        } else {
            console.log("click_abi para desfiltrar")
            click_abi = click_abi + 1
            checks = checks.replace("forma = 'abierta' OR ", "");
            checks = checks.replace(" OR forma = 'abierta'", "");
            checks = checks.replace("where forma = 'abierta'", "");

        }
        console.log("click_abi= " + click_abi)

    });

    $('#diamante').click(function () {
        console.log("click_di= " + click_di)

        if ((click_di % 2) == 0) {
            console.log("click_di para filtrar")
            click_di = click_di + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where gema like '%diamante%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR gema like '%diamante%'";

            }
        } else {
            console.log("click_di para desfiltrar")
            click_di = click_di + 1
            checks = checks.replace("gema like '%diamante%' OR ", "");
            checks = checks.replace(" OR gema like '%diamante%'", "");
            checks = checks.replace("where gema like '%diamante%'", "");
        }
        console.log("click_di= " + click_di)

    });
    $('#zafiro').click(function () {
        console.log("click_za= " + click_za)

        if ((click_za % 2) == 0) {
            console.log("click_za para filtrar")
            click_za = click_za + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where gema like '%zafiro%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR gema like '%zafiro%'";

            }
        } else {
            console.log("click_za para desfiltrar")
            click_za = click_za + 1
            checks = checks.replace("gema like '%zafiro%' OR ", "");
            checks = checks.replace(" OR gema like '%zafiro%'", "");
            checks = checks.replace("where gema like '%zafiro%'", "");
        }
        console.log("click_za= " + click_za)

    });
    $('#rubi').click(function () {
        console.log("click_ru= " + click_ru)

        if ((click_ru % 2) == 0) {
            console.log("click_ru para filtrar")
            click_ru = click_ru + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where gema like '%rubi%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR gema like '%rubi%'";

            }
        } else {
            console.log("click_ru para desfiltrar")
            click_ru = click_ru + 1
            checks = checks.replace("gema like '%rubi%' OR ", "");
            checks = checks.replace(" OR gema like '%rubi%'", "");
            checks = checks.replace("where gema like '%rubi%'", "");
        }
        console.log("click_ru= " + click_ru)

    });

    $('#rosado').click(function () {
        console.log("click_ros= " + click_ros)

        if ((click_ros % 2) == 0) {
            console.log("click_ros para filtrar")
            click_ros = click_ros + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where oro like '%rosado%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR oro like '%rosado%'";

            }
        } else {
            console.log("click_ros para desfiltrar")
            click_ros = click_ros + 1
            checks = checks.replace("oro like '%rosado%' OR ", "");
            checks = checks.replace(" OR oro like '%rosado%'", "");
            checks = checks.replace("where oro like '%rosado%'", "");
        }
        console.log("click_ros= " + click_ros)

    });
    $('#blanco').click(function () {
        console.log("click_blan= " + click_blan)

        if ((click_blan % 2) == 0) {
            console.log("click_blan para filtrar")
            click_blan = click_blan + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where oro like '%blanco%'" + checks;

            } else {
                console.log("cadena escrita")
                checks = checks + " OR oro like '%blanco%'";

            }
        } else {
            console.log("click_blan para desfiltrar")
            click_blan = click_blan + 1
            checks = checks.replace("oro like '%blanco%' OR ", "");
            checks = checks.replace(" OR oro like '%blanco%'", "");
            checks = checks.replace("where oro like '%blanco%'", "");
        }
        console.log("click_blan= " + click_blan)

    });
    $('#puro').click(function () {
        console.log("click_pur= " + click_pur)

        if ((click_pur % 2) == 0) {
            console.log("click_pur para filtrar")
            click_pur = click_pur + 1
            if (checks === "") {
                console.log("cadena vacia")
                checks = "where oro like '%puro%'" + checks;
                ""
            } else {
                console.log("cadena escrita")
                checks = checks + " OR oro like '%puro%'";

            }
        } else {
            console.log("click_pur para desfiltrar")
            click_pur = click_pur + 1
            checks = checks.replace("oro like '%puro%' OR ", "");
            checks = checks.replace(" OR oro like '%puro%'", "");
            checks = checks.replace("where oro like '%puro%'", "");
        }
        console.log("click_pur= " + click_pur)

    });

    // $('#prec_asc').change(function () {
    //     console.log("prec_asc= ")
    //     order = "ORDER BY"
    // });
    // $('#prec_asc').click(function () {
    //     console.log("prec_asc= ")
    //     order = "ORDER BY"
    // });
    $("#order").on("change", function () {
        console.log("order")
        var option = document.getElementById('order').value;
        console.log("options= " + option)
        if (option == "val_desc") {
            order = "ORDER BY val DESC";
        } else if (option == "stock_asc") {
            order = "ORDER BY unidades ASC";
        } else if (option == "stock_desc") {
            order = "ORDER BY unidades DESC";
        } else {
            order = "";
        }

    });
    // $( "#prec_asc" ).select(function() {
    //     alert( "Handler for .select() called." );
    //   });
    $(document).on('click', '.lal', function () {
        console.log("filter");
        // validaCheckbox();
        console.log(checks);
        console.log(order);
        $("#list_products").empty();

        ajaxForSearch("module/shop/controller/controller_shop.php?op=filter&checks=" + checks + "&order=" + order)


        //     $.ajax({
        //         type: "GET",
        //         dataType: 'json',
        //         url: "module/shop/controller/controller_shop.php?op=filter&checks=" + checks

        //     })
        //         .done(function (data) {
        //             console.log(data);
        //             $("#list_products").empty();

        //             for (row in data) {
        //                 //Cuando solo quede un producto avisara al cliente de que este producto es el ultimo
        //                 //Ademas avisara y mostrara que el articulo esta en oferta

        //                 if ((data[row].unidades) == 1) {
        //                     $("#list_products").append(
        //                         // "<div class='row grid gallery-info'>" +
        //                         "<figure class='effect-steve' >" +
        //                         "<img src= '" + data[row].route + "' alt='img15'>" +
        //                         "<figcaption class='detail' id='" + data[row].cod_ref + "'$>" +
        //                         "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
        //                         // "<p style='text-decoration: line-through;'>  "+ (data[row].precio) + "$</p>" +
        //                         // "<p style='color:red'; >"+ ((data[row].precio)*0.5) + "$</p>"+
        //                         "<p><a style='text-decoration: line-through;font-size: 15px;'>" + (data[row].precio) + "$</a><a style='color:red; font-size: 15px;'> &nbsp;&nbsp;&nbsp;&nbsp;" + ((data[row].precio) * 0.5) + "$</a></p>" +
        //                         "</br></br></br></br></br>" +
        //                         // "<p><a style='color:red;font-size: 16px;'>Ultima unidad &nbsp</a><a style='color:red;font-size: 15px;'>Articulo al 50%</a></p>" +
        //                         "<p style='color:red;font-size: 15px;'>Ultima unidad</p>" +
        //                         "<p style='color:red;font-size: 15px;'>Articulo al 50%</p>" +
        //                         "</figcaption>" +
        //                         "</figure>" +
        //                         "</div>");

        //                 }
        //                 //Cuando queden menos de 3 unidades avisara al cliente de que quedan pocas unidades
        //                 else if (((data[row].unidades) < 3) && ((data[row].unidades) != 0)) {
        //                     $("#list_products").append(
        //                         // "<div style='row grid gallery-info'>" +
        //                         "<figure class='effect-steve' >" +
        //                         "<img src= '" + data[row].route + "'>" +
        //                         "<figcaption alt='img15' class='detail' id='" + data[row].cod_ref + "'>" +
        //                         "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
        //                         "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
        //                         "</br></br></br></br></br></br>" +
        //                         "<p style='color:red; font-size: 15px;'>Quedan pocas unidades</p>" +
        //                         "</figcaption>" +
        //                         "</figure>" +
        //                         "</div>");

        //                     //Cuando queden 0 unidades avisara al cliente de que no queda stock de dicho porducto

        //                 } else if ((data[row].unidades) == 0) {
        //                     $("#list_products").append(
        //                         // "<div style='row grid gallery-info'>" +
        //                         "<figure class='effect-steve' >" +
        //                         "<img style=' opacity:0.5 ;' src= '" + data[row].route + "' alt='img15'  >" +
        //                         "<figcaption class='detail' id='" + data[row].cod_ref + "'>" +
        //                         "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
        //                         "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
        //                         "</br></br></br></br></br></br>" +
        //                         "<p style=color:red;font-size: 15px;'>No queda stock</p>" +
        //                         "</figcaption>" +
        //                         "</figure>" +
        //                         "</div>");
        //                 } else {
        //                     $("#list_products").append(
        //                         // "<div style='row grid gallery-info'>" +
        //                         "<figure class='effect-steve' >" +
        //                         "<img src= '" + data[row].route + "' alt='img15' >" +
        //                         "<figcaption class='detail' id='" + data[row].cod_ref + "' >" +
        //                         "<h2>" + data[row].marca + "<span> " + data[row].nombre + " </span></h2>" +
        //                         "<p style='font-size: 15px';>" + data[row].precio + "$</p>" +
        //                         "</figcaption>" +
        //                         "</figure>" +
        //                         "</div>");
        //                 }

        //             }
        //         }).fail(function () {
        //             console.log("fail")
        //         })
    });
}

////FUNCTION PARA ENSEÑAR EL MAPA
function initMap() {

    var ray = [];

    // var
    // jewelry_stores = [
    //   [estacio],
    //   ['Cartier-Madrid'],
    //   ['Vintage Watches Valencia'],
    // ];
    // console.log(jewelry_stores)
    var map = new google.maps.Map(document.getElementById('maps'), {
        zoom: 6,
        center: new google.maps.LatLng(40.05, -3.695447),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "module/shop/controller/controller_shop.php?op=maps"

    }).done(function (data) {
        console.log(data);

        for (row in data) {


            var newMarker = new google.maps.Marker({
                position: new google.maps.LatLng(
                    data[row].lat,
                    data[row].lng),
                map: map,
                title:
                    data[row].tienda
            });

            google.maps.event.addListener(newMarker, 'click', (function (newMarker, row) {
                return function () {
                    var lat = data[row].lat
                    var lng = data[row].lng
                    $.ajax({
                        type: "GET",
                        dataType: 'json',
                        url: "module/shop/controller/controller_shop.php?op=desc_maps&lat=" + lat +"&lng=" + lng
                    }).done(function (data) {
                        console.log(data);
                        var descripcion=""
                        for (row in data){
                            descripcion= descripcion+ data[row].descripcion
                        }
                        console.log(descripcion)
                        infowindow.setContent(
                            descripcion);
                        infowindow.open(map, newMarker);
                    })
                    }
            })(newMarker, row));
    ray.push(newMarker);
}
    })
}

////FUNCTION PARA CUANDO CLICQUES EN EL MAPA ESTE SE VUELVA GRANDE
function click_map() {
    do {
        var count = 0
        $(document).on('click', '#maps', function () {
            $(document).on('click', '.detail', function () {
                count = 1
            })
            console.log("mapa");
            $("#container").empty();
            $("#container1").empty();
            $("#fil").empty();

            $("#maps").append(
                '<a id="fle" href=index.php?page=controller_shop&op=list><img id="flecha" src=view/images/flecha.png></a>'
            )
            $("#maps").css({ "width": "80%", "height": "40%" })
            count = 1

        })
    } while (count == 1);
}

function pagination(){


        $.ajax({
          type: 'GET',
          dataType: "json",
          url: "module/shop/controller/controller_shop.php?op=count_pords"
        })
          .done(function (data) {
              console.log(data)
           console.log( data[0].total)
           var number_products= data[0].total
           pages=number_products/3
           console.log(pages)
            $('#pagination').bootpag({
              total: pages,
              page: 1,
              maxVisible: 3
            }).on("page", function ( event, num) {
              console.log(num);
              number= 3 *(num-1)
              $.ajax({
                type: 'GET',
                dataType: "json",
                url: "module/shop/controller/controller_shop.php?op=all&number=" + number,
            })
              
              .done(function (data) {
                console.log(data);
      
              $('#list_products').empty();
           
              ajaxForSearch("module/shop/controller/controller_shop.php?op=all&number=" + number)

            });
          });//end on
          });//enddone
      }