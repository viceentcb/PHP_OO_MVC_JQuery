
function changeLang(lang) {
  // console.log("entra lang");
  lang = lang || localStorage.getItem('app-lang') || 'es';
  localStorage.setItem('app-lang', lang);
  $('#language').val(lang);
  var elems = document.querySelectorAll('[data-tr]');
  if (lang == "es") {
    // console.log("entra if");
    for (var x = 0; x < elems.length; x++) {
      elems[x].innerHTML = elems[x].dataset.tr;
    }
    // console.log("sale if");
  } else {
    // console.log("entra else");
    $.ajax({
      url: 'view/lang/' + lang + '.json',
      type: 'POST',
      dataType: 'json',
      success: function (data) {
        // console.log("data");
        for (var x = 0; x < elems.length; x++) {
          elems[x].innerHTML = data["strings"][elems[x].dataset.tr];
        }
      }
    });
  }
}

// window.onload = function(){
//   cambiarIdioma();
//   document.getElementById('btn-es').addEventListener('click', cambiarIdioma.bind(null, 'es'));
//   document.getElementById('btn-en').addEventListener('click', cambiarIdioma.bind(null, 'en'));
//   document.getElementById('btn-va').addEventListener('click', cambiarIdioma.bind(null, 'va'));
// }

$(document).ready(function () {
  changeLang();
  // console.log("entra doc");
  // $('#language').on("change", function () {
  $('body').on("change", "#language", function () {

    if ($(this).val() == "es") {
      changeLang('es');
    }

    if ($(this).val() == "en") {
      changeLang('en');
    }
    
    if ($(this).val() == "va") {
      changeLang('va');
    }
  });
});

