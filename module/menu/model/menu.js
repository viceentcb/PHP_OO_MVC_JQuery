$(document).ready(function () {
    // console.log("menu");
    slider();
    click_car();
    offer_type();
    offer_brand();
    autocomplete();
    // enter();
    click_search()

})
///FUNCION PARA IMAGENES DEL SLIDER
function slider() {
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "module/menu/controller/controller_menu.php?op=slider"
    })
        .done(function (data) {
            // console.log(data);
            $('<div></div>').attr('class', "carousel-item active").appendTo('.carousel-inner').html(
                '<img src="' + data[0].route + '" class="car" alt="...">'
            );
            $('<div></div>').attr('class', "carousel-item").appendTo('.carousel-inner').html(
                '<img src="' + data[1].route + '" class="car" alt="...">',
            );
            $('<div></div>').attr('class', "carousel-item").appendTo('.carousel-inner').html(
                '<img src="' + data[2].route + '" class="car" alt="...">'
            );
        })
}

///FUNCION PARA QUE SI CLICKAS EN EL CAROUSEL TE LLEVE AL SHOP
function click_car() {
    $(document).on('click', '.car', function () {
        var car = this.getAttribute('src');
        localStorage.setItem('sli', car);
        $(window).attr('location', 'index.php?page=controller_shop&op=list')
    })
}

///FUNCION PARA QUE AYUDE CON LOS TIPOS
function offer_type() {
    console.log("offer_type")
    br = ""
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/menu/controller/controller_menu.php?op=type&brand=" + br
    })
        .done(function (data) {
            console.log(data);
            $("#type").empty();

            $("#type").append(
                '<option value="0">Type of Jewerly</option>'
            )
            for (row in data) {
                // console.log(data[row])
                $("#type").append(
                    '<option value="' + data[row].tipo + '">' + data[row].tipo + '</option>'
                )
            }
        })


    $("#brand").on("change", function () {

        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var type = $("#type").val();
        console.log("type=" + type)

        if ((brand === "") || (brand == 0)) {
            br = "";
            console.log(br);
        } else {
            br = ' where marca = "' + brand + '" '
            console.log(br);
        }

        $.ajax({
            type: "GET",
            dataType: "json",
            url: "module/menu/controller/controller_menu.php?op=type&brand=" + br
        })
            .done(function (data) {
                console.log(data);
                $("#type").empty();

                $("#type").append(
                    '<option value="0">Type of Jewerly</option>'
                )
                for (row in data) {
                    // console.log(data[row])
                    $("#type").append(
                        '<option value="' + data[row].tipo + '">' + data[row].tipo + '</option>'
                    )
                }
                $("#type option[value=" + type + "]").attr("selected", true);

            })
    })

}

///FUNCION PARA QUE AYUDE CON LAS MARCAS
function offer_brand() {
    var ty = ""
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/menu/controller/controller_menu.php?op=brand&type=" + ty
    })
        .done(function (data) {
            console.log(data);
            $("#brand").empty();

            $("#brand").append(
                '<option value="0">Brand</option>'
            )
            for (row in data) {
                // console.log(data[row])

                $("#brand").append(
                    '<option value="' + data[row].marca + '">' + data[row].marca + '</option>'
                )
            }
        });

    $("#type").on("change", function () {



        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var type = $("#type").val();
        console.log("type=" + type)

        if ((type === "") || (type == 0)) {
            ty = "";
            console.log(ty);
        } else {
            ty = ' where tipo = "' + type + '" '
            console.log(ty);
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "module/menu/controller/controller_menu.php?op=brand&type=" + ty
        })
            .done(function (data) {
                console.log(data);
                $("#brand").empty();

                $("#brand").append(
                    '<option value="0">Brand</option>'
                )
                for (row in data) {
                    // console.log(data[row])

                    $("#brand").append(
                        '<option value="' + data[row].marca + '">' + data[row].marca + '</option>'
                    )
                }

                $("#brand option[value=" + brand + "]").attr("selected", true);


            });
    });
}

///FUNCION PARA QUE AUTOCOMPLETE PRODUCTOS
function autocomplete() {
    $("#type,#brand").on("change", function () {

        $("#products").empty();

        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var type = $("#type").val();
        console.log("type=" + type)

        if ((brand != 0) && (type != 0)) {
            aut = 'where tipo= "' + type + '" and marca="' + brand + '"'
            console.log(aut);
        } else if ((brand != 0) && (type == 0)) {
            aut = 'where marca="' + brand + '"'
            console.log(aut);
        }else if ((brand == 0) && (type != 0)) {
            aut = 'where tipo= "' + type + '"'
            console.log(aut);
        }else if ((brand == 0) && (type == 0)) {
            aut = ''
            console.log(aut);
        }
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "module/menu/controller/controller_menu.php?op=autocomplete&auto=" + aut
        })
            .done(function (data) {
                console.log(data)
                var name = []
                for (row in data) {
                    name.push(data[row].nombre);
                }

                console.log(name);
                for (i = 0; i < name.length; i++) {
                    console.log(name[i]);
                    // console.log(name[row])
                    $("#products").append(
                        '<option value="' + name[i] + '">' + name[i] + '</option>'
                    )
                }
            })
    })
}

function click_search() {
    $(".a").on("click", function () {

        var type = $("#type").val();
        console.log("type="+type)
        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var product = $("#autocomplete").val();
        console.log("product=" + product)

 
            localStorage.setItem('typ', type);
            localStorage.setItem('bra', brand);
            localStorage.setItem('pro', product);
            $(window).attr('location', 'index.php?page=controller_shop&op=list')
    })
}

function enter() {
    $('#autocomplete').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            alert('You pressed a "enter" key in textbox');
        }
    });
}