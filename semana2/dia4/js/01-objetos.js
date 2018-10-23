
let persona={
    nombre : "Sebastian",
    edad : 40,
    apellido: "Juarez",
    gustos:{
        comida:"ceviche",
        color:"azul",
        curso: "css"
    },



    getFullName : function(){
        return this.nombre +" "+this.apellido;
    },

    setNombre : function(nombre){
        this.nombre=nombre;
    }

};



const c=console.log;

persona.setNombre("SIXTO");
document.write(`<h1>${persona.getFullName()} </h1>`);

c(persona.nombre);

