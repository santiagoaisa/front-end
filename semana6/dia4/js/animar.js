$(function () {

    let div1 = $("#div1");
    // div1.hide();

    let btnMostrar = $("#btnMostrar");
    let btnOcultar = $("#btnOcultar");
    let btnToogle = $("#btnToogle");
    let btnAnimar = $("#btnAnimar");

    btnMostrar.click(function () {
        div1.fadeTo("slow", 1);

    });

    btnOcultar.click(function () {
        div1.fadeTo("slow", 0);
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
        animar();

    });


    setInterval(animar, 3000);


    function animar(){
        div1.animate(
            {
                marginLeft: "850px",
                
                borderWidth: 18,
                fontSize: "2em"
            }, "slow")
            .animate(
                {
                    marginTop: "800px",
                   
                    borderWidth: 1,
                    fontSize: "1em"
                }, "slow")
            .animate(
                {
                    marginLeft: "0",
                   
                    borderWidth: 18,
                }, "slow")
            .animate(
                {
                    marginTop: "0",
                   
                    borderWidth: 1,
                }, "slow");
    }

});