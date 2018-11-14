

window.addEventListener("load", initComponentes);

function initComponentes() {
    cargar();
}


function cargar() {
    let fecth1 = fetch('https://reqres.in/api/users/', {
        method: 'GET'
    });

    let fecth2 = fetch('https://reqres.in/api/unknown/2', {
        method: 'GET'
    });



    fecth1.then(function (response) {

        if (!response.ok) {
            throw Error(response.statusText);
        }

        return response.json();
    }).then(function (miJson) {
        console.log("promesa1", miJson.data);
        return fecth2;

    }).then(function (respuesta) {
        return respuesta.json();

    }).then(function (miJson) {       
        console.log("promesa2", miJson.data);
    }).catch(function (miError) {
        alert("ss " + miError);
    });
}


