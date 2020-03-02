<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/PROJECT_JOYAS/';
	include($path. "model/connect.php");

	 //$numero_aleatorio = mt_rand(0,10);
	 
	 function randval(){
		 return mt_rand(0,9);
	 }
	 function randprecio(){
		return mt_rand(148,567);
	}

	class DAOjoyas{
		function insert_joyas($datos){
			$cod_ref=$datos['cod_ref'];
			$tipo=$datos['tipo'];
			$nombre=$datos['nombre'];
			// $oro="";
			$oro = implode(",",$datos['oro']);
			// $gema="";
			$gema = implode(",",$datos['gema']);
			$diametro=$datos['diametro'];
			$forma=$datos['forma'];
			$val=randval();
			$precio=randprecio();
        	$sql = " INSERT INTO joya (cod_ref, tipo, nombre, oro, gema, diametro, forma, val,precio)"
        	. " VALUES ('$cod_ref', '$tipo', '$nombre', '$oro', '$gema', '$diametro', '$forma', '$val', '$precio')";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
			connect::close($conexion);
			return $res;
		}
		
		function select_all_joyas(){
			//print_r("entra_select_all_joyas");
			$sql = "SELECT * FROM joya ORDER BY cod_ref ASC";
			// print_r("sigue_select_all_joyas");
			$conexion = connect::con();
			// print_r("sigue_select_all_joyas");
            $res = mysqli_query($conexion, $sql);
			connect::close($conexion);
			//print_r($res);
			return $res;
			//print_r("sale_select_all_joyas");
		}
		
		function select_joyas($cod_ref){
			$sql = "SELECT * FROM joya WHERE cod_ref='$cod_ref'";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
		}
		
		function update_joyas($datos){
			$cod_ref=$datos['cod_ref'];
			$tipo=$datos['tipo'];
        	$nombre=$datos['nombre'];
			// $oro="";
			$oro = implode(",",$datos['oro']);
			// $gema="";
			$gema = implode(",",$datos['gema']);
			$diametro=$datos['diametro'];
        	$forma=$datos['forma'];
        	
        	$sql = " UPDATE joya SET tipo='$tipo', nombre='$nombre', oro='$oro', gema='$gema', diametro='$diametro',
        		forma='$forma' WHERE cod_ref='$cod_ref'";
            
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
			return $res;
		}
		
		function delete_joyas($cod_ref){
			$sql = "DELETE FROM joya WHERE cod_ref='$cod_ref'";
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}

		function delete_all_joyas(){
			$sql = "DELETE FROM joya";
			
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
		}
	}