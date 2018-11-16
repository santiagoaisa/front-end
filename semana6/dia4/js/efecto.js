$(function(){

    let div1= $("#div1");
    div1.hide();

    let btnMostrar=$("#btnMostrar");
    let btnOcultar=$("#btnOcultar");
    let btnToogle=$("#btnToogle");
    let btnAnimar=$("#btnAnimar");


    btnMostrar.click(function () { 
        div1.fadeTo("slow",1);
       
    });

    btnOcultar.click(function () { 
        div1.fadeTo("slow",0);
    });

    btnToogle.click(function () { 
       //div1.toggle();

       /*
       div1.toggle(4000, function () {
           
        });

       */

      div1.fadeToggle();
    });


    btnAnimar.click(function () { 
        alert("ss");
        div.show();
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
    });

 

   
   

   

});