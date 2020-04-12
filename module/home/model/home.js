$(document).ready(function () {
    // console.log("home");
    // brand();
    gif();
    // type();
    photo();
    click_cat();
    click_prod();
    // click_more();
    check();

});

function photo() {
    var limit = 4

    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "module/home/controller/controller_home.php?op=val&limit=" + limit
    })

        .done(function (data) {
            // console.log(data);

            for (row in data) {
                // console.log("for");
                // console.log(row);
                $("#val").append(
                    // "<div class='row mt-lg-5 mt-md-3 mt-3'>" +
                    // "<div class='col-lg-4 col-md-4 col-sm-4 latest-jewel-grid'>" +
                    "<figure id='" + data[row].cod_ref + "' class='snip1321'>" +
                    "<img src= '" + data[row].route + "' class='img-thumbnail' alt=''>" +
                    "<figcaption>" +
                    "<i class='ion-upload'>" +
                    "</i>" +
                    "<h2> " + data[row].nombre + " </h2>" +
                    "<h4> " + data[row].marca + " </h4>" +
                    "</figcaption>" +
                    "</figure>"

                    // "</div>"+
                    // "</div>"
                );

            }
            $("#val").append(
                "<img src= 'view/images/view_more.png' class='view_more'>"
            );

        }).fail(function () {
            console.log("fail")
        })
    $(document).on('click', '.view_more', function () {
        limit = limit + 2
        $("#val").empty();
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "module/home/controller/controller_home.php?op=val&limit=" + limit
        })

            .done(function (data) {
                // console.log(data);

                for (row in data) {
                    // console.log("for");
                    // console.log(row);
                    $("#val").append(
                        // "<div class='row mt-lg-5 mt-md-3 mt-3'>" +
                        // "<div class='col-lg-4 col-md-4 col-sm-4 latest-jewel-grid'>" +
                        "<figure id='" + data[row].cod_ref + "' class='snip1321'>" +
                        "<img src= '" + data[row].route + "' class='img-thumbnail' alt=''>" +
                        "<figcaption>" +
                        "<i class='ion-upload'>" +
                        "</i>" +
                        "<h2> " + data[row].nombre + " </h2>" +
                        "<h4> " + data[row].marca + " </h4>" +
                        "</figcaption>" +
                        "</figure>"

                        // "</div>"+
                        // "</div>"
                    );

                }
                $("#val").append(
                    "<img src= 'view/images/view_more.png' class='view_more'>"
                );

            }).fail(function () {
                console.log("fail")
            })
    })

};

function click_prod() {
    $(document).on('click', '.snip1321', function () {
        console.log("click");

        ///CADA VEZ QUE CLICAMOS SE SUMAN LAS VISITAS DE ESE PRODUCTO A LA BASE DE DATOS 
        var cod_ref = this.getAttribute('id');
        console.log("cod_ref= " + cod_ref)
        $.ajax({
            type: "GET",
            dataType: 'json',
            url: "module/home/controller/controller_home.php?op=views&cod_ref=" + cod_ref
        }).fail(function () {
            console.log("fail")
        })


        ///AQUI LO GUARDAMOS EN LOCALSTORAGE PARA IR AL DETAILS

        localStorage.setItem('val', cod_ref);

        $(window).attr('location', 'index.php?page=controller_shop&op=list')

    })
}

function name() {
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "module/home/controller/controller_home.php?op=val"
    })
        .done(function (data) {
            // console.log(data);
            $('<div></div>').attr('class', "ion-upload0").appendTo('.name0').html(
                '<h3> ' + data[0].nombre + '</h3>'
            );
            $('<div></div>').attr('class', "ion-upload1").appendTo('.name1').html(
                '<h3> ' + data[1].nombre + '</h3>'
            );
            $('<div></div>').attr('class', "ion-upload2").appendTo('.name2').html(
                '<h3> ' + data[2].nombre + '</h3>'
            );
            $('<div></div>').attr('class', "ion-upload3").appendTo('.name3').html(
                '<h3> ' + data[3].nombre + '</h3>'
            );
            $('<div></div>').attr('class', "ion-upload4").appendTo('.name4').html(
                '<h3> ' + data[4].nombre + '</h3>'
            );
            $('<div></div>').attr('class', "ion-upload5").appendTo('.name5').html(
                '<h3> ' + data[5].nombre + '</h3>'
            );
        }).fail(function () {
            console.log("fail")
        })
}

function brand() {
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "module/home/controller/controller_home.php?op=val"
    })
        .done(function (data) {
            // console.log(data);
            $('<div></div>').attr('class', "ion-upload0").appendTo('.type0').html(
                '<h4> ' + data[0].marca + '</h4>'
            );
            $('<div></div>').attr('class', "ion-upload1").appendTo('.type1').html(
                '<h4> ' + data[1].marca + '</h4>'
            );
            $('<div></div>').attr('class', "ion-upload2").appendTo('.type2').html(
                '<h4> ' + data[2].marca + '</h4>'
            );
            $('<div></div>').attr('class', "ion-upload3").appendTo('.type3').html(
                '<h4> ' + data[3].marca + '</h4>'
            );
            $('<div></div>').attr('class', "ion-upload4").appendTo('.type4').html(
                '<h4> ' + data[4].marca + '</h4>'
            );
            $('<div></div>').attr('class', "ion-upload5").appendTo('.type5').html(
                '<h4> ' + data[5].marca + '</h4>'
            );
        }).fail(function () {
            console.log("fail")
        })
}

function gif() {
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "module/home/controller/controller_home.php?op=gif"
    })
        .done(function (data) {
            // console.log(data);
            $('<div></div>').attr('class', "blog-txt-img").appendTo('.watch').html(
                // <img src="view/images/reloj.gif" class="img-thumbnail" alt="">
                '<img src="' + data[0].route + '" tip="' + data[0].categoria + '" class="img-thumbnail" alt="">'
            );
            $('<div></div>').attr('class', "blog-txt-img").appendTo('.brazalete').html(
                // <img src="view/images/reloj.gif" class="img-thumbnail" alt="">
                '<img src="' + data[1].route + '" tip="' + data[1].categoria + '" class="img-thumbnail" alt="">'
            );
            $('<div></div>').attr('class', "blog-txt-img").appendTo('.ring').html(
                // <img src="view/images/reloj.gif" class="img-thumbnail" alt="">
                '<img src="' + data[2].route + '" tip="' + data[2].categoria + '" class="img-thumbnail" alt="">'
            );
        }).fail(function () {
            console.log("fail")
        })
}

function click_cat() {
    $(document).on('click', '.img-thumbnail', function () {
        // console.log("click");
        var type = this.getAttribute('tip');
        // console.log(type);
        localStorage.setItem('tipo', type);
        $(window).attr('location', 'index.php?page=controller_shop&op=list')
    })
}

var cartt = function (url, data) { //function/promise GENERAL 

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

function check() {
    var cart = localStorage.getItem('cart');
    console.log("cart= " + cart);

    var array = JSON.parse(cart);


    info = { array: array }
    //solamente cuando le des a checkout en el cart entrara:
    if (cart) {

        //le pasamos el array ya parseado para que en el controllador se recoja como array y no como string
        cartt("module/home/controller/controller_home.php?op=cart", info)
            .then(function (data) {
                console.log(data)


                //cuando se genera la compra obtenemos quien la ha hecho y su valor total en puntos y el cupon usado
                info = { points: parseInt(array[0][4]) * 10, user_name: array[0][3], coupon: array[0][5] }

                cartt('module/home/controller/controller_home.php?op=points', info)
                    .then(function (data) {
                        alert('compra realizada');

                        alert(data)
                    })
            })

    }

    //y al finalizar borramos los datos de localstorage tambien
    localStorage.removeItem('cart');

}


