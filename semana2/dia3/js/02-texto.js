"use strict";

let texto="Tecsup Profesionales en Ingenieria";
let arreglo=[3,4,5];

document.write(`<h1>Funciones de texto <h1> `);

document.write(`<h2>Funciones Modificatorias</h2> `);

document.write(`text inicial --> ${texto.length}  <br> `);
document.write(`arreglo inicial --> + ${arreglo.toString()}  <br>`);

document.write("tamaño del texto -->"+texto.length+"<br>");

document.write(`tamaño del arreglo -->  ${arreglo.length} <br>`);

document.write(`mayusculas -->  ${texto.toUpperCase()} <br>`);
document.write(`minuscula -->  ${texto.toLowerCase()} <br>`);


document.write(`replace TECSUP a ISUR -->  ${texto.replace("Tecsup","ISUR")} <br>`);
document.write(`replace replace i a X -->  ${texto.replace(/i/g,"X")} <br>`);
document.write(`replace replace en a en la-->  ${texto.replace(/en/,"en la")} <br>`);

document.write(`<h2>Funciones para extraer cadena</h2> `);
document.write(`substring 0 a 10 -->  ${texto.substring(0,10)} <br>`);
document.write(`substring desde 20 -->  ${texto.substring(20)} <br>`);

document.write(`slice desde 10 20 -->  ${texto.slice(-10,-1)} <br>`);
document.write(`slice desde -20 -->  ${texto.slice(-20)} <br>`);

document.write(`split ' ' -->  ${texto.split(' ')} <br>`);
document.write(`array [4] -->  ${texto[4]} <br>`);

document.write(`<h2>Funciones para recuperar indices de posiciones</h2> `);
document.write(`charAt(4) -->  ${texto.charAt(4)} <br>`);
document.write(`indexOf('T') -->  ${texto.indexOf('T')} <br>`);
document.write(`indexOf('i',20) -->  ${texto.indexOf('i',20)} <br>`);
document.write(`lastIndexOf('i') -->  ${texto.lastIndexOf('i')} <br>`);

var indice=texto.split(' ').length;
// document.write(`split ' ' --> ${texto.split(' ')[indice-2]} <br>`);

// document.write(texto.split(' ')[texto.split(' ').length-2]);

//esPalidromo("Sera lodo o dolares");

function esPalidromo(cadena){   
   let frase1 =cadena.replace(/ /g,"").replace(",","").toUpperCase();
   let frase2='';
   let largo=frase1.length-1;

   for(let i=0;i<=largo;i++ ){       
        frase2=frase2+frase1.charAt(largo-i);       
   }
   console.log(frase1===frase2 ? "SI ES PALIDROMO" : "NO ES PALIDROMO");  
}

contarVocales("Esta es una palabra larga");

function contarVocales(cadena){
    let frase =cadena.replace(/ /g,"").replace(",","").replace(".","").toUpperCase();
    let largo=frase.length-1;

    let candidad_a=0,candidad_e=0,candidad_i=0,candidad_o=0,candidad_u=0;
   
    let vocal='';
    for(let i=0;i<=largo;i++ ){       
        vocal=frase.charAt(i);

        switch (vocal){
            case 'A':
                candidad_a+=1;
                break;
            case 'E':
              candidad_e+=1;
                break;
            case 'I':
                candidad_i+=1;
                break;
            case 'O':
                candidad_o+=1;
                break;
            case 'U':
                candidad_u+=1;
                break;  
        }               
   }

   console.log("Frase",cadena);
   console.log("Cantidad de A",candidad_a);
   console.log("Cantidad de E",candidad_e);
   console.log("Cantidad de I",candidad_i);
   console.log("Cantidad de O",candidad_o);
   console.log("Cantidad de U",candidad_u);
}