$(document).ready(function () {


    activity();
    session();

});

function activity() {
    $.ajax({
        type: 'GET',
        url: 'module/login/controller/controller_login.php?&op=activity',
        dataType: 'json',
    })
        .done(function (data) {
            console.log("entra activiti done");
            if (data == "inactive") {
                alert("Se ha cerrado la cuenta por inactividad")
                setTimeout('window.location.href = "index.php?page=controller_login&op=logout";', 1000);
            }
        })
}

function session() {

    if (document.getElementById('info_user')) {
        $.ajax({
            type: 'POST',
            url: 'module/login/controller/controller_login.php?op=session',
            dataType: 'json',
        })
            .done(function (data) {
                // var json = JSON.parse(data);
                console.log(data);
                $("#info_user").append(
                    // "<div class='row grid gallery-info'>" +
                    "<table>" +
                    "<td>" +
                    "<tr>"+
                    "<img  style='width:50px; height50px;' src="+data.avatar+"></img>"+
                    "<a>"+data.user_name +"</a>"+
                    "</tr>"+
                    "</td>" +
                    "</table>");

            })

    }  
}
