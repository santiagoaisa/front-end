
$(function () {
    $.get("https://reqres.in/api/users", { page: 2 },
        function (response) {
            console.log(response.data);

            let dr = $("#divResultado");


            response.data.forEach(function (element, index) {
                $(dr).append(`<p> ${element.id}  ${element.first_name}  ${element.last_name} </p>`);

            });
        });


    /*
    let datos ={name:"Sixto",job:"Desarrollador"};

    $.post("https://reqres.in/api/users", datos,
        function (response) {
            console.log(response);
        }
    );
*/

    let frmCrearUsuario = $("#frmCrearUsuario");
    let txtName=$("#txtName");
    let txtJob=$("#txtJob");

    frmCrearUsuario.submit(function (e) {

        e.preventDefault();
        

        let usuario = { name: txtName.val(), job: txtJob.val() };
        let ruta =frmCrearUsuario.attr("action");

        /*
        $.post("https://reqres.in/api/users", usuario,
        function (response) {
            console.log(response);
        });
        */


    $.ajax({
        type: "POST",
        url: "https://reqres.in/api/users",
        data: usuario,
        success: function (response) {
            console.log(response);
        },
        error: function (){
            console.log("error enviando peticion");
        },
        beforeSend: function(){
            console.log("Vamos a crear un usuario");
        }

    });


    });

    let linkA =$("#linkA");

    linkA.click(function (e) { 
        e.preventDefault();
        
    });

});
