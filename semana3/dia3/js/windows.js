"use strict";
function realizar(){
    window.location="https://binarioconsultores.com/";
}


function recargar(){
    window.location.reload();
}


function actualizarFecha(){  
   console.log(new Date());
}

function mostrarFecha1(){
    window.setInterval(
       function(){
        console.log(new Date());
       }

     ,1000);
}

function mostrarFecha2(){
    window.setInterval(
      
        ()=>{
            actualizarFecha();
        }

     ,1000);
}

function mostrarFecha3(){
    window.setInterval(
            actualizarFecha
     ,1000);
}