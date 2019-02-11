

$(function () {
    let auto = $("#auto");

    $(auto).dblclick(function () {

        $(document).mousemove(function (event) {

            let x = event.clientX;
            let y = event.clientY;

            auto.css("left", x);
            auto.css("top", y);

            console.log("x  " + x, " y  " + y);

            validar(x, y);

        });
    });



    function validar(x, y) {
        //coordenada x
        //coordenada y

        //A 1er tramo de la pista
        if (x >= 0 && x <= 500) {

            if (y <= 96) {
                perdistes();
            } else if (y >= 155) {
                perdistes();
            }
        }

        //B 1ra curva
        if (x >= 501 && x <= 518) {
            if (y <= 96) {
                perdistes();
            } else if (y >= 600) {
                perdistes();
            }

        } else if (x >= 501 && x > 518) {

            if (y <= 96) {
                perdistes();
            } else if (y >= 454) {
                perdistes();
            } else if (x > 518 && y>=454) {
                perdistes();
            }else if (x > 518 && (y>=98 && y<=360)) {
                perdistes();
            }

        }

        if(x>1000 ){

            if(y>400 && y<455){
                alert("GANASTES");
            }

        }

    }


    function perdistes() {
        $(auto).attr("src", "img/explosion.gif");
        $(document).unbind('mousemove');
        $(auto).unbind('dblclick');
      
    }



});
