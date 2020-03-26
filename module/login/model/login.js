$(document).ready(function () {
	console.log("READY")
	register();
});

function validate_register() {

	var user
	var passw
	var mail_

	///USER NAME
	//comprobamos que haya escrito 
	if (document.form_register.user_name_reg.value.length === 0) {
		document.getElementById('e_user_name_reg').innerHTML = "You must write name user";
		document.form_register.user_name_reg.focus();
		user = 'false'

		//comprobamos que el nombre tenga mas de 5 caracteres
	} else if (document.form_register.user_name_reg.value.length < 5) {
		document.getElementById('e_user_name_reg').innerHTML = "Name must have more of 5 characters";
		document.form_register.user_name_reg.focus();
		user = 'false'

		//nombre correcto
	} else {
		document.getElementById('e_user_name_reg').innerHTML = "";
		user = 'true'
	}

	/////END USER NAME

	/////PASSWORD
	//comprobamos que haya escrito
	if (document.form_register.passw_reg.value.length === 0) {
		document.getElementById('e_passw_reg').innerHTML = "You must write password";
		document.form_register.passw_reg.focus();
		passw = 'false'

		//comprobamos que la contraseña tenga al menos 6 caracteres
	} else if (document.form_register.passw_reg.value.length < 6) {
		document.getElementById('e_passw_reg').innerHTML = "Password must be at least 6 characters";
		document.form_register.passw_reg.focus();
		passw = 'false'

		//comprobamos que las contraseñas sean iguales 	
	} else if (document.form_register.conf_passw.value != document.form_register.passw_reg.value) {
		document.getElementById('e_passw_reg').innerHTML = "Passwords are not similar";
		document.getElementById('e_conf_passw').innerHTML = "Passwords are not similar";
		document.form_register.passw_reg.focus();
		passw = 'false'

		//todo correcto
	} else {
		document.getElementById('e_passw_reg').innerHTML = "";
		passw = 'true'
	}
	///// END PASSWORD

	////MAIL
	//regular expresion of mail
	var mail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

	//comprobamos que haya escrito
	if (document.form_register.mail.value.length === 0) {
		document.getElementById('e_mail').innerHTML = "You must write mail";
		document.form_register.mail.focus();
		mail_ = 'false'

		//comprobamos que la contraseña tenga al menos 6 caracteres
	} else if (!mail.test(document.form_register.mail.value)) {
		document.getElementById('e_mail').innerHTML = "Invalid mail";
		document.form_register.mail.focus();
		mail_ = 'false'

		//todo correcto
	} else {
		document.getElementById('e_mail').innerHTML = "";
		mail_ = 'true'
	}
	///END MAIL

	var check = 'false'
	
	if (user != 'false' && passw != 'false' && mail_ != 'false') {
		check = 'true'
	}
	console.log('check= ' + check)

	return check
}


function register() {
	console.log("Click register");
	$('#register-submit').on("click", function () {
		console.log("entra");
		if (validate_register() != 'false') {
			console.log("diferente a false")
			var userinfo = $('#form_register').serialize();
			console.log('userinfo=' +  userinfo)

			$.ajax({
                type: 'POST',
                url: 'module/login/controller/controller_login.php?op=register',	
                data: userinfo,
            })   .done(function (data) {
				console.log(data);
				if (data == '"ok"') {
					alert("Usuario registrado corerectamente")
				}else{
					alert("Usuario ya existente")

				}

			}).fail(function () {
				console.log("fail");
			})

		}

	})
}

// function login() {
//         console.log("ENTRA FUNC LOGIN")
//         $('#loginbtn').on("click", function () {
//             console.log("entra CLICK LOGIN");
//             if (validate_login() != 0){
//                 var userinfo = $('#formlogin').serialize();
//                 console.log(userinfo);
//                 $.ajax({
//                     type: 'POST',
//                     url: 'module/login/controller/controller_login.php?op=login&' + userinfo,
//                     data: userinfo,
//                 })
//                 .done(function (data) {
//                         console.log(data);
//                         if(data=='"existe"'){
//                             alert("Sesion iniciada correctamente");
//                             window.location.href = "index.php?page=controller_home&op=list";
//                         }else{
//                             alert("Hay un problema en el inicio se sesión, email o contraseña no válidos")
//                         }

//                 })
//             }


//         })
//     }