$(function(){

    //arrastrar
    $(".elemento").draggable();

    //redifinir el tamaño
    $(".elemento").resizable();


   

    //seleccionar
   // $(".lista").selectable();
    
    //ordenable
    

    let lista=$(".lista >li");

    $.each(lista, function (index, element) { 
         console.log(element.innerHTML);
    });



    
    $(".lista").sortable({
        update: function (event,ui){
            console.log("funcion ha cambiado "+ui.item.html());
        }
    });


    $("#contenido").draggable();

    $("#contenedor").droppable({
        drop: function(){
            $(this).css("background","red");
            console.log("Han soltado un elemento en el contendor");
        }
    });

    ///ANIMACIONES

    $("#btnAnimar").click(function () { 
       // $("#objetivo").effect("explode");
     //  $("#objetivo").effect("slide");

//     $("#objetivo").toggle("drop");

     //$("#objetivo").toggle("puff",3000);
     //$("#objetivo").toggle("puff",3000);
     
     $("#objetivo").effect("shake",5000);
     
     
    });


    $(document).tooltip();


    $("#btnModal").click(function () { 
        console.log("Han soltado un elemento en el contendor");
        $("#modal").dialog();
      
        
    });

});