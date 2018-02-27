/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{   var edad;
    var sexo;
    var estadocivil;
    var sueldo;
    var legajo;
    var Nacionalidad;

    edad=prompt("ingrese su edad");
     
     while(edad <=18||edad>=90)
     {
         if(edad=null)

         break;
     else {
         alert("usted no tiene la edad para ingresar")
         break;
     }

     }
     
      edad=prompt("ingrese de nuevo su edad");
     document.getElementById("Edad").value=edad;

     sexo=prompt("ingrese su sexo con `m´ para masculino o `f´ para femenino");

     while(sexo=="m"||sexo=="f")
     {
         if(sexo=null)
         break;

         else{

            alert("error. ingrese de nuevo su sexo");
            break;
         }
     } sexo=prompt("ingrese de nuevo su sexo");
     document.getElementById("Sexo").value=sexo;

     estadocivil=prompt("ingrese su estado civil 1-soltero, 2-casado-3-divorciados, 4-viudos");

    while(estadocivil){

        if(i=1){

            break;
        }
        if(i=2){

            break;
        }
        else if(i=3){

            break;
        }
        else if(i=4){

            break;
        }
        else{

            alert("error")
        }

            
        
     


    


         



     
    

    
    

     
    
    
             
             
        



         




     
    


    
    




 

}