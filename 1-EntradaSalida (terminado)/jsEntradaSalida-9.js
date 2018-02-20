/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{ var importe;
  var importefinal;

  importe=document.getElementById("sueldo").value;
  importe=parseInt(importe);
  importefinal=importe*10/100;
  document.getElementById("resultado").value=importefinal;


	
}
