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

    if (document.getElementById('nick')) {
        $.ajax({
            type: 'POST',
            url: 'module/login/controller/controller_login.php?op=session',
            dataType: 'json',
        })
            .done(function (data) {
                console.log("entra session done");
                // var json = JSON.parse(data);
                console.log(data);
                // var ElementDiv = document.createElement('div');
                // ElementDiv.id = "container_session";
                // ElementDiv.innerHTML = "<div id='content'>" + data.nickname + "</div>"
                //     + "<img  style='width:50px; height50px;' src=" + data.avatar + ".jpg></img>";
                // document.getElementById("container").appendChild(ElementDiv);
            })

    }

}
