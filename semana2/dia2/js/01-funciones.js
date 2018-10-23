"use strict";

//crear menú para que el usuario eleja la operación e ingrese dos números a operar
function sumar(numero1,numero2){
	return numero1+numero2;
}

function restar(numero1,numero2){
	return numero1-numero2;
}

function multiplicar(numero1,numero2){
	return numero1*numero2;
}

function division(numero1,numero2){
	return numero1/numero2;
}

function imprimirResultado(operacion,respuesta){
	document.write("La respuesta de la "+ operacion +" es de " + respuesta +"\n Gracias");
}

function imprimir(respuesta){
	document.write(respuesta );
}

function mostrarMenu(){
	var menu="******** MENÚ ********\n" ;
	menu+= "'S' - Sumar\n" ;
	menu+= "'R' - Restar\n" ;
	menu+= "'D' - Dividir\n" ;
	menu+= "'M' - Multiplicar\n" ;
	menu+= "************************\n";
	menu+= "Ingrese una de las siguientes OPERACIONES para realizar su calculo";

	return prompt(menu).toUpperCase();

}

function validarOpcionMenu(opcionMenu){
	var esValido=false;

	if(opcionMenu=='S' || opcionMenu=='R' || opcionMenu=='M' || opcionMenu=='D'){
		esValido=true;
	}

	return esValido;	
}

function pedirNumero1(){
	return	parseInt(prompt("Ingrese el 1er Número",0));
}

function pedirNumero2(){
	return	parseInt(prompt("Ingrese el 2do Número",0));
}


function calcular(opcion,n1,n2){
	var respuesta=0;

	switch(opcion){
		case 'S':
			respuesta=sumar(n1,n2);			
			break;

		case 'R':
			respuesta=restar(n1,n2);		
			break;
		case 'D':
			respuesta=division(n1,n2);
			break;
		case 'M':
			respuesta=multiplicar(n1,n2);
			break;
		default:
		alert("La opción ingresas no existe en nuestro Menú, verifique por favor");
	}

	imprimirResultado(opcion, respuesta);
}
//////////////////////////////////////

var bandera=true

while (bandera){
	var opcion=mostrarMenu()

	 if(validarOpcionMenu(opcion)){
	 	var n1=pedirNumero1();
	 	var n2=pedirNumero2();
	 	calcular(opcion,n1,n2);
	 	bandera=false;
	 }else{
	 	mostrarMenu();
	 	bandera=true;
	 }
}
