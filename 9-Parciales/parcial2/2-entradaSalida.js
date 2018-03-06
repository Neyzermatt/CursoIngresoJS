//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importefinal;

	importe=prompt("Ingrese su importe");
	importe=parseInt(importe);

	importefinal=importe*21/100

	document.getElementById("importe").value=importefinal+importe;
	


	alert("Funciona 2-EntradaSalida");
	
}

