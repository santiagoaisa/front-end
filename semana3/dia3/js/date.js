"use strict";

var fecha=new Date();
var fecha1=new Date("August 09 2018");
var fecha2=new Date(2018,11,1,12,30,0);

document.write(`<h1> La fecha2: ${fecha2} </h1> `);

document.write(`<h2> Año fecha2: ${fecha2.getFullYear()} </h2> `);

let fecha3=new Date();
fecha3.setDate(fecha2.getDate()+15);
document.write(`<h2> fecha2 + 15 dias: ${fecha3.getDate()} </h2> `);

let hoy=new Date(2018,9,24);
let halloween=new Date(2018,9,31);

let milisegundos=halloween-hoy;

document.write(`<h2> Interválo días : ${(((milisegundos/1000)/60)/60)/24} </h2> `);
