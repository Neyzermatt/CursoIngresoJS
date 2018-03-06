function Mostrar()
{
    var largo;
    var ancho;
    var alambre;
    var Mdealambre;

    largo=document.getElementById("alrgo").value;
    ancho=document.getElementById("ancho").value;
    largo=parseInt(largo);
    ancho=parseInt(ancho);

    alambre=(largo*2+ancho*2)*2;
    Mdealambre=alambre*3;

    alert("se necesitaran"+(" ")+Mdealambre+(" ")+"metros de alambre");
    



    

}
