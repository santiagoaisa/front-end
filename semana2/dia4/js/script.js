let numeros=[10,3,2,7,1,8];
let letras=["p","a","l","a","b","r","a"];

c=console.log;

c(numeros);
c(numeros.sort( (a,b) => a-b ));

c(numeros.filter(number=> number>=8 ));

c("Cantidad de a" , contarLetras(letras,'a'));
c("Cantidad de e" , contarLetras(letras,'e'));
c("Cantidad de i" , contarLetras(letras,'i'));
c("Cantidad de o" , contarLetras(letras,'o'));
c("Cantidad de u" , contarLetras(letras,'u'));


function contarLetras(cadena,letra ){
    return cadena.filter(l=> l ==letra ).length;
}