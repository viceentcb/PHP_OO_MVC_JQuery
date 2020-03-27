$(document).ready(function () {
	// console.log("READY")
	register();
	login();
	logout();
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
		document.getElementById('e_conf_passw').innerHTML = "";
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

function validate_login() {

	var user
	var passw
	// var mail_

	///USER NAME
	//comprobamos que haya escrito 
	if (document.form_login.user_name_log.value.length === 0) {
		document.getElementById('e_user_name_log').innerHTML = "You must write name user";
		document.form_login.user_name_log.focus();
		user = 'false'
	} else {
		document.getElementById('e_user_name_log').innerHTML = "";
		user = 'true'
	}

	/////END USER NAME

	/////PASSWORD
	//comprobamos que haya escrito
	if (document.form_login.passw_log.value.length === 0) {
		document.getElementById('e_passw_log').innerHTML = "You must write password";
		document.form_login.passw_log.focus();
		passw = 'false'

		//comprobamos que la contraseña tenga al menos 6 caracteres
	} else {
		document.getElementById('e_passw_log').innerHTML = "";
		passw = 'true'
	}
	///// END PASSWORD

	////MAIL
	//regular expresion of mail
	// var mail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

	//comprobamos que haya escrito
	// if (document.form_register.mail.value.length === 0) {
	// 	document.getElementById('e_mail').innerHTML = "You must write mail";
	// 	document.form_register.mail.focus();
	// 	mail_ = 'false'

	// 	//comprobamos que la contraseña tenga al menos 6 caracteres
	// } else if (!mail.test(document.form_register.mail.value)) {
	// 	document.getElementById('e_mail').innerHTML = "Invalid mail";
	// 	document.form_register.mail.focus();
	// 	mail_ = 'false'

	// 	//todo correcto
	// } else {
	// 	document.getElementById('e_mail').innerHTML = "";
	// 	mail_ = 'true'
	// }
	///END MAIL

	var check = 'false'

	if (user != 'false' && passw != 'false') {
		check = 'true'
	}
	console.log('check= ' + check)

	return check
}
function redirect_home() {
	var url = "index.php?page=controller_home&op=list"
	$(window).attr('location', url);

}

function register() {
	// console.log("Click register");
	$('#register-submit').on("click", function () {
		// console.log("entra");
		if (validate_register() != 'false') {
			// console.log("diferente a false")
			var userinfo = $('#form_register').serialize();
			console.log('userinfo=' + userinfo)
			$.ajax({
				type: 'POST',
				url: 'module/login/controller/controller_login.php?op=register',
				data: userinfo,
			}).done(function (data) {
				console.log(data);
				if (data == '"correct"') {
					alert('You have successfully registered')
					redirect_home();
				} else if (data == '"not correct"') {
					document.getElementById('e_user_name_reg').innerHTML = "This name is already in use";
				} else {
					alert('ERROR')
				}

			}).fail(function () {
				console.log("fail");
			})

		}

	})
}

function login() {
	$('#login-submit').on("click", function () {
		// console.log("entra");
		if (validate_login() != 'false') {
			// console.log("diferente a false")
			var userinfo = $('#form_login').serialize();
			console.log('userinfo=' + userinfo)
			$.ajax({
				type: 'POST',
				url: 'module/login/controller/controller_login.php?op=login',
				data: userinfo,
			}).done(function (data) {
				console.log(data);
				if (data == '"existe"') {
					alert("Sesion iniciada correctamente");
					redirect_home();
				} else {
					document.getElementById('e_user_name_log').innerHTML = "There is a problem in the login, invalid email or password";
					document.getElementById('e_passw_log').innerHTML = "There is a problem in the login, invalid email or password";
				}

			}).fail(function () {
				console.log("fail");
			})

		}

	})
}

function logout() {
	$('#logout').on("click", function () {

		$.ajax({
			type: 'POST',
			url: 'module/login/controller/controller_login.php?op=register'
		}).done(function () {
			redirect_home();

		}).fail(function () {
			console.log("fail");
		})
	})
}