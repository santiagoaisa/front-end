"use strict";

function imprimirEnConsola(cadena){
    console.log("Dato ingresado en consola",cadena);
}

function imprimirEnPagina(cadena) {
    document.write(`<H1> Dato ingresado en pagina ${cadena} <h1>`);
}

//variable de tipo REST
function mostrarLibros(...libros) {
    let inicio ="<ul>";
    let fin="</ul>";
    
    let elemento="";
    for (let i = 0; i < libros.length; i++) {        
        elemento=elemento+"<li>"+libros[i]+"</li>";   
    }

    document.getElementById("encabezado").innerHTML="${inicio}+${elemento}+${fin}";

}

// mostrarLibros("Libro 1","Libro 2","Libro 3","Libro 4","Libro 4");

//funciones anonimas

var variable=function(cadena){
    document.write("<h1>"+cadena+"</h2>");
}

variable(1,2)

//Callback // Closure
function sumar(n1,n2,fx1,fx2) {
    console.log(n1+n2);
    fx1(n1);
    fx2(n2);
}

// sumar(9,2, (parametro) => {
//     console.log("FX1",parametro*2);
// }, function(parametro) {
//     console.log("FX2",parametro*3);
// } )

var f1=(cadena)=>{
    document.write("<h1>"+cadena+"</h2>");
}

// f1("Función Anónima");


//variable de tipo REST
function mostrarLibrosV2(l1,l2) {
    
   let texto=`<ul>
                <li> * ${l1}</li>
                <li> * ${l2}</li>
            </ul> ` ;

   document.write(texto);
}

mostrarLibrosV2("Volar Sobre el Pantano","No me esperes en Abril");




