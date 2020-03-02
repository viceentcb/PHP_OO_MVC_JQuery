function validate_cod_ref(cod_ref) {
    if (cod_ref.length > 0) {
        var regexp = /^([A-Z]{1})([0-9]{3})$/;
        return regexp.test(cod_ref);
    }
    return false;
}
// function validate_diametro(diametro){
//     if (cod_ref.length > 0) {
//         var regexp = /^[0-9]{3}$/;
//         return regexp.test(cod_ref);
//     }
//     return false;
// }
// function validate_nombre(nombre){
//     if (nombre.length > 0){
//         var reg=/^[a-zA-Z]*$/;
//         return reg.test(nombre);
//     }
//     return false;
// }

// function validate_tipo(texto){
//   var i;
//   var key=0;
//   for(i=0; i<texto.length;i++){
//       if(texto[i].checked){
//           key=1
//       }
//   }

//   if(key==1){
//       return true;
//   }
//   if(key==0){
//       return false;
//   }
// }

// function validate_forma(texto){
//   var i;
//   var key=0;
//   for(i=0; i<texto.length;i++){
//       if(texto[i].checked){
//           key=1
//       }
//   }

//   if(key==1){
//       return true;
//   }
//   if(key==0){
//       return false;
//   }
// }

// function validate_oro(texto){
//   var i;
//   var key=0;
//   for(i=0; i<texto.length;i++){
//       if(texto[i].checked){
//           key=1
//       }
//   }

//   if(key==1){
//       return true;
//   }
//   if(key==0){
//       return false;
//   }
// }
// function validate_gema(texto){
//   var i;
//   var key=0;
//   for(i=0; i<texto.length;i++){
//       if(texto[i].checked){
//           key=1
//       }
//   }

//   if(key==1){
//       return true;
//   }
//   if(key==0){
//       return false;
//   }
// }

function validate_array(texto){
  var i;
  var key=0;
  for(i=0; i<texto.length;i++){
      if(texto[i].checked){
          key=1
      }
  }

  if(key==1){
      return true;
  }
  if(key==0){
      return false;
  }
}

// function validate_oro(array){
//   var check=false;
//   for ( var i = 0, l = array.options.length, o; i < l; i++ ){
//       o = array.options[i];
//       if ( o.selected ){
//           check= true;
//       }
//   }
//   return check;
// }


function validate_joyas(op){

    var check=true
    
    var v_cod_ref=document.getElementById('cod_ref').value;
    var v_nombre=document.getElementById('nombre').value;
    var v_diametro=document.getElementById('diametro').value;
    var v_tipo=document.getElementsByName('tipo');
    var v_forma=document.getElementsByName('forma');
    var v_oro=document.getElementsByName('oro[]');
    var v_gema=document.getElementsByName('gema[]');



//  console.log(v_tipo);

    
    var cod_ref=validate_cod_ref(v_cod_ref);
    var tipo=validate_array(v_tipo);
    var forma=validate_array(v_forma);
    var oro=validate_array(v_oro);
    var gema=validate_array(v_gema);



    // var r_nombre=validate_nombre(v_nombre);

    console.log("Entra");
    console.log("v_cod_ref=" + v_cod_ref);
    if (v_cod_ref==="") {
        console.log("Entra if campo vacio")
        document.getElementById('e_cod_ref').innerHTML = "Este campo no puede quedar vacío";
          check=false;
        return check;
    }else if (!cod_ref) {
        document.getElementById('e_cod_ref').innerHTML = "El Codigo de referencia introducido no es valido";
          check=false;
        return check;
    } else {
		document.getElementById('e_cod_ref').innerHTML = "";
  }
  
  console.log("v_tipo" + v_tipo);
  if(!tipo){
  check=false;
    document.getElementById('e_tipo').innerHTML = "No has seleccionado ningun tipo";
    return check
   }else{
   document.getElementById('e_tipo').innerHTML = "";
  }
  

  console.log("v_nombre" + v_nombre);
    if (v_nombre==="") {
        document.getElementById('e_nombre').innerHTML = "Este campo no puede quedar vacío";
          check=false;
        return check;
    } else {
        document.getElementById('e_nombre').innerHTML = "";
    }

    if(!oro){
      check=false;
        document.getElementById('e_oro').innerHTML = "No has seleccionado ningun oro";
        return check 
       }else{
       document.getElementById('e_oro').innerHTML = "";
      }

      if(!gema){
        check=false;
          document.getElementById('e_gema').innerHTML = "No has seleccionado ninguna gema";
          return check 
         }else{
         document.getElementById('e_gema').innerHTML = "";
        }

    console.log("v_diametro" + v_diametro);
    if (v_diametro==="") {
      document.getElementById('e_diametro').innerHTML = "Este campo no puede quedar vacío";
        check=false;
      return check;
    }else if((v_diametro<15)||(v_diametro>26)){
      document.getElementById('e_diametro').innerHTML = "El diametro tiene que ser mayor de 15 y menor que 25";
      check=false;
    return check
    } else {
      document.getElementById('e_diametro').innerHTML = "";
  }

  if(!forma){
    check=false;
      document.getElementById('e_forma').innerHTML = "No has seleccionado ninguna forma";
      return check
     }else{
     document.getElementById('e_forma').innerHTML = "";
    }

  check=true;
  if(check!=false){
    console.log("entra if js");
    
    if(op==='create'){
      document.form_joyas.submit();
      document.form_joyas.action="index.php?page=controller_joyas&op=create";
    }
    if(op==='update'){
      document.form_joyas_up.submit();
      document.form_joyas_up.action="index.php?page=controller_joyas&op=update";
    }

  }
}

// function validate_joyas_update(){
//   var check=true
    
//     var v_cod_ref=document.getElementById('cod_ref').value;
//     var v_nombre=document.getElementById('nombre').value;
//     var v_diametro=document.getElementById('diametro').value;

// //  console.log(v_tipo);


//     var r_cod_ref=validate_cod_ref(v_cod_ref);

//     // var r_nombre=validate_nombre(v_nombre);

//     console.log("Entra");
//     console.log("v_cod_ref=" + v_cod_ref);
//     if (v_cod_ref==="") {
//         console.log("Entra if campo vacio")
//         document.getElementById('e_cod_ref').innerHTML = "Este campo no puede quedar vacío";
//           check=false;
//         return check;
//     }else if (!r_cod_ref) {
//         document.getElementById('e_cod_ref').innerHTML = "El Codigo de referencia introducido no es valido";
//           check=false;
//         return check;
//     } else {
// 		document.getElementById('e_cod_ref').innerHTML = "";
//   }
  
//   console.log("v_nombre" + v_nombre);
//     if (v_nombre==="") {
//         document.getElementById('e_nombre').innerHTML = "Este campo no puede quedar vacío";
//           check=false;
//         return check;
//     } else {
//         document.getElementById('e_nombre').innerHTML = "";
//     }

//     console.log("v_diametro" + v_diametro);
//     if (v_diametro==="") {
//       document.getElementById('e_diametro').innerHTML = "Este campo no puede quedar vacío";
//         check=false;
//       return check;
//     }else if(15>v_diametro>26){
//       document.getElementById('e_diametro').innerHTML = "El diametro tiene que ser mayor de 15 y menor que 25";
//       check=false;
//     return check
//     } else {
//       document.getElementById('e_diametro').innerHTML = "";
//   }
//     document.form_joyas_up.submit();
// 	document.form_joyas_up.action="index.php?page=controller_joyas&op=update";

// }