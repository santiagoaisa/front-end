
$(function(){

    $("#miUl");
    
    $("#btnJuego").click(function () { 
        let ulJuego=$("ul:eq(1)");
        
        if(ulJuego.hasClass("juego")){
            ulJuego.removeClass("juego");
        }else{
            ulJuego.addClass("juego");
        }

    });

    function ocultar(){
        $("p").hide() ;
    }

   
    $("#btnHide,#btnHide1").click(ocultar);

    $("[nombre='red_social']").css("color","#CCCCCC").css("text-decoration","none");

});