

function llenartabla(json) {

    let tablaUsuario = document.getElementById("tablaUsuario");
    tablaUsuario.removeChild(tablaUsuario.childNodes[2]);

    let tbody = document.createElement("tbody");
    tablaUsuario.appendChild(tbody);

    json.forEach(fila => {
        tbody.innerHTML += ` <tr> <td>${fila.first_name} ${fila.last_name} </td>  <td> <img src='${fila.avatar}'/> </td>  </tr> `;

    });


}



window.addEventListener("load", initComponentes);

function initComponentes() {
    cargar();
}

function cargar() {
    let fecth1 = fetch('https://reqres.in/api/users/', {
        method: 'GET'
    })

    let fecth2 = fetch('https://reqres.in/api/unknown/2', {
        method: 'GET'
    })



    fecth1.then(function (respuesta) {
        if (respuesta.ok) {
            return respuesta.json();
        } else {
            throw new Error("Error promesa1");
        }
    }).then(function (miJson) {

        console.log("promesa1", miJson.data);

        llenartabla(miJson.data);
        return fecth2;

    }).then(function (respuesta) {

        if (respuesta.ok) {
            return respuesta.json();
        } else {
            throw new Error("Error promesa2");
        }

    }).then(function (miJson) {

        console.log("promesa2", miJson.data);

    }).catch(function (miError) {
        alert(miError);
    });
}


