var persona1=new Array();
var persona2=new Array();
var persona3=new Array();
var persona4=new Array();

persona1["nombre"]="Juan";
persona1["edad"]=30;


persona3["nombre"]="Felipe";
persona3["edad"]=20;

persona2["nombre"]="Felipe";
persona2["edad"]=20;

persona4["nombre"]="Gabriela";
persona4["edad"]=20;


var directorio=new Array();
directorio.push(persona1,persona4,persona3,persona2);

//directorio.sort( (personaA,personaB)=> personaA["edad"]-personaB["edad"]);



console.log(directorio.findIndex( persona => persona["nombre"]=="Gabriela" ));
