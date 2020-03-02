<div id="contenido">
    <div class="container">
        <div class="row">
            <h3 data-tr="LISTA DE JOYAS"></h3>
</br></br>

        </div>
        <div class="row">
            <table>
                <td>
                    <a href="index.php?page=controller_joyas&op=create"><img src="view/img/anadir.png"></a>
                </td>
                <td>
                    <a href="index.php?page=controller_joyas&op=deleteall" class="Button_red"  data-tr="Borrar todo"></a>
                </td>
            </table>
            <table id="table_joyas">
                <thead>
                    <tr>
                        <th width=125 data-tr="Codigo de referencia"></th>
                        <th width=125 data-tr="Tipo"></th>
                        <th width=125 data-tr="Nombre"></th>
                        <th width=350 data-tr="Accion"></th>
                    </tr>
                </thead>
                <tbody>
                <?php
                if ($rdo->num_rows === 0) {
                    echo '<tr>';
                    echo '<td align="center"  colspan="3">NO HAY NINGUNA JOYA</td>';
                    echo '</tr>';
                } else {
                    foreach ($rdo as $row) {
                        echo '<tr>';
                        echo '<td align="center" width=125>' . $row['cod_ref'] . '</td>';
                        echo '<td align="center" width=125>' . $row['tipo'] . '</td>';
                        echo '<td align="center" width=125>' . $row['nombre'] . '</td>';
                        echo '<td align="center" width=350>';

                        // echo '<a class="Button_blue" href="index.php?page=controller_joyas&op=read&cod_ref=' . $row['cod_ref'] . '" data-tr="Leer"></a>';
                        // echo '&nbsp;';


                        print("<div class='Button_blue' id='" . $row['cod_ref'] . "'>Read</div>");  //READ
                        echo '&nbsp;';

                        echo '<a class="Button_green" href="index.php?page=controller_joyas&op=update&cod_ref=' . $row['cod_ref'] . '" data-tr="Cambiar" ></a>';
                        echo '&nbsp;';
                        echo '<a class="Button_red" href="index.php?page=controller_joyas&op=delete&cod_ref=' . $row['cod_ref'] . '" data-tr="Borrar"></a>';
                        echo '</td>';
                        echo '</tr>';
                    }
                }
                ?>
                 </tbody>

                <tr>
                    <td>
                    </td>
                </tr>
            </table>
            <!-- <p><a href="index.php?page=menu"><img src="view/img/salir.png"></a></p> -->

        </div>
    </div>
</div>

<!-- <section id="joyas_modal">
    <div id="details_joyas">
    </div>
</section> -->
<section id="details_joyas">
</section>






