"use strict";

var baseMensaje = [];

window.addEventListener("load", initComponentes);

function initComponentes() {
    if ("BASEMENSAJE" in localStorage) {
        recuperarBaseMensaje();

        for (const mensaje of baseMensaje) {
            mostrarMensaje(mensaje);
        }
    } else {
        registrarBaseMensaje();
    }
}

function recuperarBaseMensaje() {
    baseMensaje = JSON.parse(localStorage.getItem("BASEMENSAJE"));
  
}

/*
Metodo para guardar la base de clientes del localStorage
*/
function registrarBaseMensaje() {
    localStorage.setItem("BASEMENSAJE", JSON.stringify(baseMensaje));
}


function Mensaje(fullName,email,mensaje) 
{
	this.fullname = fullName;
    this.email = email;
    this.mensaje=mensaje;
}

function registrarMensaje(){
    let fullName=document.getElementById("txtFullName").value;
    let email=document.getElementById("txtEmail").value;
    let mensaje=document.getElementById("txtMensaje").value;

    let newMensaje=new Mensaje(fullName,email,mensaje);
    baseMensaje.push(newMensaje);
    localStorage.setItem("BASEMENSAJE", JSON.stringify(baseMensaje));

    

}

function mostrarMensaje(mensaje) {
    document.getElementById("lstMensaje").innerHTML += `<li class="list-group-item">${mensaje.fullname}</li> `;

}