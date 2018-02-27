//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{  
	var numero;
	var num1;
    var num2;
	var resta;
	var multiplicacion;
	var suma;

	num1=prompt("ingrese su numero")
	num1=parseInt(num1)
	num2=prompt("ingrese su numero")
	num2=parseInt(num2)


   if(num1=num2){

	   multiplicacion=num1*num2
	   document.write(multiplicacion)
	   

	   
   }else if(num1>num2){
 
    resta=num1-num2
	document.write(resta)
	

   }else if(num1<num2){

	   suma=num1+num2
	   document.write(suma)
	   
   }
   
	alert("Funciona 4-if");
	
}

