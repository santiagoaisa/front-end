function prenderCoche() {

    var promesa1 = new Promise(function (resolve, reject) {

        setTimeout(function () {

            reject("Exito Prendido");

        }, 3000);


    });

    return promesa1;

}




function acelerarCoche() {

    var promesa1 = new Promise(function (resolve, reject) {

        setTimeout(function () {

            reject("Exito Acelerado");

        }, 2000);


    });

    return promesa1;

}


function moverCoche() {

    var promesa1 = new Promise(function (resolve, reject) {

        setTimeout(function () {

            resolve("Exito Moviendo");

        }, 2000);


    });

    return promesa1;

}


prenderCoche().then(function (miMensaje) {
    console.log(miMensaje, "RESOLVE1");
    return acelerarCoche();

}, function (miMensaje) {
    console.log(miMensaje, "REJECT1");
    return acelerarCoche();


}).then(function (miMensaje) {
    console.log(miMensaje, "RESOLVE2");

    return moverCoche();

}, function (miMensaje) {
    console.log(miMensaje, "REJECT2");
    return moverCoche();


}).then(function (miMensaje) {
    console.log(miMensaje, "RESOLVE3");

}, function (miMensaje) {
    console.log(miMensaje, "REJECT3");

});