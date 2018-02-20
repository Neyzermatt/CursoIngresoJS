/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1=parseInt(document.getElementById("numeroUno").value);
    var num2=parseInt(document.getElementById("numeroDos").value);
    var res=num1+num2;

    alert("la suma es:"+(" ")+res);
	
}

function restar()
{ var num1=parseInt(document.getElementById("numeroUno").value);
  var num2=parseInt(document.getElementById("numeroDos").value);
  var res=num1-num2;

  alert("la resta es:"+(" ")+res);
	
}

function multiplicar()
{ var num1=parseInt(document.getElementById("numeroUno").value);
  var num2=parseInt(document.getElementById("numeroDos").value);
  var res=num1*num2;

  alert("el resultado de multiplicacion"+(" ")+res);
	
}

function dividir()
{ var num1=parseInt(document.getElementById("numeroUno").value);
  var num2=parseInt(document.getElementById("numeroDos").value);
  var res=num1/num2;

  alert("el resultado de la division es:"+(" ")+res);
	
}

