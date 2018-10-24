function iniciar(){
   

   parrafosDe


}

function parrafos(){
    var misParrafos=document.getElementsByTagName("p");
    //misParrafos[0].innerText
   
    for (const parrafo of misParrafos) {
        console.log(parrafo.innerText);
    }


}

function parrafosPorNombre(){
    var misParrafos=document.getElementsByName("parrafo");
    //misParrafos[0].innerText
   
    for (const parrafo of misParrafos) {
        console.log(parrafo.innerText);
    }


}

function parrafosPorQuery(){
    var misParrafos=document.querySelectorAll("body > p");
    //misParrafos[0].innerText
   
    for (const parrafo of misParrafos) {
        console.log(parrafo.innerText);
    }


}

function parrafosDeSeccion(){

    let miseccion=document.getElementById("#misection");
    
    let misParrafos= miseccion.getElementsByTagName("p");

    for (const parrafo of misParrafos) {
        parrafo.innerHTM;
    }


}