
function getUsers() {
    var promesa1 = new Promise(function (resolve, reject) {


        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState == 3) {

            }

            if (request.readyState == 4 && request.status == 200) {

                var respuesta = JSON.parse(request.responseText);
                resolve(respuesta);

            }

            if (request.status == 404) {

                reject("NO HAY DATOS");
            }



        };

        request.open("GET", "https://reqres.in/api/users/");
        request.send(null);

    });


    return promesa1;

}



function getRose() {
    var promesa1 = new Promise(function (resolve, reject) {


        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState == 3) {

            }

            if (request.readyState == 4 && request.status == 200) {

                var respuesta = JSON.parse(request.responseText);
                resolve(respuesta);

            }

            if (request.status == 404) {

                reject("NO HAY DATOS ROSE");
            }



        };

        request.open("GET", "https://reqres.in/api/unknown/2");
        request.send(null);

    });


    return promesa1;

}


getUsers().then(function (respuesta) {
    console.log("promesa1", respuesta);
    return getRose();
}
).then(function (respuesta) {
    console.log("promesa2", respuesta);
}).catch(function (miError) {
    alert(miError);
});

