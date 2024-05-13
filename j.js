function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = peso / (altura * altura);
    document.getElementById('resultado-imc').innerHTML = 'Tu IMC es: ' + imc.toFixed(2);
  }
function calcularEdadMascota() {
    var edadMascota = parseFloat(document.getElementById('edad-mascota-input').value);
    var edadHumana = edadMascota * 7;
    document.getElementById('resultado-edad-mascota').innerHTML = 'La edad de tu mascota en años humanos es: ' + edadHumana;
    var tab = document.querySelector('a[href="#edad-mascota"]');
    tab.click();
}


  