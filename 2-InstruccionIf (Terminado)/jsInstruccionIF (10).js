function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota=Math.round(Math.random()*10)

	if(nota ==9&&nota ==10){

		console.log("Excelente")
	}else if(nota <=4){

		console.log("Aprovo")

	}else if(nota >4){

		console.log("vamos que la proxima se puede")
	}

	

}//FIN DE LA FUNCIÓN