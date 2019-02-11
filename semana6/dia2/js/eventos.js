$(function () {

    let div1 = $("#div1");
    let div2 = $("#div2");
    div2.hide();

    /*
    div1.mouseover(function () { 
        div1.css("background-color", "grey");
        div1.css("cursor", "progress");
        console.log(this);
    });

    div1.mouseout(function () { 
        div1.css("background-color", "yellow");
        
    });
    */


    function amarillo() {
        $(this).css("background-color", "yellow");
    }

    function gris() {
        $(this).css("background-color", "grey");
        $(this).css("cursor", "progress");
    }

    div1.hover(amarillo, gris);


    div1.click(function () {
        div2.show();
    });

    div1.dblclick(function () {
        div2.hide();
    });




});