"use strict";

let persona=new Array();
persona["nombre"]="Jorge";
persona["fecha"]="9 de Agosto";
persona["dni"]="70809034";
persona["direccion"]="Av. Aviacion";

let directorio=new Array();

let numeroPersona=prompt ("Ingrese la cantidad de personas que desea ingresar");

for (let index = 0; index < numeroPersona; index++) {
    let per=new Array();
    for (let key in persona) {
        let valor=prompt("Ingrese su "+key+"\n");
        per[key]=valor;
    }
    directorio.push(per);    
}

// console.log(directorio[1]["dni"]);

let inicio="<table><tr><th>Nombre</th><th>Dirección</th><th>DNI</th></tr>";
let fin="</table>";

let per;
let fila="";
for(let i=0;i<directorio.length;i++ ){
    per=directorio[i];
        fila=fila+`<tr><td>${per["nombre"]}</td><td>${per["direccion"]}</td><td>${per["dni"]}</td></tr>`;
}
document.write(inicio+fila+fin);

// for (let key in directorio) {
//     if (directorio.hasOwnProperty(key)) {
//         let element = directorio[key];
//         console.log(element)
        
//     }
// }