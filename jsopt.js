function fondoRed() {
	document.body.style.backgroundColor='red';

}

function fondoBlue() {
	document.body.style.backgroundColor='blue';
}

function mensajeHora() {
	var currentdate = new Date(); 
	var hora= currentdate.getHours();
	var minutos=currentdate.getMinutes();
	var segundos=currentdate.getSeconds();
	alert('La hora actual es: '+hora+':'+minutos+':'+segundos);
}

function mensajeURL() {
	alert('La URL actual es: '+window.location.href);
}

function escribirFecha() {
var currentdate = new Date(); 
var dia = currentdate.getDate();
var mes = (currentdate.getMonth()+1);
var anio = currentdate.getFullYear();
//document.body.innerHTML='La fecha actual es: '+dia+'/'+mes+'/'+anio;
document.getElementById("ioui").innerHTML='La fecha actual es: '+dia+'/'+mes+'/'+anio;
}