function Mostrar()


{ 
var rep=prompt("ingrese numero");
var contarpares= 0;
var numero;

while(isNaN(numero) || numero <1)
{
    numero=parseInt("ingrese numero");
}
for(numero=rep;rep >0;rep--){

    if(rep/2==0){

        contarpares++;
        console.log(rep);
    }



console.log("los numeros pares son"+contarpares);




}
//FIN DE LA FUNCIÓN