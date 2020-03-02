// $(document).ready(function () {
//     console.log("list");
//         // alert(id);

//         $.ajax({
//             type: "GET",
//             dataType: 'json',
//             url: "module/order/controller/controller_order.php?op=datatable"
//         })
//             .done(function (data) { 
//                 console.log(data)
//             })
// })
$(document).ready(function () {


    // var url = new URL(window.location.href);
    // var page = url.searchParams.get("page")

    // if (page == "controller_order") {


    console.log("list");

    // var url = "module/likes/controller/likes_controller.php?op=datatable&u_id="+getUserId().responseText;          

    var url = "module/order/controller/controller_order.php?op=datatable";
    // prepare the data
    // console.log("list");
    var source =
    {
        dataType: "json",
        dataFields: [
            { name: 'tipo', type: 'string' },
            { name: 'nombre', type: 'string' },
            { name: 'diametro', type: 'string' },
            { name: 'forma', type: 'string' }
        ],
        id: 'id',
        url: url
    };

    

    var dataAdapter = new $.jqx.dataAdapter(source);
    // console.log(dataAdapter)
    $("#dataTable").jqxDataTable(
        {
            width: getWidth("dataTable"),
            pageable: true,
            pagerButtonsCount: 10,
            source: dataAdapter,
            sortable: true,
            pageable: true,
            altRows: true,
            filterable: true,
            columnsResize: true,
            pagerMode: 'advanced',
            columns: [
                { text: 'tipo', dataField: 'tipo' },
                { text: 'Nombre', dataField: 'nombre' },
                { text: 'Diametro', dataField: 'diametro' },
                { text: 'Forma', dataField: 'forma' }
            ]
        });
    
});
