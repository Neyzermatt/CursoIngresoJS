function Mostrar()
{
    var DiadelaSemana;

    DiadelaSemana=prompt("Ingrese un dia de la semana");

    switch(DiadelaSemana){

        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":

        alert("A Trabajar!!!");
        break;

        case "sabado":
        case "domingo":

        alert("es fin de semana");
    }

}
