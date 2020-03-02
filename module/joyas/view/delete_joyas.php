<div id="contenido">
    <form autocomplete="on" method="post" name="delete_joya" id="delete_joya">
        <table border='0'>
            <tr>
                <td align="center"  colspan="2"><p>¿Desea borrar el producto <strong> <?php echo $joyas['tipo']?> <?php echo $joyas['nombre'] ?> </strong>  con codigo de referencia <strong><?php echo $joyas['cod_ref'];?></strong> ?<p></td>
                
            </tr>
            <tr>
                <td align="center"><button class="Button_green"name="delete" id="delete">Aceptar</button></td>
                <td align="center"><a class="Button_red" href="index.php?page=controller_joyasr&op=list">Cancelar</a></td>
            </tr>
        </table>
        </br></br>
        <a href="index.php?page=controller_joyas&op=list"><img src="view/img/volver.png"></a>
    <a href="index.php?page=menu"><img src="view/img/salir.png"></a>
    </form>
</div>