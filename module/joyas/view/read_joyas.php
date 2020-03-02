<div id="contenido">
    <h1 align="center"> Informacion de la joya</h1>
    <p>
    <table align="center", border='2'>
    <div id="table_read"> 
        <tr>
            <td><p>Codigo de referencia</p></td>
            <td>
                <?php
                    echo $joyas['cod_ref'];
                ?>
            </td>
        </tr>
    
        <tr>
            <td><p>Tipo de joya</p> </td>
            <td>
                <?php
                    echo $joyas['tipo'];
                ?>
            </td>
        </tr>
        
        <tr>
        <td> <p> Nombre de <?php echo $joyas['tipo']; ?></p></td>
            <td>
                <?php
                    echo $joyas['nombre'];
                ?>
            </td>
        </tr>
        
        <tr>
        <td> <p> Oro de <?php echo $joyas['tipo']; ?></p></td>
             <td>

                <?php
                    echo $joyas['oro'];
                ?>
            </td>
        </tr>
        
        <tr>
        <td> <p> Gema de <?php echo $joyas['tipo']; ?></p></td>
            <td>
                <?php
                    echo $joyas['gema'];
                ?>
            </td>
        </tr>
        
        <tr>
        <td> <p> Diametro en centimetros de <?php echo $joyas['tipo']; ?></p></td>
            <td>
                <?php
                    echo $joyas['diametro'];
                ?>
            </td>
        </tr>
        
        <tr>
        <td> <p> Forma de <?php echo $joyas['tipo']; ?></p></td>
            <td>
                <?php
                    echo $joyas['forma'];
                ?>
            </td>
            
        </tr>
        </div>
    </table>   
    </p>
    <a href="index.php?page=controller_joyas&op=list"><img src="view/img/volver.png"></a>
    <a href="index.php?page=menu"><img src="view/img/salir.png"></a>

</div>