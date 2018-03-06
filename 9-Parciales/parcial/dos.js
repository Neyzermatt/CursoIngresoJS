function Mostrar()
{
    var importe;
    var importefinal;

    importe=prompt("ingrese su importe");
    importe=parseInt(importe);
    importefinal=importe*21/100+importe;
   document.getElementById("importeFinal").value=importefinal;

  
}
