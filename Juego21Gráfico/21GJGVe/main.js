var fa = new Fabrica();
fa.crearMazo();
fa.mezclarCarta();
var puntajes=[];
var suma=0;
document.getElementById('ingresar').addEventListener('click', function() {
    var nombre = document.getElementById('nombre').value;
    document.getElementById('nom').innerHTML = nombre;
});
document.getElementById('pedir').addEventListener('click', function() {
    fa.pedirCarta(fa.mazoMezclado);
});
document.getElementById('validar').addEventListener('click', function() {
    fa.validarCarta();
});