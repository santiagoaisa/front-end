$(function () {

    let listaLi = $("#lista li");

    listaLi.each(function (index) {
        $(this).text("nuevo texto " + index);
    });

    $.each(listaLi, function (index, elemento) {
        elemento.setAttribute("class", "lista");

    });

    console.log($("#lista").attr("atributo"));


    listaLi.attr("pagina", "1");

    listaLi.removeAttr("borrar");

    let lista = $("#lista");
    
    let txtAgregar = $("#txtAgregar");

    $("#btnAgregar").click(function () {
       

        lista.append(`<li> ${txtAgregar.val()} </li>`);
       
        txtAgregar.val("");

    });


});