$(function () {
    initComponentes();
});


function initComponentes() {
   
    

    $("#btnHide").click(function(){
        $("p").hide() ;
        
        
    });

    $("p").click(function(){
        $(this).css("color","red");
        $(this).css("border","1px solid #000000");
        
        
    });



    
    $("#btnComida").click(function(){
        $(".miLista > li").addClass("comida"); ;
        
        
    });

    $("#btnTabla").click(function(){
       $("#tabla1 tr:odd").css("background-color","#ddddff");
       $("#tabla1 tr:even").css("background-color","#ccffff");
        
    });

    $("#btnTabla").click(function() { 
        
       alert(this);
       alert($("#btnTabla").html());

    });
}