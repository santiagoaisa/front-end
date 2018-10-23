"use strict";
//debugger;
/*

Realice y represente mediante un diagrama de flujo el algoritmo para
obtener la matriz transpuesta de cualquier matriz de orden M x N.
 */

/*
Definimos una matriz de 3 x 3 como
	1	4	7
	2	5	8
	3	6	9
*/


var matriz1=[[1,4],[3,4],[5,6]];


var numeroFila=matriz1[0].length;
var numeroColumna=matriz1.length;

var matriz2=new Array(numeroFila);

for (var i = 0; i < numeroFila; i++) {
	matriz2[i]=new Array(numeroColumna);
}


var columnas=0;
for (var i = 0; i < matriz1.length; i++) {
	
	columnas=matriz1[i].length;


	for (var j = 0; j < columnas; j++) {
		matriz2[j][i]= matriz1[i][j];
	}

}

console.log("Matriz original ",matriz1);
console.log("Matriz Transpuesta ",matriz2);

imprimirArreglo(matriz1);




function imprimirArreglo(matriz) {
	var fila="";

for (var i = 0; i < matriz.length; i++) {
	
	columnas=matriz[i].length;
	fila="[";

	for (var j = 0; j < columnas; j++) {
		fila=fila +" "+matriz[i][j] +"  ";
	}

	fila=fila+"]";

	console.log(fila);
}

}