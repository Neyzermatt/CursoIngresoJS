function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var num;
	
	num=prompt("ingrese numero");
	num=parseInt(num);
	
	while(num){

		

		contador++;
		num=prompt("ingrese su numero");
		num=parseInt(num);
		positivo=positivo+contador;
		

		negativo=negativo*contador;
		num=confirm("desea seguir?");
		
		

	if(num==false) 
		break;
		 }
	 
		 document.getElementById("suma").value=num;
		 document.getElementById("producto").value=num;




}//FIN DE LA FUNCIÓN