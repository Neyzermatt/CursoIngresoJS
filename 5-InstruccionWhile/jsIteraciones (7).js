function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(numero!="n"){

		contador++;
		numero=prompt("Ingrese Numero");
		numero=parseInt(numero);
		acumulador+=numero;
		numero=confirm("Desea Seguir?");

		if(numero==false)
		break;


	}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN