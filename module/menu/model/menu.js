$(document).ready(function () {
    // console.log("menu");
    slider();
    click_car();
})

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
function click_car() {
    $(document).on('click', '.car', function () {
        var car = this.getAttribute('src');
        localStorage.setItem('sli', car);
        $(window).attr('location', 'index.php?page=controller_shop&op=list')
    })
}