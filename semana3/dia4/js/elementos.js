function aumentar (){
    var parrafo=document.getElementById("parrafo");
    let fontSize=parseInt(getComputedStyle(parrafo).getPropertyValue('font-size'));
       fontSize += 1;
        parrafo.style.fontSize = fontSize + "px";
    

}

function reducir (){
    var parrafo=document.getElementById("parrafo");
    let fontSize=parseInt(getComputedStyle(parrafo).getPropertyValue('font-size'));
       fontSize -= 1;
        parrafo.style.fontSize = fontSize + "px";
    

}

function negrita (){
    var parrafo=document.getElementById("parrafo");

    if(parrafo.style.fontWeight=="bold"){
        parrafo.style.fontWeight="normal";
    }else{
        parrafo.style.fontWeight="bold";
    }
}

function oblicua (){
    var parrafo=document.getElementById("parrafo");
    parrafo.style.fontStyle="italic";

}

function subrayado (){
    parrafo.style.textDecoration="underline";

}

function cambiarTexto (){
    var texto=document.getElementById("texto");
    var parrafo=document.getElementById("parrafo");

    parrafo.innerText=texto.value;

}

function insertarLabel (){
    var formulario=document.getElementById("formulario");    
    
    var label=document.createElement("label");
    label.innerHTML="MI Etiqueta"

    formulario.prepend(label);

}