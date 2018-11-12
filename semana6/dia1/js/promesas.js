
function getUsers() {
    var promesa1 = new Promise(function (resolve, reject) {


        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState == 3) {



                divCargando.removeAttribute("hidden");

            }

            if (request.readyState == 4) {
                console.log("CARGA TERMINADA");

                var respuesta = JSON.parse(request.responseText);
                if (respuesta.data.lenght > 0) {
                    console.log("HAY DATOS", this.response)
                } else {
                    console.log("NO HAY DATOS", "REJECT")
                }



            }


        };

        request.open("GET", "https://reqres.in/api/users");


    });

}


getUsers().then(function(){},function(){});

