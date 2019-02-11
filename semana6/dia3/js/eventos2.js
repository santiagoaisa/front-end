$(function () {

    let inputNombre = $("#nombre");
    let info = $("#info");
    let circulo = $("#circulo");
    


    inputNombre.focus(function () {
        $(this).css("width", "300px");
        $(this).css("outline-color", "blue");

    });

    inputNombre.blur(function () {
        info.text( $(this).val() );

        alert( $(this).val());
    });


    info.mousedown(function (event) { 
        console.log(event.clientX +" - "+ event.clientY );
    });

    info.mouseup(function (event) { 
        console.log(event.clientX +" - "+ event.clientY );
    });

    $(document).mousemove(function (event) { 

        let x =event.clientX;
        let y=event.clientY;
        
        circulo.css("left",x);
        circulo.css("top",y );

        if( x>400 && x<410 && y>400 && y<410)   {
            info.text("GANASTES");
        }else{
            info.text("");
        }
      
        
    });



});