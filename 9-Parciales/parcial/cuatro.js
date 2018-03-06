function Mostrar()
{
    var num1;
    var num1;
    var multiplicar;
    var restar;
    var sumar;

    num1=prompt("Ingrese el primer numero");
    num2=prompt("Ingrese el segundo numero");
    num1=parseInt(num1)
    num2=parseInt(num2)


    if(num1=num2){

        multiplicar=num1*num2

        document.write(multiplicar);
       

        
    }else if(num1>num2){

        restar=num1-num2

        document.write(restar);
        
    }else{

        suma=num1+num2
        document.write(suma);
        
    }

}
