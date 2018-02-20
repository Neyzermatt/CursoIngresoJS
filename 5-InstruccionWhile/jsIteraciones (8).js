function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var num;

	while(respuesta=='si'){
		contador++;
		continue

		num=prompt("ingrese un numero");
		num=parseInt(num);
		break;
	}
    while(isNaN(num)){

		num=prompt("ingrese un numero");
		num=parseInt(num);
		break;
	}
	
	if(num >0){

		positivo+=num;

	}else{

		if(num !=0){

			negativo*=num;
		}
		else{
			contador--;
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN