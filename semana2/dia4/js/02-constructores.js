"use strict";

function Persona(newnombre="",newapellido="",newedad=0 ){
    let nombre=newnombre;
    let edad=newedad; 

    let persona = {
        
        apellido :newapellido ,
        
        setNombre : function(newnombre){
            nombre=newnombre;
        },    

        getNombre:function(){
            return nombre;
        },

        setApellido : function(newapellido){
            this.apellido=newapellido;
        },

        getApellido : function(){
            return this.apellido;
        },

        getToString : function(){
            return this.nombre +" - "+this.apellido
        },

        getEdad: function(){
            return edad;
        }
    };

    return persona;
}



let persona1=new Persona("ALEXANDRA","MENACHO",28);
persona1.setNombre("ALEXANDRA 2");

let persona2=new Persona("SIXTO","AISA",33);
persona2.mostrarEdad=function () {
    alert(this.getEdad());
}

let persona3=Object.create(persona2);
persona3.edad=44;

console.log(persona2.mostrarEdad());
console.log(persona3.mostrarEdad());

for(const propiedad in persona1 ){
    console.log( propiedad +" "+persona1[propiedad] );
}

//inventigar como recorrer los atributos de un objeto
//y un arreglo de objetos mostrando sus atributos


