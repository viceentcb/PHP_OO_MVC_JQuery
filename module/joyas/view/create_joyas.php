<div id="contenido">
<form autocomplete="on" method="post" name="form_joyas" id="form_joyas">
 		<?php
		if(isset($error)){
			print ("<BR><span CLASS='styerror'>" . "* ".$error . "</span><br/>");
		}?>

		<strong>	<label for="cod_ref">Codigo de referencia:</label> </strong>
			<input name="cod_ref" id="cod_ref" type="text" placeholder="Codigo de referencia" value=""/>
			<p>
			<font color="red">
			<span id="e_cod_ref" class="styerror"></span>
			</font>
			</p>
			<font color="red">

			<?php
			if(isset($error_cod)){
			print ("<BR><span CLASS='styerror'>" . "* ".$error_cod . "</span><br/>");
		}?>			</font>

		
		<strong> <p>Tipo de joya:</p> </strong>
		<label for="reloj">Reloj</label>
		<input type="radio" id="reloj" name="tipo" value="reloj">
		<label for="anillo">Anillo</label>
		<input type="radio" id="anillo" name="tipo" value="anillo">         
		<label for="pulsera">Pulsera</label>
		<input type="radio" id="pulsera" name="tipo" value="pulsera">         
		<p>
			<font color="red">
			<span id="e_tipo" class="styerror"></span>
			</font>
			</p>		
		
			<strong> <label for="nombre">nombre:</label> </strong>
			<input name="nombre" id="nombre" type="text" placeholder="Nombre de la joya" value=""/>
			<p>
			<font color="red">
			<span id="e_nombre" class="styerror"></span>
			</font>
			</p>			

		<strong> <p>Tipo de oro:</p> </strong>
		<label for="rosado">Rosado</label>
		<input type="checkbox" id="rosado[]" name="oro[]" value="rosado">
		<label for="blanco">Blanco</label>
		<input type="checkbox" id="blanco[]" name="oro[]" value="blanco">       
		<label for="puro">Puro</label>   
		<input type="checkbox" id="puro[]" name="oro[]" value="puro">         
		<p>
			<font color="red">
			<span id="e_oro" class="styerror"></span>
			</font>
			</p>

       <strong> <p>Tipo de gema:</p> </strong>
	   <label for="diamante">Diamante</label>
		<input type="checkbox" id="diamante[]" name="gema[]" value="diamante">
		<label for="zafiro">Zafiro</label>
		<input type="checkbox" id="zafiro[]" name="gema[]" value="zafiro">       
		<label for="rubi">Rubi</label>   
		<input type="checkbox" id="rubi[]" name="gema[]" value="rubi">                
		<p>
			<font color="red">
			<span id="e_gema" class="styerror"></span>
			</font>
			</p>

		
	<strong>	<label for="diametro">Diametro en centimetros:</label> </strong>
		<input name="diametro" id="diametro" type="number" step="1" min = "16"  max = "25" placeholder="20" />	
		<p>
			<font color="red">
			<span id="e_diametro" class="styerror"></span>
			</font>
			</p>	
	
		<strong> <p>Forma:</p> </strong>
		<label for="circular">Circular</label>
		<input type="radio" id="circular" name="forma" value="circular">
		<label for="cuadrada">Cuadrada</label>
		<input type="radio" id="cuadrada" name="forma" value="cuadrada">  
		<label for="sport">Sport</label>     
		<input type="radio" id="sport" name="forma" value="sport">
		<label for="abierta">Abierta</label>     
		<input type="radio" id="abierta" name="forma" value="abierta">       
		<p>
			<font color="red">
			<span id="e_forma" class="styerror"></span>
			</font>
			</p>	
		<input name="Submit" type="button" value="Crear" onclick="validate_joyas('create')"/>
		</br></br>
		<a href="index.php?page=controller_joyas&op=list"><img src="view/img/volver.png"></a>
    <a href="index.php?page=menu"><img src="view/img/salir.png"></a>
	</form>
</div>