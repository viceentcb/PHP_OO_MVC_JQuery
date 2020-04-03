$(document).ready(function () {
    show_cart();

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


function show_cart() {



    cart('module/cart/controller/controller_cart.php?op=prods', storage)

        .then(function (data) {
            console.log(data)
            $("#prods").append(
                '<tr>' +
                '<td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>' +
                '<td>Product Name Dada</td>' +
                '<td>In stock</td>' +

                '<td align="center">' +
                '<input name="stock" id="stock" type="number" step="1" min="0" max="25" placeholder="0" />' +
                '</td>' +

                '<td class="text-right">124,90 €</td>' +
                '<td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i>' +
                '</button> </td>' +
                '</tr>'
            );
        })
}