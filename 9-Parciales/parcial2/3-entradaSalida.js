//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ var largo;
  var ancho;
  var alambre;
  var perimetro;
  var Mdealambre

  largo=document.getElementById("largo").value;
  ancho=document.getElementById("ancho").value;


  perimetro=largo*2 + ancho*2;
 
 alambre= perimetro*2;
  Mdealambre=alambre*6;

  alert("se necesitaran:"+(" ")+Mdealambre+(" ")+"Metros"+(" ")+"para cercar el terreno");

  





	alert("Funciona 3-EntradaSalida");
	
}

