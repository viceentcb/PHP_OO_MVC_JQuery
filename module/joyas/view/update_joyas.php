<div id="contenido">
    <form autocomplete="on" method="post" name="form_joyas_up" id="form_joyas_up">
        <?php
        if (isset($error)) {
            print("<BR><span CLASS='styerror'>" . "* " . $error . "</span><br/>");
        } ?>

        <p>
            <strong> <label for="cod_ref">Codigo de referencia:</label> </strong>
            <input name="cod_ref" id="cod_ref" type="text" placeholder="Codigo de referencia" value="<?php echo $joyas['cod_ref'] ?>" />
            <p>
                <font color="red">
                    <span id="e_cod_ref" class="styerror"></span>
                </font>
            </p>
            <!-- <font color="red">
	
            <?php
            if (isset($error_cod)) {
                print("<BR><span CLASS='styerror'>" . "* " . $error_cod . "</span><br/>");
            } ?> 			</font> -->

        </p>


        <strong>
            <p>Tipo de joya:</p>
        </strong>
        <?php
        if ($joyas['tipo'] === "reloj") {
            // print_r("entra al if del reloj");
        ?>
            <p>
                <input type="radio" id="reloj" name="tipo" value="reloj" checked>
                <label for="reloj">Reloj</label>
                <input type="radio" id="anillo" name="tipo" value="anillo">
                <label for="anillo">Anillo</label>
                <input type="radio" id="pulsera" name="tipo" value="pulsera">
                <label for="pulsera">Pulsera</label>

            </p>

        <?php
        } else if ($joyas['tipo'] === "anillo") {
        ?>
            <input type="radio" id="reloj" name="tipo" value="reloj">
            <label for="reloj">Reloj</label>
            <input type="radio" id="anillo" name="tipo" value="anillo" checked>
            <label for="anillo">Anillo</label>
            <input type="radio" id="pulsera" name="tipo" value="pulsera">
            <label for="pulsera">Pulsera</label>

        <?php
        } else if ($joyas['tipo'] === "pulsera") {
        ?>
            <input type="radio" id="reloj" name="tipo" value="reloj">
            <label for="reloj">Reloj</label>
            <input type="radio" id="anillo" name="tipo" value="anillo">
            <label for="anillo">Anillo</label>
            <input type="radio" id="pulsera" name="tipo" value="pulsera" checked>
            <label for="pulsera">Pulsera</label>

        <?php
        }
        ?>
        <p>
            <font color="red">
                <span id="e_tipo" class="styerror"></span>
            </font>
        </p>
        <p>
            <label for="nombre">nombre:</label>
            <input name="nombre" id="nombre" type="text" placeholder="Nombre de la joya" value="<?php echo $joyas['nombre'] ?>" />
            <p>
                <font color="red">
                    <span id="e_nombre" class="styerror"></span>
                </font>
            </p>
        </p>

        <strong>
            <p>Tipo de oro:</p>
        </strong>
        <?php
        $or = explode(",", $joyas['oro']);
        ?>
        <td>
            <?php
            $busca_array = in_array("rosado", $or);
            if ($busca_array) {
            ?>
                Rosado <input type="checkbox" name="oro[]" value="rosado" checked>
            <?php
            } else {
            ?>
                Rosado <input type="checkbox" name="oro[]" value="rosado">
            <?php
            }
            ?>

            <?php
            $busca_array = in_array("blanco", $or);
            if ($busca_array) {
            ?>
                Blanco <input type="checkbox" name="oro[]" value="blanco" checked>
            <?php
            } else {
            ?>
                Blanco <input type="checkbox" name="oro[]" value="blanco">
            <?php
            }
            ?>

            <?php
            $busca_array = in_array("puro", $or);
            if ($busca_array) {
            ?>
                Puro <input type="checkbox" name="oro[]" value="puro" checked>
            <?php
            } else {
            ?>
                Puro <input type="checkbox" name="oro[]" value="puro">
            <?php
            }
            ?>
            <p>
                <font color="red">
                    <span id="e_oro" class="styerror"></span>
                </font>
            </p>

            <strong>
                <p>Tipo de gema:</p>
            </strong>
            <?php
            $gem = explode(",", $joyas['gema']);
            ?>
        <td>
            <?php
            $busca_array = in_array("diamante", $gem);
            if ($busca_array) {
            ?>
                diamante<input type="checkbox" name="gema[]" value="diamante" checked>
            <?php
            } else {
            ?>
                diamante<input type="checkbox" name="gema[]" value="diamante">
            <?php
            }
            ?>

            <?php
            $busca_array = in_array("rubi", $gem);
            if ($busca_array) {
            ?>
                rubi <input type="checkbox" name="gema[]" value="rubi" checked>
            <?php
            } else {
            ?>
                rubi <input type="checkbox" name="gema[]" value="rubi">
            <?php
            }
            ?>

            <?php
            $busca_array = in_array("zafiro", $gem);
            if ($busca_array) {
            ?>
                zafiro <input type="checkbox" name="gema[]" value="zafiro" checked>
            <?php
            } else {
            ?>
                zafiro <input type="checkbox" name="gema[]" value="zafiro">
            <?php
            }
            ?>
            <p>
                <font color="red">
                    <span id="e_gema" class="styerror"></span>
                </font>
            </p>


            <p>
                <strong><label for="diametro">Diametro en centimetros:</label></strong>
                <input name="diametro" id="diametro" type="number" step="1" min="16" max="25" value="<?php echo $joyas['diametro'] ?>" />
                <p>
                    <font color="red">
                        <span id="e_diametro" class="styerror"></span>
                    </font>
                </p>
            </p>

            <strong>
                <p>Forma:</p>
            </strong>
            <?php
            if ($joyas['forma'] === "circular") {
                // print_r("entra al if del circular");
            ?> <label for="circular">Circular</label>
                <input type="radio" id="circular" name="forma" value="circular" checked>
                <label for="cuadrada">Cuadrada</label>
                <input type="radio" id="cuadrada" name="forma" value="cuadrada">
                <label for="sport">Sport</label>
                <input type="radio" id="sport" name="forma" value="sport">
                <label for="abierta">Abierta</label>
                <input type="radio" id="abierta" name="forma" value="abierta">

            <?php
            } else if ($joyas['forma'] === "cuadrada") {
            ?>
                <label for="circular">Circular</label>
                <input type="radio" id="circular" name="forma" value="circular">
                <label for="cuadrada">Cuadrada</label>
                <input type="radio" id="cuadrada" name="forma" value="cuadrada" checked>
                <label for="sport">Sport</label>
                <input type="radio" id="sport" name="forma" value="sport">
                <label for="abierta">Abierta</label>
                <input type="radio" id="abierta" name="forma" value="abierta">


            <?php
            } else if ($joyas['forma'] === "sport") {
            ?>
                <label for="circular">Circular</label>
                <input type="radio" id="circular" name="forma" value="circular">
                <label for="cuadrada">Cuadrada</label>
                <input type="radio" id="cuadrada" name="forma" value="cuadrada">
                <label for="sport">Sport</label>
                <input type="radio" id="sport" name="forma" value="sport" checked>
                <label for="abierta">Abierta</label>
                <input type="radio" id="abierta" name="forma" value="abierta">

            <?php
            } else if ($joyas['forma'] === "abierta") {
            ?>
                <label for="circular">Circular</label>
                <input type="radio" id="circular" name="forma" value="circular">
                <label for="cuadrada">Cuadrada</label>
                <input type="radio" id="cuadrada" name="forma" value="cuadrada">
                <label for="sport">Sport</label>
                <input type="radio" id="sport" name="forma" value="sport">
                <label for="abierta">Abierta</label>
                <input type="radio" id="abierta" name="forma" value="abierta" checked>
            <?php
            }
            ?>
            <p>
                <font color="red">
                    <span id="e_forma" class="styerror"></span>
                </font>
            </p>

            <input name="Submit" type="button" value="Cambiar" onclick="validate_joyas('update')" />
            </br></br>
            <a href="index.php?page=controller_joyas&op=list"><img src="view/img/volver.png"></a>
            <a href="index.php?page=menu"><img src="view/img/salir.png"></a>

    </form>
</div>