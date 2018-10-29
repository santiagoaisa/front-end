window.addEventListener("load",initComponentes);


function initComponentes(){

    if(typeof(Storage)!='undefined'){
        document.write("SI");
        console.log("Si tiene localStorage");
    }else{
        console.log("No tiene localStorage");
        document.write("NO");
    }
    
    
    localStorage.setItem("curso","Front End");
    
    console.log(localStorage.getItem("curso"));
    
    let auto={
    color : 'verde',
    motor : 1500,
    marca : 'Honda'
    
    };
    
    localStorage.setItem("auto",JSON.stringify(auto));
    
   document.write(document.getElementById("parrafo"));

    document.getElementById("parrafo").innerHTML =JSON.parse(localStorage.getItem("auto"));

};