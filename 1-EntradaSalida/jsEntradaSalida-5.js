/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
    var nombre;
    var edad;
    var mens1= "Usted se llama";
    var mens2= "y tiene";
    var mensaje=mens1 + mens2;

    nombre=document.getElementById("elNombre").value;
    edad=document.getElementById("laEdad").value;
    
    alert(mens1+nombre+mens2+edad); 
    
    
	
}

