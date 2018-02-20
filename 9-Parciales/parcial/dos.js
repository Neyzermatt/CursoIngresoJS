function Mostrar()
{
    var importe;
    var importefinal;

    importe=prompt("ingrese su importe");
    importe=parseInt(importe);
    importefinal=importe*21/100;
   document.getElementById("importeFinal").value=importefinal;

  
}
