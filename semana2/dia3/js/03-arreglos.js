"use strict";

let arreglo3=new Array();


let numeroFrutas=prompt("¿Cuántas frutas desea registrar?");

if(isNaN(numeroFrutas)){
    alert("No es un numero");    
}

if(numeroFrutas<0){
    alert("Ingrese un número de frutas");
}

for(let i=0;i<numeroFrutas;i++){
    let fruta=prompt("Ingrese la fruta");
    arreglo3.push(fruta);
}

// arreglo3.forEach(function (elemento,index,arra) {
//     // let fruta=prompt("Ingrese la fruta");
//     // arreglo3.push(fruta);
//      document.write(`${elemento} <br>`);
// } );

arreglo3.sort();

// arreglo3.forEach( (elemento,index)=> {
//     // let fruta=prompt("Ingrese la fruta");
//     // arreglo3.push(fruta);
//      document.write(`${elemento} <br>`);
// } );

