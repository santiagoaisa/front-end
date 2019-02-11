var arrayCliente = [];
var referenciaDatabase;
var referenciaStorage;


window.addEventListener("load", initComponentes);



function initComponentes() {
    firebase.initializeApp(config);
    referenciaDatabase = firebase.database().ref("clientes");
  //  referenciaStorage = firebase.storage().ref();

    referenciaDatabase.on('value', data => {
        console.log("DATA",data.key);
        llenarTabla(data);
    })

}


function llenarTabla(data) {
    let tablaCliente = document.getElementById("tablaCliente");
    tablaCliente.removeChild(tablaCliente.childNodes[2]);
    let tbody = document.createElement("tbody");

    if (data) {

        data.forEach((fila) => {
            tbody.innerHTML += ` <tr id=${fila.key}> <td>${fila.val().razonsocial}</td>  <td>${fila.val().direccion}</td> <td>${fila.val().distrito}</td> <td>${fila.val().lineacredito}</td> <td>  <button type="button" class="btn btn-danger">Eliminar</button>  </td> <td>  <button type="button" class="btn btn-warning">Modificar</button>  </td>  </tr> `;

            console.log("DATA",fila.val().razonsocial);
        });

        tablaCliente.appendChild(tbody);
    }else{
        console.log("DATA","SIN DATOS");
    }




}
