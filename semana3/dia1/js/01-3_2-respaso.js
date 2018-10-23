/*
Realice un algoritmo para determinar el sueldo semanal de un trabajador
con base en las horas trabajadas y el pago por hora, considerando que después de las 40 horas cada hora se considera como
excedente y se paga el doble. Construya el diagrama de flujo, el
pseudocódigo y el diagrama N/S.
*/

var numeroHoras = 0;
var sueldoHora=10;
var total=0;

numeroHoras= parseInt(prompt("Ingrese el numero de Horas trabajadas semanalmente",0)) ;

total=numeroHoras*sueldoHora;

if(numeroHoras>40){
    total=(40*sueldoHora) + ((numeroHoras-40)*sueldoHora*2);
}

console.log("El sueldo total es de ", total);