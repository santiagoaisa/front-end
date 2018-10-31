var visible=false;

function iniciar(){
    let elemento =document.getElementById("menu-img");
    elemento.addEventListener("click",mostrarMenu);
}

function mostrarMenu(){
   let elemento =document.getElementById("menuprincipal");

    if(!visible){
        elemento.style.display="block";
        visible=true;            
    }else{
        elemento.style.display="none";
        visible=false;
    }

}



window.addEventListener("load",iniciar);
