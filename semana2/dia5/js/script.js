function Usuario(nombre,login,password){
   
        this.nombre= nombre;
        this.login= login;
        this.password= password;
};


let usuario1=new Usuario("Jessica","jess","jessmer");
let usuario2=new Usuario("Alexandra","ale","19383");

let listaUsuarios=[];
listaUsuarios.push(usuario1);
listaUsuarios.push(usuario2);


for (const usuario of listaUsuarios) {
    console.log( ` ${usuario.nombre}  - ${usuario.login} ` ) ;
}


// for (const key in usuario2) {
//     if (usuario2.hasOwnProperty(key)) {
//         let element = usuario2[key];
//         console.log(element);
//     }
// }

/* 
dasd
*/


///crear un nuevo tipo de dato vehiculo
