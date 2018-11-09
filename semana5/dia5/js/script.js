
window.addEventListener("load", initComponentes);




function initComponentes() {
    var btnActualizar=document.getElementById("btnActualizar");

    btnActualizar.addEventListener("click",getUsuarios);

}


function getUsuarios(){
    var request=new XMLHttpRequest();
    let divCargando=document.getElementById("divCargando");
    
    request.onreadystatechange=function (){
        if (request.readyState==3){
           
           

            divCargando.removeAttribute("hidden");
         
        }

        if(request.readyState==4){
            console.log("CARGA TERMINADA");
            llenarTabla(JSON.parse(request.responseText));

            divCargando.setAttribute("hidden","hidden");
        }


    };

    request.open("GET","https://jsonplaceholder.typicode.com/users/");

    

    request.send(null);
}

function llenarTabla(respuesta){
    let tablaUsuario=document.getElementById("tablaUsuario");
    
    tablaUsuario.removeChild(tablaUsuario.childNodes[2]);

    let tbody=document.createElement("tbody");

    for (let i = 0; i < respuesta.length; i++) {       
        
       // tablaUsuario.innerHTML="<tr><th>Nombre</th><th>DNI</th><th>Acción</th></tr> ";    
       tbody.innerHTML+=` <tr> <td>${respuesta[i].id}</td>  <td>${respuesta[i].name}</td> <td>${respuesta[i].username}</td> <td>${respuesta[i].email}</td> <td>${respuesta[i].address.street}</td> <td>${respuesta[i].phone}</td> <td>${respuesta[i].website}</td> </tr> `;

    }

    tablaUsuario.appendChild(tbody);
}


